console.log(
    reverseParse(`
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <p>here's a link: <a href="http://myurl.com">mylink</a></p>
    <h5>This is heading 5</h5>
    <p>An image <img src="imgurl" alt="myimg"> <- right there</p>
    <h6>This is heading 6</h6>
    <h1>This is another <b>BOLD</b> heading 1</h1>
    <p>This is some text.</p>
    <h2>This is another heading 2</h2>
    <hr>
    <p>This is some other text.</p>
    <p><strong>strong</strong> text is kind of like <b>bold</b> text, and <em>emphasized</em> text is kind of like <i>italic</i> text</p>
    <p>What happens if I nest bold in italic? <i>italic<b>both</b>italic</i></p>
    <p>What happens if I nest italic in bold? <b>bold<i>both</i>bold</b></p>

    <blockquote>This is a blockquote</blockquote>

    <pre><code>def foo(): return 1</code></pre>

    <pre><code class="python">def foo(): return 1</code></pre>

    <p> Here is a snippet of code: <code>var i = 0</code></p>

    <p>
        <ol>
            <li>2</li>
            <li>2</li>
            <ul>
                <li>2i</li>
                <ul>
                    <li>2ii</li>
                    <li>2ii</li>
                    <li>2ii</li>
                </ul>
                <li>2i</li>
                <li>2i</li>
            </ul>
            <li>2</li>
        </ol>
    </p>
    <p>
        <ul>
            <li>3</li>
            <li>3</li>
            <li>3</li>
        </ul>
    </p>
    <p>
        <ul>
            <li>4</li>
            <li>4</li>
            <ul>
                <li>4i</li>
                <li>4i</li>
                <li>4i</li>
            </ul>
            <li>4</li>
        </ul>
    </p>
`)
);


// CAN RUN THIS AS
//  $ node reverse-parser.js
// from command line to see how it works

// entry point
function reverseParse(str) {
    str = parseBlockElements(str);
    str = parseSpanElements(str);
    return str;
}

function parseBlockElements(str) {
    str = parseHeaders(str);
    str = parseParagraphs(str);
    str = parseLists(str);
    str = parseBlockquotes(str);
    str = parseCode(str);
    return str;
}

function parseSpanElements(str) {
    str = parseBold(str);
    str = parseItalic(str);
    str = parseLinks(str);
    str = parseImgs(str);
    str = parseHorizontalRule(str);
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
        var pattern = new RegExp('( *<h' + i + '>(.*?)</h' + i + '>)');
        str = replaceAll(str, pattern, '#'.repeat(i) + ' ');
    }
    return str;
}

function parseParagraphs(str) {
    return replaceAll(str, /( *<p>([\s\S]*?)<\/p>)/m, '', '\n');
}

function parseBold(str) {
    str = replaceAll(str, /(<b>(.*?)<\/b>)/, '**', '**');
    return replaceAll(str, /(<strong>(.*?)<\/strong>)/, '**', '**');
}

function parseItalic(str) {
    str = replaceAll(str, /(<i>(.*?)<\/i>)/, '*', '*');
    return replaceAll(str, /(<em>(.*?)<\/em>)/, '*', '*');
}

function parseBlockquotes(str) {
    var pattern = new RegExp('( *<blockquote>(.*?)</blockquote>)');
    str = replaceAll(str, pattern, '> ');
    return str;
}

function parseCode(str) {
    var pattern = new RegExp('( *<pre><code>(.*?)</code></pre>)');
    str = replaceAll(str, pattern, '```\n', '\n```');
    pattern = new RegExp('(<code>(.*?)</code>)');
    str = replaceAll(str, pattern, '`', '`');
    return str;
}

function parseHorizontalRule(str) {
    var pattern = /(\s*<hr>)/;
    var match = pattern.exec(str);
    while (match != null) {
        str = str.replace(match[1], '\n***\n');
        match = pattern.exec(str);
    }
    return str;
}

function parseLists(str) {
        var pattern = /\s*<[ou]l>([^ou]*)<\/[ou]l>/m;
        var match = pattern.exec(str);
        var maxLevel = 0;

        var level;
        while (match != null) {
            var listElements = match[1];
            if (!listElements.includes('<0>')) {
                level = 0;
            } else {
                level += 1;
                maxLevel = Math.max(level, maxLevel);
            }
            var replacer = match[0].includes('<ul>') ? '* ' : '1. ';
            listElements = parseListsReplaceAll(listElements, /( *<li>(.*?)<\/li>)/, replacer, level);
            str = str.replace(match[0], listElements);
            match = pattern.exec(str);

        }

        for (var i = 0; i <= maxLevel; i++) {
            str = parseListsReplaceSpaces(str, maxLevel, i);
        }

        return str;
}

function parseListsReplaceAll(str, pattern, mdStart, level) {
    var match = pattern.exec(str);
    while (match != null) {
        var whole = match[1];
        var inner = match[2];
        str = str.replace(whole, '<' + level + '>' + mdStart + inner);
        match = pattern.exec(str);
    }
    return str;
}

function parseListsReplaceSpaces(str, max, num) {
    var pattern = new RegExp('<(' + num + ')>');
    var match = pattern.exec(str);
    while (match != null) {
        var whole = match[0];
        var inner = match[1];
        str = str.replace(whole, '\t'.repeat(max - num));
        match = pattern.exec(str);
    }
    return str;
}

function parseLinks(str) {
    pattern = /(<a href="(\S*?)">(.*?)<\/a>)/;
    return parseLinkOrImgContent(str);
}

function parseImgs(str) {
    pattern = /(<img src="(\S*?)" alt="(.*?)">)/;
    return parseLinkOrImgContent(str,'!');
}

function parseLinkOrImgContent(str, startModifier='') {
    var match = pattern.exec(str);
    while (match != null) {
        var whole = match[1];
        var url = match[2];
        var label = match[3];

        str = str.replace(whole, startModifier + '[' + label + '](' + url + ')');
        match = pattern.exec(str);
    }
    return str;
}

module.exports.parseHTML = reverseParse;
