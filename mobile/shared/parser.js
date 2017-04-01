// import hljs from './node_modules/highlight.js/lib/highlight.js';
var hljs = require('highlight.js');

import flashcardTemplate from './models/flashcardTemplate.js';

var global_store, global_imageMapper; //global vars to be called by image links

var header_index;
var link_refs;

function parse(str, store, imageMapper) {
  //The main parsing function.
  global_store = store;
  global_imageMapper = imageMapper;
  header_index = 0;
  link_refs = [];
  return parse_blocks(str, false);
}

function parse_blocks(str, allow_raw) {
  //allow_raw is for nested blocks, where raw text need not be wrapped

  //Make all newlines consistent, then split string into lines
  str = str.replace (/\r\n/g, '\n');
  str = str.replace (/\r/g, '\n');

  //Block-level elements
  var block_array = [{content:str.split('\n')}];

  check_codeblock_lang(block_array);
  check_codeblock(block_array);
  check_header_setext(block_array);
  check_header_atx(block_array);
  check_blockquote(block_array);
  check_hrule(block_array);
  check_flashcard(block_array);
  check_list_ordered(block_array);
  check_list_unordered(block_array);
  check_table(block_array);
  check_refs(block_array);
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
  check_autolink(span_array);
  check_links_ref(span_array);
  check_emphasis(span_array, /[_*]{2}/g); //bold
  check_emphasis(span_array, /[_*]/g); //italic
  check_codespan(span_array);
  check_break(span_array);

  return render_span(span_array);
}

function render_block(blocks) {
  var result = '';
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var attrs = '';
    if (block.attributes != null) {
      if (block.attributes.class != null) {
        attrs += ` class="${block.attributes.class}"`
      }
      if (block.attributes.style != null) {
        attrs += ` style="${block.attributes.style}"`
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
/* Finds Header and returns <h1>Header</h1>
/       ======
/ AND   Header and returns <h2>Header</h2>
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
/ returns <h${i}>Header</h${i}>
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

////////////////////////////////////////////
/* Finds > quote1 and returns <blockquote><p>quote1
/        > quote2             quote2</p>
/                             <p>quote3</p></blockquote>
/        > quote3
/  Parses blockquote content recursively
/  Adjacent blockquotes separated by whitespace are joined
*/
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

////////////////////////////////////////////
/* Finds --- or ___ or ***, 3 or more characters, all separated by 0-2 spaces
/  Returns <hr />
*/
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

////////////////////////////////////////////
/* Finds any lines indented by 4 spaces or a tab
/  Returns <pre><code>content</code></pre>
/  Adjacent code blocks separated by whitespace are joined
*/
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
////////////////////////////////////////////
/* Finds code delimited by a line: ```code_language at the start
/  and a line ``` at the end
/  Returns <pre><code class="code_language">content</code></pre>
*/
function check_codeblock_lang(blocks) {
  ////console.log(hljs.highlight("python", '<pre><code class="python">def foo():</code></pre>', true));
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
            if ((match = patt.exec(content[end])) != null && match[1].length == 0) {
              open = false;
              break;
            } else {
              if (end > l+1) { inner_content += '\n'; }
              inner_content += content[end];
            }
          }
          if (open) { break; }
          var raw1 = {content:content.slice(0,l)};
          var code = null;
          if (code_class != null) {
            var highlit = hljs.highlight(code_class, inner_content, true);
            code = {tag:'code', content:highlit.value};
          } else {
            code = {tag:'code', content:inner_content};
          }
          code.attributes = {class: (code_class != null) ? code_class : 'nohighlight'}
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

////////////////////////////////////////////
/* Finds {Question}
/        {Hint1|Hint2|Hint3}
/        {Step1|Step2|Step3}
/  Returns a flashcard with question 'Question',
/  3 hints 'Hint1', 'Hint2', 'Hint3',
/  and a solution with 3 steps 'Step1', 'Step2', Step3'
*/
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

////////////////////////////////////////////
/* Finds + item1      Returns <ul><li><p>item1</p></li>
/        * item2              <li><p>item2
/          stillItem2         stillItem2</p></li>
/        - item3              <l1><p>item3</p>
/                             <p>stillItem3</p></li>
/          stillitem3         </ul>
*/
function check_list_unordered(blocks) {
  var patt1 = /^(?:\*|\+|-)\s+(.+)$/;
  var patt2 = /^(?:[ ]{1,4}|\t)(.+)$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt1.exec(content[l])) != null) {
          var listItems = [];
          var inner_content = null;
          var same_block = true; //Keeps track of inner blockquote blocks
          for (var end = l; end < content.length; end++) {
            if ((match = patt1.exec(content[end])) != null) {
              if (inner_content != null) { listItems.push(inner_content); }
              inner_content = match[1] + '\n';
              same_block = true;
            } else if (content[end].trim().length == 0) { //End of block may mean end of blockquote
              inner_content += '\n';
              same_block = false;
            } else if ((match = patt2.exec(content[end])) != null) { //Second paragraph in one list item
              inner_content += match[1] + '\n';
              same_block = true;
            } else if (same_block) { inner_content += content[end] + '\n'; }
            else { break; }
          }
          listItems.push(inner_content);
          inner_content = '';
          for (var i = 0; i < listItems.length; i++) {
            //inner_content repurposed as aggregate of list items
            listItems[i] = parse_blocks(listItems[i], false);
            var li = {tag:'li', content:listItems[i]};
            inner_content += render_block([li]) + '\n';
          }

          var raw1 = {content:content.slice(0,l)};
          var ul = {tag:'ul', content:inner_content};
          var raw2 = {content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, ul, raw2);
          b++;
          break;
        }
      }
    }
  }
}

