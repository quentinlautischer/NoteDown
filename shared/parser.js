function parse(str) {
  //The main parsing function. Calls all other functions.
  
  //Make all newlines consistent, then split string into lines
  str = str.replace (/\r\n/g, '\n');
  str = str.replace (/\r/g, '\n');
  var line_array = str.split('\n');
  
  //Block-level elements
  var block_array = [];
  
  for (var i = 0; i < line_array.length; i++) {
    check_blocks(line_array[i], block_array);
  }
  
  return render_block(block_array);
}

function render_block(blocks) {
  var result = '';
  for (var i = 0; i < blocks.length; i++) {
    if (i > 0) { result += '\n\n'; }
    var block = blocks[i];
    for (var t = 0; t < block.tags.length; t++) {
      result += '<' + block.tags[t] + '>';
    }
    for (var t = 0; t < block.content.length; t++) {
      if (t > 0) { result += '\n'; }
      result += block.content[t];
    }
    for (var t = block.tags.length-1; t >= 0; t--) {
      result += '</' + block.tags[t] + '>';
    }
  }
  return result;
}

function check_blocks(line, blocks){
  //Once it finds a match, it moves on
  
  if (check_header_setext(line, blocks)) { return; }
  if (check_header_atx(line, blocks)) { return; }
  if (check_paragraph(line, blocks)) { return; }
}

function check_header_setext(line, blocks) {
  //Updates block array. Returns whether match was successful
  
  var patt = /^(=+|-+)\s*$/;
  var lastBlock = blocks[blocks.length-1];
  if (lastBlock != null && (match = patt.exec(line)) != null) {
    lastBlock.content.pop(); //The last block would have incorrectly registered this header's content as one of its lines.
    var content = lastBlock.rawLines[lastBlock.rawLines.length-1];
    
    lastBlock.open = false;
    if (lastBlock.content.length == 0) { blocks.pop(); } //No sense keeping the last block if it doesn't represent anything
    
    var mag = (match[1].charAt(0) == '=') ? 1 : 2;
    blocks.push({type:'header_setext', tags:['h'+mag], open:false, content:[content], rawLine:[line]});
    return true;
  }
  return false;
}

function check_header_atx(line, blocks) {
  //Updates block array. Returns whether match was successful
  
  var lastBlock = blocks[blocks.length-1];
  if (lastBlock != null && lastBlock.type == 'header_atx') { lastBlock.open = false; }
  
  var patt = /^(#{1,6})\s*(.+?)\s*#*$/;
  var match;
  if ((match = patt.exec(line)) != null) {
    if (lastBlock != null) { lastBlock.open = false; }
    blocks.push({type: 'header_atx', tags:['h'+match[1].length], open:true, content:[match[2]], rawLines:[line]});
    return true;
  }
  return false;
}

function check_paragraph(line, blocks) {
  //Updates block array. Returns whether match was successful
  
  var lastBlock = blocks[blocks.length-1];
  //Empty line after a paragraph means that paragraph is done
  if (line.trim().length == 0 && lastBlock != null && lastBlock.type == 'paragraph') {
    lastBlock.open = false;
    return true;
  }
  
  var patt = /^\s*(.+)$/;
  if ((match = patt.exec(line)) != null) {
    if (lastBlock != null && lastBlock.type == 'paragraph' && lastBlock.open) {
      lastBlock.content.push(line);
      lastBlock.rawLines.push(line);
    } else {
      blocks.push({type: 'paragraph', tags:['p'], open:true, content:[match[1]], rawLines:[line]});
    }
    return true;
  }
  return false;
}

module.exports.parse = parse;
console.log("Shared module loaded");