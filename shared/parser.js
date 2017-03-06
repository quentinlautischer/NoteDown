function parse(str) {
  var rendered = str;
  
  rendered = p_header(rendered);
  rendered = p_links(rendered);
  
  return str;
}

function p_header(fullText) {
  var resultText = fullText;
  var tempText;
  var r_setext = /^(.*?)\n(-|=)+$/gm;
  var r_atx = /^(#{1,6})\s*(.+?)\s*#*$/gm;
  var magnitude;
  var bound1, bound2;
  
  var match = r_setext.exec(resultText);
  bound1 = 0;
  while (match != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2);
    magnitude = (match[2].charAt(0) == '=' ? '1' : '2');
    tempText += "<h" + magnitude + '>' + match[1] + "</h" + magnitude + '>';
    bound1 = r_setext.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2);
  resultText = tempText;
  
  var match = r_setext.exec(resultText);
  bound1 = 0;
  while (match != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2);
    magnitude = match[1].length;
    tempText += "<h" + magnitude + '>' + match[2] + "</h" + magnitude + '>';
    bound1 = r_setext.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2);
  resultText = tempText;
  
  return resultText;
}

function p_links(fullText) {
  var resultText = fullText;
  var tempText;
  var r_refs = /^\s{0,3}\[(.+?)\]:\s*(.*?)\s*$/gm;
  var r_links = /!?\[(.*?)\]((\(|\[).*?(\)|\]))/gm;
  var isImage, address;
  var refs = [];
  var bound1, bound2;
  
  var match = r_refs.exec(resultText);
  bound1 = 0;
  while (match != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2);
    refs.push([match[1], match[2]]);
    bound1 = r_setext.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2);
  resultText = tempText;
  
  var match = r_links.exec(resultText);
  bound1 = 0;
  while (match != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2);
    
    isImage = (match[0].charAt(0) == '!');
    if (match[2].charAt(0) == '[') {
      var key = match[2].substr(2,match[2].length);
      if (key.length == 0) { key = match[1]; }
      var key_index = -1;
      for (var i = 0; i < refs.length; i++) {
        if (refs[i][0] == key) {
          key_index = i;
          break;
        }
      }
      if (key_index >= 0) { address = refs[key_index][1]; }
      else { //No link, just print
        bound1 = r_setext.lastIndex;
        tempText += fullText.substr(bound2,bound1);
        continue;
      }
    } else {
      address = match[2].substr(2,match[2].length);
    }
    tempText += '<' + (isImage ? "img src" : "a href") + "=\"" + address + "\">" + match[1] + "</" + (isImage ? "img" : "a") + '>';
    bound1 = r_setext.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2);
  resultText = tempText;
  
  return resultText;
}

module.exports.parse = parse;
console.log("Shared module loaded");