////////////////////////////////////////////
/* Finds 1. item1      Returns <ol><li><p>item1</p></li>
/        2. item2              <li><p>item2
/          stillItem2         stillItem2</p></li>
/        9. item3              <l1><p>item3</p>
/                             <p>stillItem3</p></li>
/          stillitem3         </ol>
*/
function check_list_ordered(blocks) {
  var patt1 = /^[0-9]+\.\s+(.+)$/;
  var patt2 = /^(?:[ ]{1,4}|\t)(.+)$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt1.exec(content[l])) != null) {
          var listItems = [];
          var inner_content = null;
          var same_block = true; //Keeps track of inner blockquote blocks
          for (var end = l; end < content.length; end++) {
            if ((match = patt1.exec(content[end])) != null) {
              if (inner_content != null) { listItems.push(inner_content); }
              inner_content = match[1] + '\n';
              same_block = true;
            } else if (content[end].trim().length == 0) { //End of block may mean end of blockquote
              inner_content += '\n';
              same_block = false;
            } else if ((match = patt2.exec(content[end])) != null) { //Second paragraph in one list item
              inner_content += match[1] + '\n';
              same_block = true;
            } else if (same_block) { inner_content += content[end] + '\n'; }
            else { break; }
          }
          listItems.push(inner_content);
          inner_content = '';
          for (var i = 0; i < listItems.length; i++) {
            //inner_content repurposed as aggregate of list items
            listItems[i] = parse_blocks(listItems[i], false);
            var li = {tag:'li', content:listItems[i]};
            inner_content += render_block([li]) + '\n';
          }

          var raw1 = {content:content.slice(0,l)};
          var ul = {tag:'ol', content:inner_content};
          var raw2 = {content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, ul, raw2);
          b++;
          break;
        }
      }
    }
  }
}

