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
        font-size: 1em;
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
        width: 2em;
        height: 2em;
        border-radius: 50%;
        font-size: 1em;
        color: #fff;
        line-height: 2em;
        text-align: center;
        background: #0aaf82;
    }
</style>
`;

var js = `
<script>
    document.getElementById('front-content').onclick = handleClick;
    document.getElementById('back-content').onclick = handleClick;
    document.getElementById('hints-button').onclick = clickedShowHints;
    document.getElementById('front-button').onclick = clickedShowFront;

    var viewingHints = false;
    var solutionIndex = 0;
    var hintIndex = 0;

    function handleClick() {
        if (viewingHints) {
          showNextHint();
          return;
        }
        showSolutionSide();
    }

    function clickedShowHints() {
        remove('front-inner-content','hints-button');

        viewingHints = true;
        document.getElementById('flipper').classList.toggle('rotateHint');
    }

    function clickedShowFront() {
        hideChildren(document.getElementById('hints'), 'hint');
        remove('hints', 'front-button');

        viewingHints = false;
        hintIndex = 0;
        document.getElementById('flipper').classList.toggle('rotateHint');
    }

    function remove() { // sets display of args (ids) to 'none'
        for (var i = 0; i < arguments.length; i++) {
            setDisplay(arguments[i], 'none');
        }
    }

    function display() { // sets display of args (ids) to 'inline'
        for (var i = 0; i < arguments.length; i++) {
            setDisplay(arguments[i], 'inline');
        }
    }

    function setDisplay(id, display) { // sets element 'id' to display 'display'
        document.getElementById(id).style.display = display;
    }

    function flipFinished() { // called after a flip event to update what's displayed
        if (viewingHints) {
            display('hints', 'front-button');
            if(document.getElementById('hints').childElementCount > 0) {
                document.getElementById('hint0').style.visibility = 'visible';
                hintIndex += 1;
            }
        } else {
            display('front-inner-content', 'hints-button');
        }
    }

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

    function resetCard() { // flips back to front after solution viewed, resetting everything
        solutionIndex = 0;
        viewingHints = false;
        hideChildren(document.getElementById('back-inner-content'), 'solution');
        document.getElementById('ranking').style.visibility = 'hidden';
        remove('front-inner-content', 'hints-button');

        document.getElementById('flipper').classList.toggle('rotateBack');
    }

    function showNextSolutionStep() {
        document.getElementById('solution' + solutionIndex++).style.visibility = 'visible';
    }

    function showSolutionSide() {
        var solutionElementCount = document.getElementById('back-inner-content').childElementCount;
        if (solutionIndex == solutionElementCount) { // solution steps & ranks are all visible at this point
            resetCard();
            return;
        }

        if (solutionIndex === 0) { // flip to back!
            document.getElementById('flipper').classList.toggle('rotateBack');
        } else if (solutionIndex == solutionElementCount - 1) { // show ranks on revealing last piece of solution
            document.getElementById('ranking').style.visibility = 'visible';
        }
        showNextSolutionStep();
    }

    // The following is used to help with flashcard content display during card rotations.
    // It allows the display to be updated when the rotation (flip) completes.
    /* From Modernizr */
    function whichTransitionEvent(){
        var t;
        var el = document.createElement('fakeelement');

        // allows it to work on many browsers
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

    // listen for transition to end
    var transitionEvent = whichTransitionEvent();
    transitionEvent && document.getElementById('flipper').addEventListener(transitionEvent, flipFinished);
</script>
`;
