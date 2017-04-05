// used in components/NotesView.js to style the output HTML
module.exports.FLASHCARD_STYLES =
`
.flip-container {
  margin: 15vh auto;
  -webkit-perspective: 1000;
  }

/* flip the pane  */
.flip-container:hover .flipper, .flip-container:hover .flipper {
  -webkit-transform: rotateY(180deg);
}

.flip-container:focus .flipper, .flip-container:focus .flipper {
  -webkit-transform: rotateY(180deg);
}

.flip-container:active .flipper, .flip-container:active .flipper {
  -webkit-transform: rotateY(180deg);
}

.flip-container, .front, .back {
  width: 80vw;
  height: 45vw;
  border-radius: 24px;
  box-sizing: border-box;
  }

.front, .back {
  text-align: center;
  font-size: 1.5em;
  line-height: 1em;
  padding-top: 20%; // calc(50% - 1em);
  vertical-align: middle;
  color: map-get($colors, dark);
  border: 1px solid map-get($colors, light);
  overflow: hidden;
  }

/* flip speed goes here */
.flipper {
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    position: relative;
}

/* hide back of pane during swap */
.front, .back {
    -webkit-backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateY(0deg);
    position: absolute;
    top: 0;
    left: 0;
}
.front span,
.back span{

}

/* front pane, placed above back */
.front {
  z-index: 2;
  background-color: rgba(139, 191, 159, 1);
}

/* back, initially hidden pane */
.back {
  -webkit-transform: rotateY(-180deg);
  background-color: rgba(48, 62, 77, 1);
}

.flashcard-content {
  display: inline-block;
  vertical-align: middle;
}
`;

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

