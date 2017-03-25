console.log(reverseParse(`
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <h5>This is heading 5</h5>
    <h6>This is heading 6</h6>
    <h1>This is another <b>BOLD</b> heading 1</h1>
    <p>This is some text.</p>
    <h2>This is another heading 2</h2>
    <p>This is some other text.</p>
    <p><strong>strong</strong> text is kind of like <b>bold</b> text, and <em>emphasized</em> text is kind of like <i>italic</i> text</p>
    <p>What happens if I nest bold in italic? <i>italic<b>both</b>italic</i></p>
    <p>What happens if I nest italic in bold? <b>bold<i>both</i>bold</b></p>
`));


function reverseParse(str) {
    str = parseHeaders(str);
    str = parseParagraphs(str);
    str = parseBold(str);
    str = parseItalic(str);
    return str;
}

function replaceAll(str, pattern, mdStart, mdEnd='') {
    var match = pattern.exec(str);
    while (match != null) {
        var whole = match[1];
        var inner = match[2];
        str = str.replace(whole, mdStart + inner + mdEnd);
        match = pattern.exec(str);
    }
    return str;
}

function parseHeaders(str) {
    for (var i = 1; i <=6; i++) {
        var pattern = new RegExp('(<h' + i + '>(.*?)</h' + i + '>)');
        str = replaceAll(str, pattern, '#'.repeat(i) + ' ');
    }
    return str;
}

function parseParagraphs(str) {
    return replaceAll(str, /(<p>(.*?)<\/p>)/, '', '\n');
}

function parseBold(str) {
    str = replaceAll(str, /(<b>(.*?)<\/b>)/, '**', '**');
    return replaceAll(str, /(<strong>(.*?)<\/strong>)/, '**', '**');
}

function parseItalic(str) {
    str = replaceAll(str, /(<i>(.*?)<\/i>)/, '*', '*');
    return replaceAll(str, /(<em>(.*?)<\/em>)/, '*', '*');
}
