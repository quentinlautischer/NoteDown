// used in components/NotesView.js to style the output HTML

module.exports.HIGHLIGHT_STYLES =
`
    .hljs {
        /* overflow: auto; */
        padding: 0;
        color: #abb2bf
        /* background-color: #282c34 */
    }
    .hljs-comment {
        color: #5c6370;
        fontStyle: italic
    }
    .hljs-quote {
        color: #5c6370;
        fontStyle: italic
    }
    .hljs-doctag {
        color: #c678dd
    }
    .hljs-keyword {
        color: #c678dd
    }
    .hljs-formula {
        color: #c678dd
    }
    .hljs-section {
        color: #e06c75
    }
    .hljs-name {
        color: #e06c75
    }
    .hljs-selector-tag {
        color: #e06c75
    }
    .hljs-deletion {
        color: #e06c75
    }
    .hljs-subst {
        color: #e06c75
    }
    .hljs-literal {
        color: #56b6c2
    }
    .hljs-string {
        color: #98c379
    }
    .hljs-regexp {
        color: #98c379
    }
    .hljs-addition {
        color: #98c379
    }
    .hljs-attribute {
        color: #98c379
    }
    .hljs-meta-string {
        color: #98c379
    }
    .hljs-built_in {
        color: #e6c07b
    }
    .hljs-class {
        /* hljs-title {
             color: #e6c07b
         } */
    }
    .hljs-attr {
        color: #d19a66
    }
    .hljs-variable {
        color: #d19a66
    }
    .hljs-template-variable {
        color: #d19a66
    }
    .hljs-type {
        color: #d19a66
    }
    .hljs-selector-class {
        color: #d19a66
    }
    .hljs-selector-attr {
        color: #d19a66
    }
    .hljs-selector-pseudo {
        color: #d19a66
    }
    .hljs-number {
        color: #d19a66
    }
    .hljs-symbol {
        color: #61aeee
    }
    .hljs-bullet {
        color: #61aeee
    }
    .hljs-link {
        color: #61aeee;
        textDecorationLine: underline
    }
    .hljs-meta {
        color: #61aeee
    }
    .hljs-selector-id {
        color: #61aeee
    }
    .hljs-title {
        color: #61aeee
    }
    .hljs-emphasis {
        fontStyle: italic
    }
    .hljs-strong {
        fontWeight: bold
    }
`;

module.exports.LINK_STYLES =
`
    #toc a {
        text-decoration: none;
    }

    #toc a:link {
        color: #fed75e;
    }

    #toc a:visited {
        color: #fed75e;
    }

    #toc a:hover {
        color: #feb255;
    }

    #toc a:active {
        color: #feb255;
    }
`;

module.exports.TOC_GEN = `
<script>
    var tags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (var i = 0; i < tags.length; i++) {
        var h = tags[i];
        var headerId = 'header' + i;
        h.id = headerId;
        var p = document.createElement('p');

        var a = document.createElement('a');
        a.setAttribute('href', '#' + headerId);
        a.innerHTML = h.innerHTML;

        p.style.textIndent = getSpaces(h) + 'em';
        p.appendChild(a);

        var toc = document.getElementById('toc');
        toc.appendChild(p);
    }

    // returns 0-5 depending on header type
    function getSpaces(h) {
        return parseInt(h.tagName[1]) - 1;
    }
</script>
`;
