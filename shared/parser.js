function parse(str) {
  var rendered = '';
  for (var i = 0, len = str.length; i < len; i++) {
    rendered += str[i];
  }
  return rendered;
}

module.exports.parse = parse;
console.log("Shared module loaded");