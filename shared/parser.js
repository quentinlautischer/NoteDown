
import flashcardTemplate from './models/flashcardTemplate.js';

var global_store, global_imageMapper; //global vars to be called by image links

var header_index;

function parse(str, store, imageMapper) {
  //The main parsing function.
  global_store = store;
  global_imageMapper = imageMapper;
  header_index = 0;
  return parse_blocks(str, false);
}

function parse_blocks(str, allow_raw) {
  //allow_raw is for nested blocks, where raw text need not be wrapped
  
  //Make all newlines consistent, then split string into lines
  str = str.replace (/\r\n/g, '\n');
  str = str.replace (/\r/g, '\n');

  //Block-level elements
  var block_array = [{content:str.split('\n')}];

  check_codeblock(block_array);
  check_codeblock_lang(block_array);
  check_header_setext(block_array);
  check_header_atx(block_array);
  check_blockquote(block_array);
  check_hrule(block_array);
  check_flashcard(block_array);
  check_list_ordered(block_array);
  check_list_unordered(block_array);
  check_table(block_array);
  check_paragraph(block_array);
  
  if (!allow_raw) {
    for (var b = 0; b < block_array.length; ) {
      if (block_array[b].tag == null) { block_array.splice(b,1); }
      else { b++; }
    }
  }
  return render_block(block_array);
}

function parse_span(str) {
  //Span-level elements
  var span_array = [{content:str}];

  check_backslash_escape(span_array);
  check_links(span_array);
  
  return render_span(span_array);
}

function render_block(blocks) {
  var result = '';
  for (var i = 0; i < blocks.length; i++) {
    if (i > 0) { result += '\n\n'; }
    var block = blocks[i];
    var attrs = '';
    if (block.attributes != null) {
      for (var a = 0; a < block.attributes.length; a++) {
        attrs += ' ' + block.attributes[a][0] + '="' + block.attributes[a][1] + '"';
      }
    }
    if (block.tag == null) {
      result += block.content;
    } else if (block.content == null) {
      result += '<' + block.tag + attrs + ' />';
    } else {
      result += '<' + block.tag +  attrs + '>' + block.content + '</' + block.tag + '>';
    }
  }
  return result;
}

function render_span(span) {
  var result = '';
  for (var i = 0; i < span.length; i++) {
    result += span[i].content;
  }
  return result;
}



////////////////////////////////////////////
/* Finds Header and returns <H1>Header</H1> 
/       ======
/ AND   Header and returns <H2>Header</H2>
/       ------
*/
function check_header_setext(blocks) {
  var patt = /^(=+|-+)\s*$/;
  var match;
  
  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 1; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var mag = (match[1].charAt(0) == '=') ? 1 : 2;

          var raw1 = {content:content.slice(0,l-1)};
          var header_setext = {tag:'h'+mag, content:content[l-1]};
          var raw2 = {content:content.slice(l+1,content.length)};

          blocks.splice(b, 1, raw1, header_setext, raw2);
          b++;
          break;
        }
      }
    }
  }
}

////////////////////////////////////////////
/* Finds #(repeated i times) Header and 
/ returns <H${i}>Header</H${i}> 
*/
function check_header_atx(blocks) {
  var patt = /^(#{1,6})\s*(.+?)\s*#*$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {

          var raw1 = {content:content.slice(0,l)};
          var header_atx = {tag:'h'+match[1].length, content:match[2]};
          var raw2 = {content:content.slice(l+1,content.length)};

          blocks.splice(b, 1, raw1, header_atx, raw2);
          b++;
          break;
        }
      }
    }
  }
}

function check_blockquote(blocks) {
  var patt = /^>\s(.*)$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var inner_content = '';
          var same_block = true; //Keeps track of inner blockquote blocks
          for (var end = l; end < content.length; end++) {
            if ((match = patt.exec(content[end])) != null) {
              inner_content += match[1] + '\n';
              same_block = true;
            }
            else if (content[end].trim().length == 0) { //End of block may mean end of blockquote
              inner_content += '\n';
              same_block = false;
            } else if (same_block) { inner_content += content[end] + '\n'; }
            else { break; }
          }
          inner_content = parse_blocks(inner_content, false);

          var raw1 = {content:content.slice(0,l)};
          var blockquote = {tag:'blockquote', content:inner_content};
          var raw2 = {content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, blockquote, raw2);
          b++;
          break;
        }
      }
    }
  }
}

