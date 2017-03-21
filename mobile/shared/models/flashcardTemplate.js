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
    return html1 + getFrontContent(front)
        + html2 + getContentLines(hints, 'hint')
        + html3 + getContentLines(back, 'solution')
        + html4 + css + js;
}

module.exports.makeFlashcard = makeFlashcard;

var html1 = `
    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
      <!-- https://davidwalsh.name/css-flip; accessed 03/16/17 -->
    <div class='flashcard-container'>
        <div id='flipper' class='flashcard-flipper'>
            <div class='front'>
                <i id='hints-button' class="fa fa-question-circle-o"></i>
                <i id='front-button' class="fa fa-arrow-left"></i>
                <div id='front-content' class='content'>
                    <div class='middle'>
                        <div id='front-inner-content' class='inner'>
`;

var html2 = `
                        </div>
                        <div id='hints' class='inner hints'>
`;

var html3 = `
                        </div>
                    </div>
                </div>
            </div>
            <div class='back'>
                <div id='back-content' class='content'>
                    <div class='middle'>
                        <div id='back-inner-content' class='solution inner'>
`;

var html4 = `
                        </div>
                        <div id='ranking' class=footer>
                            <table>
                                <tr>
                                    <td><p class='circle'>1</p></td>
                                    <td><p class='circle'>2</p></td>
                                    <td><p class='circle'>3</p></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

var css = `
    <style>
        .flashcard-container {
            font-family: Tahoma, Geneva, sans-serif;
            perspective: 1000px; /* adds realistic-looking perspective to flip action */
            background-color: transparent;
            width: 80%;
            font-size: 12px;
        }

        #flipper {
            transition: width 1s, height 1s, transform 1s;
            transform-style: preserve-3d;
            position: relative;
            width: 100%;
            padding: 25%;
            box-sizing: border-box;
        }

        .front,
        .back {
            /* not sure how much of this is needed for Electron */
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -o-backface-visibility: hidden;
            backface-visibility: hidden;

            width: 100%;
            height: 100%;
            color: black;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #e7fef8;
            border: thick solid black;
            border-radius: 5px;
        }

        .front {
            z-index: 2; /* moves the front forward */
        }

        .back {
            transform: rotateY(180deg);
        }

        /* flip the pane when clicked */
        .rotateBack {
            transform: rotateY(-180deg);
        }

        .rotateHint {
            transform: rotateX(-360deg);
        }

        /* http://stackoverflow.com/questions/396145/how-to-vertically-center-a-div-for-all-browsers; by Billbad; accessed 03/16/17 */
        .content {
            display: table;
            position: absolute;
            height: 100%;
            width: 100%;
        }

        .middle {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }

        .inner {
            margin-left: auto;
            margin-right: auto;
        }

        .hints {
            display: none;
        }

        .hints p,
        .solution p {
            border-bottom: thin solid #0aaf82;
            text-align: center;
            visibility: hidden;
            margin-left: 20px;
            margin-right: 20px;
        }

        i {
          position: absolute;
          padding: 10px;
          z-index: 3; /* in front of everything so it can be clicked on */
        }

        .fa {
          font-size: 1.5em;
        }

        .fa-arrow-left {
          display: none;
        }

        .footer {
          width: 100%;
          position: absolute;
          bottom: 5px;
          visibility: hidden; /* don't allow ranking til all the solution is visible */
        }

        table {
          display: inline; /* allows it to be centred */
        }

        td p {
          margin: 0 30px; /* space between cells */
        }

        /* http://stackoverflow.com/questions/16615403/css-how-to-draw-circle-with-text-in-middle
        by Jawad
        accessed 03/18/17 */
        .circle {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            font-size: 22px;
            color: #fff;
            line-height: 45px;
            text-align: center;
            background: #0aaf82;
        }
    </style>
`;

var js = `
<script>
    var viewingHints = false;
    var solutionIndex = 0;
    var hintIndex = 0;

    document.getElementById('hints-button').onclick = function() {
        document.getElementById('front-inner-content').style.display = 'none';
        document.getElementById('hints-button').style.display = 'none';

        viewingHints = true;
        document.getElementById('flipper').classList.toggle('rotateHint');
    };

    document.getElementById('front-button').onclick = function() {
      hideChildren(document.getElementById('hints'), 'hint');
      document.getElementById('hints').style.display = 'none';
      document.getElementById('front-button').style.display = 'none';

      viewingHints = false;
      hintIndex = 0;
      document.getElementById('flipper').classList.toggle('rotateHint');
    };

    function toggleHintFront() {
        if (viewingHints) {
            document.getElementById('hints').style.display = 'inline';
            document.getElementById('front-button').style.display = 'inline';
            if(document.getElementById('hints').childElementCount > 0) {
                document.getElementById('hint0').style.visibility = 'visible';
                hintIndex += 1;
            }
        } else {
            document.getElementById('front-inner-content').style.display = 'inline';
            document.getElementById('hints-button').style.display = 'inline';
        }
    }

    function showHintSide(display) {
        document.getElementById('hints').style.display = display;
        document.getElementById('front-button').style.display = display;

        if(document.getElementById('hints').childElementCount > 0) {
            document.getElementById('hint0').style.visibility = 'visible';
            hintIndex += 1;
        }
    };

    // function showFrontSide(display) {
    //     document.getElementById('front-inner-content').style.display = display;
    //     document.getElementById('hints-button').style.display = display;
    // }

    function hideChildren(ele, id) {
        for (var index = 0; index < ele.childElementCount; index++) {
          document.getElementById(id + index).style.visibility = 'hidden';
        }
    }

    function showNextHint() {
        var hintsDiv = document.getElementById('hints');
        if (hintIndex < hintsDiv.childElementCount) {
          document.getElementById('hint' + hintIndex).style.visibility = 'visible';
          hintIndex += 1;
        }
    }

    function resetCard() {
        solutionIndex = 0;
        viewingHints = false;
        hideChildren(document.getElementById('back-inner-content'), 'solution');
        document.getElementById('ranking').style.visibility = 'hidden';
        document.getElementById('flipper').classList.toggle('rotateBack');
    }

    function revealBack() {
        document.getElementById('flipper').classList.toggle('rotateBack');
    }

    function showNextPiece() {
        document.getElementById('solution' + solutionIndex).style.visibility = 'visible';
        solutionIndex += 1;
    }

    function updateSolution() {
        var solutionElementCount = document.getElementById('back-inner-content').childElementCount;
        if (solutionIndex == solutionElementCount) {
            resetCard();
            return;
        }

        if (solutionIndex === 0) { // flip to back!
            revealBack();
        } else if (solutionIndex == solutionElementCount - 1) { // show ranks on revealing last piece of solution
            document.getElementById('ranking').style.visibility = 'visible';
        }
        showNextPiece();
    }

    function handleClick() {
        if (viewingHints) {
          showNextHint();
          return;
        }
        updateSolution();
    }

    document.getElementById('front-content').onclick = handleClick;
    document.getElementById('back-content').onclick = handleClick;

    /* From Modernizr */
    function whichTransitionEvent(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        }

        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
    }

    /* Listen for a transition! */
    var transitionEvent = whichTransitionEvent();
    transitionEvent && document.getElementById('flipper').addEventListener(transitionEvent, toggleHintFront);
</script>

`;
