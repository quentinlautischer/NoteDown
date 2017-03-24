
import flashcardTemplate from './models/flashcardTemplate.js';

function parse(str) {
  //The main parsing function.
  return parse_blocks(str, false);
}

function parse_blocks(str, allow_raw) {
  //allow_raw is for nested blocks, where raw text need not be wrapped
  
  //Make all newlines consistent, then split string into lines
  str = str.replace (/\r\n/g, '\n');
  str = str.replace (/\r/g, '\n');

  //Block-level elements
  var block_array = [{tag:null, content:str.split('\n')}];

  check_block_html(block_array);
  check_header_setext(block_array);
  check_header_atx(block_array);
  check_blockquote(block_array);
  check_hrule(block_array);
  check_flashcard(block_array);
  check_table(block_array);
  check_paragraph(block_array);
  check_list_ordered(block_array);
  check_list_unordered(block_array);
  check_block_code(block_array);
  
  if (!allow_raw) { remove_raw(block_array); }
  return render_block(block_array);
}

function remove_raw(blocks) { //Get rid of the remaining raw text (mostly whitespace)
  var b = 0;
  while (true) {
    if (blocks[b].tag == null) { blocks.splice(b,1); }
    else { b++; }
    if (b >= blocks.length) { break; }
  }
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

function check_block_html(blocks) {
}

function check_header_setext(blocks) {
  var patt = /^(=+|-+)\s*$/;
  var match;
  var b = 0; //block iterator
  while (true) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 1; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var mag = (match[1].charAt(0) == '=') ? 1 : 2;

          var raw1 = {tag:null, content:content.slice(0,l-1)};
          var header_setext = {tag:'h'+mag, content:content[l-1]};
          var raw2 = {tag:null, content:content.slice(l+1,content.length)};

          blocks.splice(b, 1, raw1, header_setext, raw2);
          b++;
          break;
        }
      }
      b++;
    } else { b++; }
    if (b >= blocks.length) { break; }
  }
}

function check_header_atx(blocks) {
  var patt = /^(#{1,6})\s*(.+?)\s*#*$/;
  var match;

  var b = 0; //block iterator
  while (true) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {

          var raw1 = {tag:null, content:content.slice(0,l)};
          var header_atx = {tag:'h'+match[1].length, content:match[2]};
          var raw2 = {tag:null, content:content.slice(l+1,content.length)};

          blocks.splice(b, 1, raw1, header_atx, raw2);
          b++;
          break;
        }
      }
      b++;
    } else { b++; }
    if (b >= blocks.length) { break; }
  }
}

function check_blockquote(blocks) {
  var patt = /^>\s(.*)$/;
  var match;

  var b = 0; //block iterator
  while (true) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var inner_content = '';
          var end = l;
          var same_block = true; //Keeps track of inner blockquote blocks
          while (true) {
            if ((match = patt.exec(content[end])) != null) {
              inner_content += match[1] + '\n';
              same_block = true;
            }
            else if (content[end].trim().length == 0) { //End of block may mean end of blockquote
              inner_content += '\n';
              same_block = false;
            } else if (same_block) { inner_content += content[end] + '\n'; }
            else { break; }
            end++;
            if (end >= content.length) { break; }
          }
          inner_content = parse_blocks(inner_content, false);

          var raw1 = {tag:null, content:content.slice(0,l)};
          var blockquote = {tag:'blockquote', content:inner_content};
          var raw2 = {tag:null, content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, blockquote, raw2);
          b++;
          break;
        }
      }
      b++;
    } else { b++; }
    if (b >= blocks.length) { break; }
  }
}

function check_hrule(blocks) {
  var patt1 = /^[ ]{0,3}(?:\*[ ]{0,2})+\s*$/;
  var patt2 = /^[ ]{0,3}(?:-[ ]{0,2})+\s*$/;
  var match;

  var b = 0; //block iterator
  while (true) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt1.exec(content[l])) != null || (match = patt2.exec(content[l])) != null) {

          var raw1 = {tag:null, content:content.slice(0,l)};
          var header_atx = {tag:'hr', content:null};
          var raw2 = {tag:null, content:content.slice(l+1,content.length)};

          blocks.splice(b, 1, raw1, header_atx, raw2);
          b++;
          break;
        }
      }
      b++;
    } else { b++; }
    if (b >= blocks.length) { break; }
  }
}

function check_flashcard(blocks) {
}

function check_table(blocks) {
}

function check_paragraph(blocks) {
  var patt = /^[ ]{0,3}(.+)$/;
  var match;

  var b = 0; //block iterator
  while (true) {
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

          var raw1 = {tag:null, content:content.slice(0,l)};
          var paragraph = {tag:'p', content:inner_content};
          var raw2 = {tag:null, content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, paragraph, raw2);
          b++;
          break;
        }
      }
      b++;
    } else { b++; }
    if (b >= blocks.length) { break; }
  }
}

function check_list_ordered(blocks) {
}

function check_list_unordered(blocks) {
}

function check_block_code(blocks) {
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