function check_hrule(blocks) {
  var patt = /^[ ]{0,3}(-|_|\*)[ ]{0,2}(?:\1[ ]{0,2}){2,}\s*$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {

          var raw1 = {content:content.slice(0,l)};
          var header_atx = {tag:'hr'};
          var raw2 = {content:content.slice(l+1,content.length)};

          blocks.splice(b, 1, raw1, header_atx, raw2);
          b++;
          break;
        }
      }
    }
  }
}

function check_codeblock(blocks) {
  var patt = /^(?:[ ]{4}|\t)(.*)$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var inner_content = '';
          for (var end = l; end < content.length; end++) {
            if ((match = patt.exec(content[end])) != null) {
              inner_content += match[1] + '\n';
            }
            else if (content[end].trim().length == 0) { //End of block may mean end of blockquote
              inner_content += '\n';
            } else { break; }
          }

          var raw1 = {content:content.slice(0,l)};
          var code = {tag:'code', content:inner_content};
          var pre = {tag:'pre', content:render_block([code])};
          var raw2 = {content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, pre, raw2);
          b++;
          break;
        }
      }
    }
  }
}

function check_codeblock_lang(blocks) {
  var patt = /^```(.*)$/;
  var match;
  var codeblocks;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var code_class = match[1];
          var inner_content = '';
          var open = true;
          for (var end = l+1; end < content.length; end++) {
            if ((match = patt.exec(content[end])) != null) {
              open = false;
              break;
            } else {
              if (end > l+1) { inner_content += '\n'; }
              inner_content += content[end];
            }
          }
          if (open) { break; }
          var raw1 = {content:content.slice(0,l)};
          var code = {tag:'code', content:inner_content};
          if (code_class != null) { code.attrs = ['class', code_class]; }
          var pre = {tag:'pre', content:render_block([code])};
          var raw2 = {content:content.slice(end+1,content.length)};

          blocks.splice(b, 1, raw1, pre, raw2);
          b++;
          break;
        }
      }
    }
  }
}

function check_flashcard(blocks) {
  var patt = /^\{(.+)\}$/
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length - 2; l++) {
        match = [];
        for (var m = 0; m < 3; m++) { match.push(patt.exec(content[l+m])); }
        if (match[0] != null && match[1] != null && match[2] != null) {
          var raw1 = {content:content.slice(0,l)};
          var flashcard = {tag:'div', content:makeFlashcard(match[0][1], match[2][1].split('|'), match[1][1].split('|'))};
          var raw2 = {content:content.slice(l+3,content.length)};

          blocks.splice(b, 1, raw1, flashcard, raw2);
          b++;
          break;
        }
      }
    }
  }
}

function check_list_ordered(blocks) {
}

function check_list_unordered(blocks) {
}

function check_table(blocks) {
}

function check_paragraph(blocks) {
  var patt = /^[ ]{0,3}(.+)$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var end = l+1;
          while (end < content.length && content[end].trim().length > 0) { end++; }
          var p_content_array = content.slice(l,end);
          var inner_content = '';
          for (var i = 0; i < p_content_array.length; i++) {
            inner_content += (i > 0 ? '\n' : '') + p_content_array[i];
          }

          var raw1 = {content:content.slice(0,l)};
          var paragraph = {tag:'p', content:parse_span(inner_content)};
          var raw2 = {content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, paragraph, raw2);
          b++;
          break;
        }
      }
    }
  }
}


function check_backslash_escape(span_array) {
  for (var s = 0; s < span_array.length; s++) {
    var content = span_array[s].content;
    content = content.replace(/\\\\/g, '&bsol;').replace(/\\`/g, '&grave;').replace(/\\\*/g, '&ast;').replace(/\\_/g, '&lowbar;');
    content = content.replace(/\\\{/g, '&lbrace;').replace(/\\\}/g, '&rbrace;').replace(/\\\[/g, '&lbrack;').replace(/\\\]/g, '&rbrack;');
    content = content.replace(/\\\(/g, '&lpar;').replace(/\\\)/g, '&rpar;').replace(/\\#/g, '&num;').replace(/\\\+/g, '&plus;');
    content = content.replace(/\\-/g, '&minus;').replace(/\\\./g, '&period;').replace(/\\!/g, '&excl;').replace(/\\\|/g, '&vert;');
    span_array[s].content = content;
  }
}