module.exports.MATH_STYLES = `
.katex-display {
  display: block;
  margin: 1em 0;
  text-align: center;
}
.katex-display > .katex {
  display: inline-block;
  text-align: initial;
}
.katex {
  font: normal 1.21em KaTeX_Main, Times New Roman, serif;
  line-height: 1.2;
  white-space: nowrap;
  text-indent: 0;
}
.katex .katex-html {
  display: inline-block;
}
.katex .katex-mathml {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.katex .base {
  display: inline-block;
}
.katex .strut {
  display: inline-block;
}
.katex .mathrm {
  font-style: normal;
}
.katex .textit {
  font-style: italic;
}
.katex .mathit {
  font-family: KaTeX_Math;
  font-style: italic;
}
.katex .mathbf {
  font-family: KaTeX_Main;
  font-weight: bold;
}
.katex .amsrm {
  font-family: KaTeX_AMS;
}
.katex .mathbb {
  font-family: KaTeX_AMS;
}
.katex .mathcal {
  font-family: KaTeX_Caligraphic;
}
.katex .mathfrak {
  font-family: KaTeX_Fraktur;
}
.katex .mathtt {
  font-family: KaTeX_Typewriter;
}
.katex .mathscr {
  font-family: KaTeX_Script;
}
.katex .mathsf {
  font-family: KaTeX_SansSerif;
}
.katex .mainit {
  font-family: KaTeX_Main;
  font-style: italic;
}
.katex .mord + .mop {
  margin-left: 0.16667em;
}
.katex .mord + .mbin {
  margin-left: 0.22222em;
}
.katex .mord + .mrel {
  margin-left: 0.27778em;
}
.katex .mord + .minner {
  margin-left: 0.16667em;
}
.katex .mop + .mord {
  margin-left: 0.16667em;
}
.katex .mop + .mop {
  margin-left: 0.16667em;
}
.katex .mop + .mrel {
  margin-left: 0.27778em;
}
.katex .mop + .minner {
  margin-left: 0.16667em;
}
.katex .mbin + .mord {
  margin-left: 0.22222em;
}
.katex .mbin + .mop {
  margin-left: 0.22222em;
}
.katex .mbin + .mopen {
  margin-left: 0.22222em;
}
.katex .mbin + .minner {
  margin-left: 0.22222em;
}
.katex .mrel + .mord {
  margin-left: 0.27778em;
}
.katex .mrel + .mop {
  margin-left: 0.27778em;
}
.katex .mrel + .mopen {
  margin-left: 0.27778em;
}
.katex .mrel + .minner {
  margin-left: 0.27778em;
}
.katex .mclose + .mop {
  margin-left: 0.16667em;
}
.katex .mclose + .mbin {
  margin-left: 0.22222em;
}
.katex .mclose + .mrel {
  margin-left: 0.27778em;
}
.katex .mclose + .minner {
  margin-left: 0.16667em;
}
.katex .mpunct + .mord {
  margin-left: 0.16667em;
}
.katex .mpunct + .mop {
  margin-left: 0.16667em;
}
.katex .mpunct + .mrel {
  margin-left: 0.16667em;
}
.katex .mpunct + .mopen {
  margin-left: 0.16667em;
}
.katex .mpunct + .mclose {
  margin-left: 0.16667em;
}
.katex .mpunct + .mpunct {
  margin-left: 0.16667em;
}
.katex .mpunct + .minner {
  margin-left: 0.16667em;
}
.katex .minner + .mord {
  margin-left: 0.16667em;
}
.katex .minner + .mop {
  margin-left: 0.16667em;
}
.katex .minner + .mbin {
  margin-left: 0.22222em;
}
.katex .minner + .mrel {
  margin-left: 0.27778em;
}
.katex .minner + .mopen {
  margin-left: 0.16667em;
}
.katex .minner + .mpunct {
  margin-left: 0.16667em;
}
.katex .minner + .minner {
  margin-left: 0.16667em;
}
.katex .mord.mtight {
  margin-left: 0;
}
.katex .mop.mtight {
  margin-left: 0;
}
.katex .mbin.mtight {
  margin-left: 0;
}
.katex .mrel.mtight {
  margin-left: 0;
}
.katex .mopen.mtight {
  margin-left: 0;
}
.katex .mclose.mtight {
  margin-left: 0;
}
.katex .mpunct.mtight {
  margin-left: 0;
}
.katex .minner.mtight {
  margin-left: 0;
}
.katex .mord + .mop.mtight {
  margin-left: 0.16667em;
}
.katex .mop + .mord.mtight {
  margin-left: 0.16667em;
}
.katex .mop + .mop.mtight {
  margin-left: 0.16667em;
}
.katex .mclose + .mop.mtight {
  margin-left: 0.16667em;
}
.katex .minner + .mop.mtight {
  margin-left: 0.16667em;
}
.katex .reset-textstyle.textstyle {
  font-size: 1em;
}
.katex .reset-textstyle.scriptstyle {
  font-size: 0.7em;
}
.katex .reset-textstyle.scriptscriptstyle {
  font-size: 0.5em;
}
.katex .reset-scriptstyle.textstyle {
  font-size: 1.42857em;
}
.katex .reset-scriptstyle.scriptstyle {
  font-size: 1em;
}
.katex .reset-scriptstyle.scriptscriptstyle {
  font-size: 0.71429em;
}
.katex .reset-scriptscriptstyle.textstyle {
  font-size: 2em;
}
.katex .reset-scriptscriptstyle.scriptstyle {
  font-size: 1.4em;
}
.katex .reset-scriptscriptstyle.scriptscriptstyle {
  font-size: 1em;
}
.katex .style-wrap {
  position: relative;
}
.katex .vlist {
  display: inline-block;
}
.katex .vlist > span {
  display: block;
  height: 0;
  position: relative;
}
.katex .vlist > span > span {
  display: inline-block;
}
.katex .vlist .baseline-fix {
  display: inline-table;
  table-layout: fixed;
}
.katex .msupsub {
  text-align: left;
}
.katex .mfrac > span > span {
  text-align: center;
}
.katex .mfrac .frac-line {
  width: 100%;
}
.katex .mfrac .frac-line:before {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  content: "";
  display: block;
}
.katex .mfrac .frac-line:after {
  border-bottom-style: solid;
  border-bottom-width: 0.04em;
  content: "";
  display: block;
  margin-top: -1px;
}
.katex .mspace {
  display: inline-block;
}
.katex .mspace.negativethinspace {
  margin-left: -0.16667em;
}
.katex .mspace.thinspace {
  width: 0.16667em;
}
.katex .mspace.negativemediumspace {
  margin-left: -0.22222em;
}
.katex .mspace.mediumspace {
  width: 0.22222em;
}
.katex .mspace.thickspace {
  width: 0.27778em;
}
.katex .mspace.sixmuspace {
  width: 0.333333em;
}
.katex .mspace.eightmuspace {
  width: 0.444444em;
}
.katex .mspace.enspace {
  width: 0.5em;
}
.katex .mspace.twelvemuspace {
  width: 0.666667em;
}
.katex .mspace.quad {
  width: 1em;
}
.katex .mspace.qquad {
  width: 2em;
}
.katex .llap,
.katex .rlap {
  width: 0;
  position: relative;
}
.katex .llap > .inner,
.katex .rlap > .inner {
  position: absolute;
}
.katex .llap > .fix,
.katex .rlap > .fix {
  display: inline-block;
}
.katex .llap > .inner {
  right: 0;
}
.katex .rlap > .inner {
  left: 0;
}
.katex .katex-logo .a {
  font-size: 0.75em;
  margin-left: -0.32em;
  position: relative;
  top: -0.2em;
}
.katex .katex-logo .t {
  margin-left: -0.23em;
}
.katex .katex-logo .e {
  margin-left: -0.1667em;
  position: relative;
  top: 0.2155em;
}
.katex .katex-logo .x {
  margin-left: -0.125em;
}
.katex .rule {
  display: inline-block;
  border: solid 0;
  position: relative;
}
.katex .overline .overline-line,
.katex .underline .underline-line {
  width: 100%;
}
.katex .overline .overline-line:before,
.katex .underline .underline-line:before {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  content: "";
  display: block;
}
.katex .overline .overline-line:after,
.katex .underline .underline-line:after {
  border-bottom-style: solid;
  border-bottom-width: 0.04em;
  content: "";
  display: block;
  margin-top: -1px;
}
.katex .sqrt > .sqrt-sign {
  position: relative;
}
.katex .sqrt .sqrt-line {
  width: 100%;
}
.katex .sqrt .sqrt-line:before {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  content: "";
  display: block;
}
.katex .sqrt .sqrt-line:after {
  border-bottom-style: solid;
  border-bottom-width: 0.04em;
  content: "";
  display: block;
  margin-top: -1px;
}
.katex .sqrt > .root {
  margin-left: 0.27777778em;
  margin-right: -0.55555556em;
}
.katex .sizing,
.katex .fontsize-ensurer {
  display: inline-block;
}
.katex .sizing.reset-size1.size1,
.katex .fontsize-ensurer.reset-size1.size1 {
  font-size: 1em;
}
.katex .sizing.reset-size1.size2,
.katex .fontsize-ensurer.reset-size1.size2 {
  font-size: 1.4em;
}
.katex .sizing.reset-size1.size3,
.katex .fontsize-ensurer.reset-size1.size3 {
  font-size: 1.6em;
}
.katex .sizing.reset-size1.size4,
.katex .fontsize-ensurer.reset-size1.size4 {
  font-size: 1.8em;
}
.katex .sizing.reset-size1.size5,
.katex .fontsize-ensurer.reset-size1.size5 {
  font-size: 2em;
}
.katex .sizing.reset-size1.size6,
.katex .fontsize-ensurer.reset-size1.size6 {
  font-size: 2.4em;
}
.katex .sizing.reset-size1.size7,
.katex .fontsize-ensurer.reset-size1.size7 {
  font-size: 2.88em;
}
.katex .sizing.reset-size1.size8,
.katex .fontsize-ensurer.reset-size1.size8 {
  font-size: 3.46em;
}
.katex .sizing.reset-size1.size9,
.katex .fontsize-ensurer.reset-size1.size9 {
  font-size: 4.14em;
}
.katex .sizing.reset-size1.size10,
.katex .fontsize-ensurer.reset-size1.size10 {
  font-size: 4.98em;
}
.katex .sizing.reset-size2.size1,
.katex .fontsize-ensurer.reset-size2.size1 {
  font-size: 0.71428571em;
}
.katex .sizing.reset-size2.size2,
.katex .fontsize-ensurer.reset-size2.size2 {
  font-size: 1em;
}
.katex .sizing.reset-size2.size3,
.katex .fontsize-ensurer.reset-size2.size3 {
  font-size: 1.14285714em;
}
.katex .sizing.reset-size2.size4,
.katex .fontsize-ensurer.reset-size2.size4 {
  font-size: 1.28571429em;
}
.katex .sizing.reset-size2.size5,
.katex .fontsize-ensurer.reset-size2.size5 {
  font-size: 1.42857143em;
}
.katex .sizing.reset-size2.size6,
.katex .fontsize-ensurer.reset-size2.size6 {
  font-size: 1.71428571em;
}
.katex .sizing.reset-size2.size7,
.katex .fontsize-ensurer.reset-size2.size7 {
  font-size: 2.05714286em;
}
.katex .sizing.reset-size2.size8,
.katex .fontsize-ensurer.reset-size2.size8 {
  font-size: 2.47142857em;
}
.katex .sizing.reset-size2.size9,
.katex .fontsize-ensurer.reset-size2.size9 {
  font-size: 2.95714286em;
}
.katex .sizing.reset-size2.size10,
.katex .fontsize-ensurer.reset-size2.size10 {
  font-size: 3.55714286em;
}
.katex .sizing.reset-size3.size1,
.katex .fontsize-ensurer.reset-size3.size1 {
  font-size: 0.625em;
}
.katex .sizing.reset-size3.size2,
.katex .fontsize-ensurer.reset-size3.size2 {
  font-size: 0.875em;
}
.katex .sizing.reset-size3.size3,
.katex .fontsize-ensurer.reset-size3.size3 {
  font-size: 1em;
}
.katex .sizing.reset-size3.size4,
.katex .fontsize-ensurer.reset-size3.size4 {
  font-size: 1.125em;
}
.katex .sizing.reset-size3.size5,
.katex .fontsize-ensurer.reset-size3.size5 {
  font-size: 1.25em;
}
.katex .sizing.reset-size3.size6,
.katex .fontsize-ensurer.reset-size3.size6 {
  font-size: 1.5em;
}
.katex .sizing.reset-size3.size7,
.katex .fontsize-ensurer.reset-size3.size7 {
  font-size: 1.8em;
}
.katex .sizing.reset-size3.size8,
.katex .fontsize-ensurer.reset-size3.size8 {
  font-size: 2.1625em;
}
.katex .sizing.reset-size3.size9,
.katex .fontsize-ensurer.reset-size3.size9 {
  font-size: 2.5875em;
}
.katex .sizing.reset-size3.size10,
.katex .fontsize-ensurer.reset-size3.size10 {
  font-size: 3.1125em;
}
.katex .sizing.reset-size4.size1,
.katex .fontsize-ensurer.reset-size4.size1 {
  font-size: 0.55555556em;
}
.katex .sizing.reset-size4.size2,
.katex .fontsize-ensurer.reset-size4.size2 {
  font-size: 0.77777778em;
}
.katex .sizing.reset-size4.size3,
.katex .fontsize-ensurer.reset-size4.size3 {
  font-size: 0.88888889em;
}
.katex .sizing.reset-size4.size4,
.katex .fontsize-ensurer.reset-size4.size4 {
  font-size: 1em;
}
.katex .sizing.reset-size4.size5,
.katex .fontsize-ensurer.reset-size4.size5 {
  font-size: 1.11111111em;
}
.katex .sizing.reset-size4.size6,
.katex .fontsize-ensurer.reset-size4.size6 {
  font-size: 1.33333333em;
}
.katex .sizing.reset-size4.size7,
.katex .fontsize-ensurer.reset-size4.size7 {
  font-size: 1.6em;
}
.katex .sizing.reset-size4.size8,
.katex .fontsize-ensurer.reset-size4.size8 {
  font-size: 1.92222222em;
}
.katex .sizing.reset-size4.size9,
.katex .fontsize-ensurer.reset-size4.size9 {
  font-size: 2.3em;
}
.katex .sizing.reset-size4.size10,
.katex .fontsize-ensurer.reset-size4.size10 {
  font-size: 2.76666667em;
}
.katex .sizing.reset-size5.size1,
.katex .fontsize-ensurer.reset-size5.size1 {
  font-size: 0.5em;
}
.katex .sizing.reset-size5.size2,
.katex .fontsize-ensurer.reset-size5.size2 {
  font-size: 0.7em;
}
.katex .sizing.reset-size5.size3,
.katex .fontsize-ensurer.reset-size5.size3 {
  font-size: 0.8em;
}
.katex .sizing.reset-size5.size4,
.katex .fontsize-ensurer.reset-size5.size4 {
  font-size: 0.9em;
}
.katex .sizing.reset-size5.size5,
.katex .fontsize-ensurer.reset-size5.size5 {
  font-size: 1em;
}
.katex .sizing.reset-size5.size6,
.katex .fontsize-ensurer.reset-size5.size6 {
  font-size: 1.2em;
}
.katex .sizing.reset-size5.size7,
.katex .fontsize-ensurer.reset-size5.size7 {
  font-size: 1.44em;
}
.katex .sizing.reset-size5.size8,
.katex .fontsize-ensurer.reset-size5.size8 {
  font-size: 1.73em;
}
.katex .sizing.reset-size5.size9,
.katex .fontsize-ensurer.reset-size5.size9 {
  font-size: 2.07em;
}
.katex .sizing.reset-size5.size10,
.katex .fontsize-ensurer.reset-size5.size10 {
  font-size: 2.49em;
}
.katex .sizing.reset-size6.size1,
.katex .fontsize-ensurer.reset-size6.size1 {
  font-size: 0.41666667em;
}
.katex .sizing.reset-size6.size2,
.katex .fontsize-ensurer.reset-size6.size2 {
  font-size: 0.58333333em;
}
.katex .sizing.reset-size6.size3,
.katex .fontsize-ensurer.reset-size6.size3 {
  font-size: 0.66666667em;
}
.katex .sizing.reset-size6.size4,
.katex .fontsize-ensurer.reset-size6.size4 {
  font-size: 0.75em;
}
.katex .sizing.reset-size6.size5,
.katex .fontsize-ensurer.reset-size6.size5 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size6.size6,
.katex .fontsize-ensurer.reset-size6.size6 {
  font-size: 1em;
}
.katex .sizing.reset-size6.size7,
.katex .fontsize-ensurer.reset-size6.size7 {
  font-size: 1.2em;
}
.katex .sizing.reset-size6.size8,
.katex .fontsize-ensurer.reset-size6.size8 {
  font-size: 1.44166667em;
}
.katex .sizing.reset-size6.size9,
.katex .fontsize-ensurer.reset-size6.size9 {
  font-size: 1.725em;
}
.katex .sizing.reset-size6.size10,
.katex .fontsize-ensurer.reset-size6.size10 {
  font-size: 2.075em;
}
.katex .sizing.reset-size7.size1,
.katex .fontsize-ensurer.reset-size7.size1 {
  font-size: 0.34722222em;
}
.katex .sizing.reset-size7.size2,
.katex .fontsize-ensurer.reset-size7.size2 {
  font-size: 0.48611111em;
}
.katex .sizing.reset-size7.size3,
.katex .fontsize-ensurer.reset-size7.size3 {
  font-size: 0.55555556em;
}
.katex .sizing.reset-size7.size4,
.katex .fontsize-ensurer.reset-size7.size4 {
  font-size: 0.625em;
}
.katex .sizing.reset-size7.size5,
.katex .fontsize-ensurer.reset-size7.size5 {
  font-size: 0.69444444em;
}
.katex .sizing.reset-size7.size6,
.katex .fontsize-ensurer.reset-size7.size6 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size7.size7,
.katex .fontsize-ensurer.reset-size7.size7 {
  font-size: 1em;
}
.katex .sizing.reset-size7.size8,
.katex .fontsize-ensurer.reset-size7.size8 {
  font-size: 1.20138889em;
}
.katex .sizing.reset-size7.size9,
.katex .fontsize-ensurer.reset-size7.size9 {
  font-size: 1.4375em;
}
.katex .sizing.reset-size7.size10,
.katex .fontsize-ensurer.reset-size7.size10 {
  font-size: 1.72916667em;
}
.katex .sizing.reset-size8.size1,
.katex .fontsize-ensurer.reset-size8.size1 {
  font-size: 0.28901734em;
}
.katex .sizing.reset-size8.size2,
.katex .fontsize-ensurer.reset-size8.size2 {
  font-size: 0.40462428em;
}
.katex .sizing.reset-size8.size3,
.katex .fontsize-ensurer.reset-size8.size3 {
  font-size: 0.46242775em;
}
.katex .sizing.reset-size8.size4,
.katex .fontsize-ensurer.reset-size8.size4 {
  font-size: 0.52023121em;
}
.katex .sizing.reset-size8.size5,
.katex .fontsize-ensurer.reset-size8.size5 {
  font-size: 0.57803468em;
}
.katex .sizing.reset-size8.size6,
.katex .fontsize-ensurer.reset-size8.size6 {
  font-size: 0.69364162em;
}
.katex .sizing.reset-size8.size7,
.katex .fontsize-ensurer.reset-size8.size7 {
  font-size: 0.83236994em;
}
.katex .sizing.reset-size8.size8,
.katex .fontsize-ensurer.reset-size8.size8 {
  font-size: 1em;
}
.katex .sizing.reset-size8.size9,
.katex .fontsize-ensurer.reset-size8.size9 {
  font-size: 1.19653179em;
}
.katex .sizing.reset-size8.size10,
.katex .fontsize-ensurer.reset-size8.size10 {
  font-size: 1.43930636em;
}
.katex .sizing.reset-size9.size1,
.katex .fontsize-ensurer.reset-size9.size1 {
  font-size: 0.24154589em;
}
.katex .sizing.reset-size9.size2,
.katex .fontsize-ensurer.reset-size9.size2 {
  font-size: 0.33816425em;
}
.katex .sizing.reset-size9.size3,
.katex .fontsize-ensurer.reset-size9.size3 {
  font-size: 0.38647343em;
}
.katex .sizing.reset-size9.size4,
.katex .fontsize-ensurer.reset-size9.size4 {
  font-size: 0.43478261em;
}
.katex .sizing.reset-size9.size5,
.katex .fontsize-ensurer.reset-size9.size5 {
  font-size: 0.48309179em;
}
.katex .sizing.reset-size9.size6,
.katex .fontsize-ensurer.reset-size9.size6 {
  font-size: 0.57971014em;
}
.katex .sizing.reset-size9.size7,
.katex .fontsize-ensurer.reset-size9.size7 {
  font-size: 0.69565217em;
}
.katex .sizing.reset-size9.size8,
.katex .fontsize-ensurer.reset-size9.size8 {
  font-size: 0.83574879em;
}
.katex .sizing.reset-size9.size9,
.katex .fontsize-ensurer.reset-size9.size9 {
  font-size: 1em;
}
.katex .sizing.reset-size9.size10,
.katex .fontsize-ensurer.reset-size9.size10 {
  font-size: 1.20289855em;
}
.katex .sizing.reset-size10.size1,
.katex .fontsize-ensurer.reset-size10.size1 {
  font-size: 0.20080321em;
}
.katex .sizing.reset-size10.size2,
.katex .fontsize-ensurer.reset-size10.size2 {
  font-size: 0.2811245em;
}
.katex .sizing.reset-size10.size3,
.katex .fontsize-ensurer.reset-size10.size3 {
  font-size: 0.32128514em;
}
.katex .sizing.reset-size10.size4,
.katex .fontsize-ensurer.reset-size10.size4 {
  font-size: 0.36144578em;
}
.katex .sizing.reset-size10.size5,
.katex .fontsize-ensurer.reset-size10.size5 {
  font-size: 0.40160643em;
}
.katex .sizing.reset-size10.size6,
.katex .fontsize-ensurer.reset-size10.size6 {
  font-size: 0.48192771em;
}
.katex .sizing.reset-size10.size7,
.katex .fontsize-ensurer.reset-size10.size7 {
  font-size: 0.57831325em;
}
.katex .sizing.reset-size10.size8,
.katex .fontsize-ensurer.reset-size10.size8 {
  font-size: 0.69477912em;
}
.katex .sizing.reset-size10.size9,
.katex .fontsize-ensurer.reset-size10.size9 {
  font-size: 0.8313253em;
}
.katex .sizing.reset-size10.size10,
.katex .fontsize-ensurer.reset-size10.size10 {
  font-size: 1em;
}
.katex .delimsizing.size1 {
  font-family: KaTeX_Size1;
}
.katex .delimsizing.size2 {
  font-family: KaTeX_Size2;
}
.katex .delimsizing.size3 {
  font-family: KaTeX_Size3;
}
.katex .delimsizing.size4 {
  font-family: KaTeX_Size4;
}
.katex .delimsizing.mult .delim-size1 > span {
  font-family: KaTeX_Size1;
}
.katex .delimsizing.mult .delim-size4 > span {
  font-family: KaTeX_Size4;
}
.katex .nulldelimiter {
  display: inline-block;
  width: 0.12em;
}
.katex .op-symbol {
  position: relative;
}
.katex .op-symbol.small-op {
  font-family: KaTeX_Size1;
}
.katex .op-symbol.large-op {
  font-family: KaTeX_Size2;
}
.katex .op-limits > .vlist > span {
  text-align: center;
}
.katex .accent > .vlist > span {
  text-align: center;
}
.katex .accent .accent-body > span {
  width: 0;
}
.katex .accent .accent-body.accent-vec > span {
  position: relative;
  left: 0.326em;
}
.katex .mtable .vertical-separator {
  display: inline-block;
  margin: 0 -0.025em;
  border-right: 0.05em solid black;
}
.katex .mtable .arraycolsep {
  display: inline-block;
}
.katex .mtable .col-align-c > .vlist {
  text-align: center;
}
.katex .mtable .col-align-l > .vlist {
  text-align: left;
}
.katex .mtable .col-align-r > .vlist {
  text-align: right;
}
`;
