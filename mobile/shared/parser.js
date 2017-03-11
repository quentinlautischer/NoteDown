function parse(str) {
  var rendered = str;
  
  rendered = p_header_setext(rendered);
  rendered = p_header_atx(rendered);
  rendered = p_links(rendered);
  
  return rendered;
}

function p_header_setext(fullText) {
  //A line followed by a line of '=' or '-' characters, for h1 or h2
  var match;
  var tempText = "";
  var r_setext = /^(.*?)\n(-|=)+$/gm;
  var magnitude;
  var bound1, bound2;
  
  bound1 = 0;
  while ((match = r_setext.exec(fullText)) != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2-bound1);
    magnitude = (match[2].charAt(0) == '=' ? '1' : '2');
    tempText += "<h" + magnitude + '>' + match[1] + "</h" + magnitude + '>';
    bound1 = r_setext.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2-bound1);
  return tempText;
}

function p_header_atx(fullText) {
  //A line preceded by 1-6 '#' characters, for h1-h6
  var match;
  var tempText = "";
  var r_atx = /^(#{1,6})\s*(.+?)\s*#*$/gm;
  var magnitude;
  var bound1, bound2;
  
  bound1 = 0;
  while ((match = r_atx.exec(fullText)) != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2-bound1);
    magnitude = match[1].length;
    tempText += "<h" + magnitude + " id=\""+ match[2] + "\">" + match[2] + "</h" + magnitude + '>';
    bound1 = r_atx.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2-bound1);
  
  return tempText;
}

function p_links(fullText) {
  var match;
  var tempText = "";
  var r_refs = /^\s{0,3}\[(.+?)\]:\s*(.*?)\s*$/gm;
  var r_links = /!?\[(.*?)\](\(.*?\)|\[.*?\])/gm;
  var isImage, address;
  var refs = [];
  var bound1, bound2;
  
  bound1 = 0;
  while ((match = r_refs.exec(fullText)) != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2-bound1);
    refs.push([match[1], match[2]]);
    bound1 = r_refs.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2-bound1);
  fullText = tempText;
  tempText = "";
  
  bound1 = 0;
  while ((match = r_links.exec(fullText)) != null) {
    bound2 = match.index;
    tempText += fullText.substr(bound1,bound2-bound1);
    
    isImage = (match[0].charAt(0) == '!');
    if (match[2].charAt(0) == '[') {
      var key = match[2].substr(1,match[2].length-2);
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
        bound1 = r_links.lastIndex;
        tempText += fullText.substr(bound2,bound1-bound2);
        continue;
      }
    } else {
      address = match[2].substr(1,match[2].length-2);
    }
    tempText += '<' + (isImage ? "img src" : "a href") + "=\"" + address + "\">" + match[1] + "</" + (isImage ? "img" : "a") + '>';
    bound1 = r_links.lastIndex;
  }
  bound2 = fullText.length;
  tempText += fullText.substr(bound1,bound2-bound1);
  fullText = tempText;
  
  return fullText;
}

module.exports.parse = parse;
console.log("Shared module loaded");