function check_links(span_array) {
  var patt = /(!?)\[(.+?)\]\(\s*(.+?)(?:\s+(['"])(.+?)\4)?s*\)/;
  var match;
  
  for (var s = 0; s < span_array.length; s++) {
    if (span_array[s].tag == null) {
      var content = span_array[s].content;
      if ((match = patt.exec(content)) != null) {
        var alt = match[2];
        var src = match[3];
        var title = match[5]; //may be null
        
        var raw1 = {content:content.slice(0,match.index)};
        var raw2 = {content:content.slice(match.index + match[0].length,content.length)};

        if (match[1].length == 0) {
          var a1 = {tag:'a', content:'<a href="' + src + (title == null ? '' : ('" title="' + title)) + '">'};
          var content = {content:alt};
          var a2 = {tag:'a', content:'</a>'};
          span_array.splice(s, 1, raw1, a1, content, a2, raw2);
          s+=3;
        } else {
          if (src.slice(0,2) == '@:') {
            var guid = src.slice(2,src.length);
            var data = global_imageMapper(guid, global_store);
            src = 'data:image/jpeg;base64, ' + data;
          }
          var image = {tag:'img', content:'<img width="350px" src="' + src + '" alt="' + alt + (title == null ? '' : ('" title="' + title)) + '" />'};
          span_array.splice(s, 1, raw1, image, raw2);
          s++;
        }
        break;
      }
    }
  }
}

// Functions to help with span-level parsing.
function array_regex(regex_array, span_array) {
  //Searches raw text in a span array for an array of regex patterns, in the proper order.
  //Regex patterns must have global 'g' tag.
  //Returns array of three-integer arrays, one for each pattern: an array index, start character index, and end character index.
  
  if (regex_array.length == 0 || span_array.length == 0) { return []; }
  var match;
  for (var s = 0; s < span_array.length; s++) {
    if (span_array[s].tag == null && (match = regex_array[0].exec(span_array[s].content)) != null) {
      var result = [[s, match.index, match.index + match[0].length]];
      var next = array_regex(regex_array.slice(1, regex_array.length),
          span_array_slice(span_array, [s, match.index + match[0].length], [span_array.length, span_array[span_array.length-1].length])); //Find the remaining patterns in the remaining array.
      if (next == null) { return null; }
      for (var r = 0; r < next.length; r++) {
        next[r][0] += s;
        next[r][1] += match.index + match[0].length;
        next[r][2] += match.index + match[0].length;
        result.push(next[r]);
      }
      return result;
    }
  }
  return null;
}

function span_array_slice(span_array, coord1, coord2) {
  //Slices a span array like the slice() function, but in 2 dimensions.
  //Takes in two-integer arrays as coordinates (one for the object index, one for the character index)
  span_array[coord1[0]] = span_array[coord1[0]].slice(coord1[1], span_array[coord1[0]].length);
  span_array[coord2[0]] = span_array[coord2[0]].slice(0, coord2[1]);
  return span_array.slice(coord1[0], coord2[0]+1);
}

/* Functions to convert content extracted from MarkDown to HTML (for flashcards) */
function getFrontContent(front) {
    return '<p>' + front + '</p>';
}

function getContentLines(arr, name) {
    var lines = '';
    var i = 0;
    arr.forEach(function(line) {
        lines += '<p id=' + name + i++ + '>' + line + '</p>';
    });
    console.log(lines);
    return lines;
}

function makeFlashcard(front, back, hints) {
    return flashcardTemplate.html1 + getFrontContent(front)
        + flashcardTemplate.html2 + getContentLines(hints, 'hint')
        + flashcardTemplate.html3 + getContentLines(back, 'solution')
        + flashcardTemplate.html4 + flashcardTemplate.css + flashcardTemplate.js;
}

module.exports = {
    parse: parse,
    makeFlashcard: makeFlashcard // this is temporary, only until the flashcards are integrated
}

console.log("Shared module loaded");