////////////////////////////////////////////
/* Finds |header1|header2|header3|header4|
/        |-------|:------|:-----:|:------|
/        | item1 | item2 | item3 | item4 |
/  or
/        header1|header2|header3|header4
/        -------|:------|:-----:|:------
/         item1 | item2 | item3 | item4
/ Returns <table><thead><tr><th>header1</th>
/         <th style="text-align: left">header2</th>
/         <th style="text-align: center">header3</th>
/         <th style="text-align: right">header4</th></tr></thead>
/         <tbody><tr><td>header1</td>
/         <td style="text-align: left">header2</td>
/         <td style="text-align: center">header3</td>
/         <td style="text-align: right">header4</td></tr></tbody></table>
*/
function check_table(blocks) {
  var patt = /^(?:\|\s*)?([:]?-{3,}[:]?\s*\|\s*)*[:]?-{3,}[:]?(?:\s*\|)?$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 1; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null && content[l-1].trim().length > 0) {
          var headers = content[l-1].split('|');
          var format_line = content[l].split('|');
          var format = [];
          for (var f = 0; f < format_line.length; f++) {
            if (format_line[f].length == 0) {
              format.push(null);
              continue;
            }
            format_line[f] = format_line[f].trim();
            var format_f = (format_line[f].charAt(0) == ':')
                ? ((format_line[f].charAt(format_line[f].length-1) == ':') ? 'text-align: center;' : 'text-align: left;')
                : ((format_line[f].charAt(format_line[f].length-1) == ':') ? 'text-align: right;' : null);
            format.push(format_f);
          }
          var cells = [];
          var end = l+1;
          while (end < content.length && content[end].trim().length > 0) {
            cells.push(content[end].split('|'));
            end++;
          }
          var tr;
          var tr_content = [];
          var tbody_content = [];
          for (var h = 0; h < headers.length; h++) {
            if (headers[h].length == 0) { continue; }
            var th = {tag:'th', content:parse_span(headers[h].trim())}
            if (h < format.length && format[h] != null) { th.attributes = {style: format[h]}; }
            tr_content.push(th);
          }
          tr = [{tag:'tr', content:render_block(tr_content)}];
          var table_content = [{tag:'thead', content:render_block(tr)}];
          for (var i = 0; i < cells.length; i++) {
            tr_content = [];
            for (var j = 0; j < cells[i].length; j++) {
              if (cells[i][j].length == 0) { continue; }
              var td = {tag:'td', content:parse_span(cells[i][j].trim())};
              if (j < format.length && format[j] != null) { td.attributes = {style: format[j]}; }
              tr_content.push(td);
            }
            tbody_content.push({tag:'tr', content:render_block(tr_content)});
          }
          table_content.push({tag:'tbody', content:render_block(tbody_content)});

          var raw1 = {content:content.slice(0,l-1)};
          var table = {tag:'table', content:render_block(table_content)};
          var raw2 = {content:content.slice(end,content.length)};

          blocks.splice(b, 1, raw1, table, raw2);
          b++;
          break;
        }
      }
    }
  }
}

////////////////////////////////////////////
/* Finds any block of text not indented like code,
/  not containing any lines of just whitespace
/  Returns <p>content</p>
*/
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

function check_refs(blocks) {
  var patt = /^\[(.+?)\]:\s*(.+?)(?:\s+(['"])(.+?)\3)?\s*$/;
  var match;

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var title = match[4]; //may be null, image parse will handle
          link_refs.push([match[1], match[2], match[4]]);

          var raw1 = {content:content.slice(0,l)};
          var raw2 = {content:content.slice(l+1,content.length)};

          blocks.splice(b, 1, raw1, raw2);
          break;
        }
      }
    }
  }
}

