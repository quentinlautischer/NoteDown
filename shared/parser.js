function parse(str) {
  //The main parsing function. Calls all other functions.
  
  //Make all newlines consistent, then split string into lines
  str = str.replace (/\r\n/g, '\n');
  str = str.replace (/\r/g, '\n');
  
  //Block-level elements
  var block_array = [{type:'raw', tag:'', content:str.split('\n')}];
  
  check_blocks(block_array);
  remove_raw(block_array);
  return render_block(block_array);
}

function check_blocks(blocks) {
  check_block_html(blocks);
  check_header_setext(blocks);
  check_header_atx(blocks);
  check_blockquote(blocks);
  check_hrule(blocks);
  check_flashcard(blocks);
  check_table(blocks);
  check_paragraph(blocks);
  check_list_ordered(blocks);
  check_list_unordered(blocks);
  check_block_code(blocks);
}

function remove_raw(blocks) { //Get rid of the remaining raw text (mostly whitespace)
  var b = 0;
  while (true) {
    if (blocks[b].type == 'raw') { blocks.splice(b,1); }
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
      //TODO
    }
    if (block.content == null) { result += '<' + block.tag + attrs + ' />' }
    else {
      result += '<' + block.tag +  attrs + '>';
      result += block.content;
      result += '</' + block.tag + '>';
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
    if (blocks[b].type == 'raw') {
      var content = blocks[b].content;
      for (var l = 1; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          var mag = (match[1].charAt(0) == '=') ? 1 : 2;
          
          var raw1 = {type:'raw', tag:'', content:content.slice(0,l-1)};
          var header_setext = {type:'header_setext', tag:'h'+mag, content:content[l-1]};
          var raw2 = {type:'raw', tag:'', content:content.slice(l+1,content.length)};
          
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
    if (blocks[b].type == 'raw') {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt.exec(content[l])) != null) {
          
          var raw1 = {type:'raw', tag:'', content:content.slice(0,l)};
          var header_atx = {type:'header_setext', tag:'h'+match[1].length, content:match[2]};
          var raw2 = {type:'raw', tag:'', content:content.slice(l+1,content.length)};
          
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
    if (blocks[b].type == 'raw') {
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
          inner_content = parse(inner_content);
          
          var raw1 = {type:'raw', tag:'', content:content.slice(0,l)};
          var blockquote = {type:'blockquote', tag:'blockquote', content:inner_content};
          var raw2 = {type:'raw', tag:'', content:content.slice(end,content.length)};
          
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
    if (blocks[b].type == 'raw') {
      var content = blocks[b].content;
      for (var l = 0; l < content.length; l++) {
        if ((match = patt1.exec(content[l])) != null || (match = patt2.exec(content[l])) != null) {
          
          var raw1 = {type:'raw', tag:'', content:content.slice(0,l)};
          var header_atx = {type:'hrule', tag:'hr'};
          var raw2 = {type:'raw', tag:'', content:content.slice(l+1,content.length)};
          
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
    if (blocks[b].type == 'raw') {
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
          
          var raw1 = {type:'raw', tag:'', content:content.slice(0,l)};
          var paragraph = {type:'paragraph', tag:'p', content:inner_content};
          var raw2 = {type:'raw', tag:'', content:content.slice(end,content.length)};
          
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

module.exports.parse = parse;
console.log("Shared module loaded");