////////////////////////////////////////////
/* Finds .MD specific characters that are escaped,
/  replaces them with their HTML entities to exempt them from parsing
*/
function check_backslash_escape(span_array) {
  for (var s = 0; s < span_array.length; s++) {
    var content = span_array[s].content;
    content = content.replace(/\\\\/g, '&bsol;').replace(/\\`/g, '&grave;').replace(/\\\*/g, '&ast;').replace(/\\_/g, '&lowbar;');
    content = content.replace(/\\\{/g, '&lbrace;').replace(/\\\}/g, '&rbrace;').replace(/\\\[/g, '&lbrack;').replace(/\\\]/g, '&rbrack;');
    content = content.replace(/\\\(/g, '&lpar;').replace(/\\\)/g, '&rpar;').replace(/\\#/g, '&num;').replace(/\\\+/g, '&plus;');
    content = content.replace(/\\-/g, '&minus;').replace(/\\\./g, '&period;').replace(/\\!/g, '&excl;').replace(/\\\|/g, '&vert;');
    content = content.replace(/\\&/g, '&amp;').replace(/\\</g, '&lt;').replace(/\\>/g, '&gt;');
    span_array[s].content = content;
  }
}

////////////////////////////////////////////
/* Finds [text](url), Returns <a href="url">text</a>
/  Finds [text](url "title"), Returns <a href="url" title="title">text</a>
/  Finds ![text](@:guid), Returns <img src="data:image/jpeg;base64, ${base64 data corresponding to guid}" alt="text" />
/  Finds ![text](url "title"), Returns <img src="url" alt="text" title="title" />
*/
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
      }
    }
  }
}

function check_autolink(span_array) {
  var patt = /<(https?:[/]{2}.+?)>/; //Matches either http:// or https:// followed by anything, within <>
  var match;

  for (var s = 0; s < span_array.length; s++) {
    if (span_array[s].tag == null) {
      var content = span_array[s].content;
      if ((match = patt.exec(content)) != null) {

        var raw1 = {content:content.slice(0,match.index)};
        var raw2 = {content:content.slice(match.index + match[0].length,content.length)};

        var a = {tag:'a', content:'<a href="' + match[1] + '">' + match[1] + '</a>'};
        span_array.splice(s, 1, raw1, a, raw2);
        s++;
      }
    }
  }
}

function check_links_ref(span_array) {
  var patt = /(!?)\[(.+?)\](?:\[(.+?)?\])?/g;
  var match;

  for (var s = 0; s < span_array.length; s++) {
    if (span_array[s].tag == null) {
      var content = span_array[s].content;
      while ((match = patt.exec(content)) != null) {
        var alt = match[2];
        var ref = match[3];
        if (ref == null) { ref = alt; };

        var src = null;
        var title = null;
        for (var i = 0; i < link_refs.length; i++) {
          if (link_refs[i][0] == ref) {
            src = link_refs[i][1];
            title = link_refs[i][2];
            break;
          }
        }
        if (src == null) { continue; }

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
          break;
        }
      }
    }
  }
}

function check_emphasis(span_array, token) {
  //Token must be global regex
  var matches = [];

  for (var s = 0; s < span_array.length; s++) {
    if (span_array[s].tag == null) {
      var content = span_array[s].content;
      var match;
      while ((match = token.exec(content)) != null) {
        matches.push({span:s, index:match.index, content:match[0]});
      }
    }
  }
  var m1, m2;
  for (m1 = 0; m1 < matches.length; ) {
    var closed = false;
    for (m2 = m1+1; m2 < matches.length; m2++) {
      if (matches[m2].content == matches[m1].content) {
        closed = true;
        break;
      }
    }
    if (closed) {
      var tag = (matches[m1].content.length > 1) ? 'strong' : 'em';
      matches[m1].html_tag = '<' + tag + '>';
      matches[m2].html_tag = '</' + tag + '>';
      matches.splice(m1+1, m2-m1-1); //Same emphasis types cannot be nested; remove inner matches
      m1 += 2;
    } else {
      matches.splice(m1, 1); //Remove match m1 if it doesn't close
    }
  }
  for (var i = matches.length-1; i >= 0; i--) {
    var content = span_array[matches[i].span].content;
    var span1 = {content:content.slice(0, matches[i].index)};
    var html = {tag:'emphasis', content:matches[i].html_tag};
    var span2 = {content:content.slice(matches[i].index + matches[i].content.length, content.length)};
    span_array.splice(matches[i].span, 1, span1, html, span2);
  }
}

function check_codespan(span_array) {
  var patt = /`+/g;
  var matches = [];

  for (var s = 0; s < span_array.length; s++) {
    if (span_array[s].tag == null) {
      var content = span_array[s].content;
      var match;
      while ((match = patt.exec(content)) != null) {
        matches.push({span:s, index:match.index, content:match[0]});
      }
    }
  }
  var m1, m2;
  for (m1 = 0; m1 < matches.length; ) {
    var closed = false;
    for (m2 = m1+1; m2 < matches.length; m2++) {
      if (matches[m2].content == matches[m1].content) {
        closed = true;
        break;
      }
    }
    if (closed) {
      matches.splice(m1+1, m2-m1-1); //Different-length backticks allowed in code
      m1 += 2;
    } else {
      matches.splice(m1, 1); //Remove match m1 if it doesn't close
    }
  }
  for (var i = matches.length-2; i >= 0; i-=2) { //Invariant: All code bookends are evenly paired and adjacent
    var content = span_array[matches[i].span].content;
    var span1 = {content:span_array[matches[i].span].content.slice(0, matches[i].index)};
    var html = {tag:'emphasis', content:'<code>'};
    if (matches[i].span == matches[i+1].span) {
      html.content += span_array[matches[i].span].content.slice(matches[i].index + matches[i].content.length, matches[i+1].index);
    } else {
      html.content += span_array[matches[i].span].content.slice(matches[i].index + matches[i].content.length, span_array[matches[i].span].content.length);
      for (var j = matches[i].span + 1; j < matches[i+1].span; j++) { html.content += span_array[j].content; }
      html.content += span_array[matches[i+1].span].content.slice(0, matches[i+1].index);
    }
    html.content += '</code>';
    var span2 = {content:span_array[matches[i+1].span].content.slice(matches[i+1].index + matches[i+1].content.length, span_array[matches[i+1].span].content.length)};
    span_array.splice(matches[i].span, matches[i+1].span-matches[i].span + 1, span1, html, span2);
  }
}
function check_break(span_array) {
  var patt = /(?:[ ]{2,}|\t+)\n/;
  var match;

  for (var s = 0; s < span_array.length; s++) {
    if (span_array[s].tag == null) {
      var content = span_array[s].content;
      if ((match = patt.exec(content)) != null) {

        var raw1 = {content:content.slice(0,match.index)};
        var raw2 = {content:content.slice(match.index + match[0].length,content.length)};

        var br = {tag:'br', content:'<br />'};
        span_array.splice(s, 1, raw1, br, raw2);
        s++;
      }
    }
  }
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



function get_flashcard(blocks) {
  var patt = /^\{(.+)\}$/
  var match;
  var flashcards = [];

  for (var b = 0; b < blocks.length; b++) {
    if (blocks[b].tag == null) {
      var content = blocks[b].content;
      for (var l = 0; l < content.length - 2; l++) {
        match = [];
        for (var m = 0; m < 3; m++) { match.push(patt.exec(content[l+m])); }
        if (match[0] != null && match[1] != null && match[2] != null) {
          var raw1 = {content:content.slice(0,l)};
          flashcards.push(makeFlashcard(match[0][1], match[2][1].split('|'), match[1][1].split('|')) );
          var raw2 = {content:content.slice(l+3,content.length)};

          blocks.splice(b, 1, raw1, flashcard, raw2);
          b++;
          break;
        }
      }
    }
  }

  return
  s;
}

function extractFlashcardsInFolders(folders) {
    var flashcardFolders = [];
    for(var i = 0; i < folders.length; i++) {
        var folder = folders[i];
        console.log("PAGES " + JSON.stringify(folder.pages, null, 2));
        var currFolderFlashcards = extractFlashcards(folder.pages);
        if (currFolderFlashcards.length > 0) {
            flashcardFolders.push({
                index: i,
                name: folder.name,
                flashcards: currFolderFlashcards
            });
        }
    }
    return { folders: flashcardFolders };
}

function extractFlashcards(pages) {
  var flashcards = [];
  for (var i = 0; i < pages.length; i++) {
    var content = pages[i].content;
    var block_array = [{content:content.split('\n')}];
    flashcards.push(get_flashcard(block_array));
    console.log(`flashcards: ${flashcards}`);
  }
  return flashcards;
}

module.exports = {
    parse: parse,
    extractFlashcardsInFolders: extractFlashcardsInFolders,
    extractFlashcards: extractFlashcards
}

console.log("Shared module loaded");
