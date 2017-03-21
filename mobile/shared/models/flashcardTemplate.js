
var html1 = `
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
  <!-- https://davidwalsh.name/css-flip; accessed 03/16/17 -->
<div class='flashcard-container'>
    <div id='flipper' class='flashcard-flipper'>
        <div class='front'>
            <i id='hints-button' class="fa fa-question-circle-o"></i>
            <div id='front-content' class='content'>
                <div class='middle'>
                    <div id='front-inner-content' class='inner'>
`;

var html2 = `
</div>
</div>
</div>
</div>
<div class='back'>
<i id='front-button' class="fa fa-arrow-left"></i>
<div id='back-content' class='content'>
<div class='middle'>
<div id='solution' class='inner'>
    <div id='back-inner-content'>
`;

var html3 = `
</div>
<div id='ranking'>
    <table>
        <tr id='ranking-row'>
            <td><p class='circle'>1</p></td>
            <td><p class='circle'>2</p></td>
            <td><p class='circle'>3</p></td>
        </tr>
    </table>
</div>
</div>
<div id='hints' class='inner'>
<div id='hints-inner-content'>
`;

var html4 = `
</div>
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
        color: black;
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
        position: absolute;
        top: 0;
        left: 0;
        background-color: #e7fef8;
        border: thick solid black;
        border-radius: 5px;
    }

    .front {
        z-index: 2; /* moves the front forward */
        transform: rotateY(0deg);
    }

    .back {
        transform: rotateY(180deg);
    }

    /* flip the pane when clicked */
    .rotateBack {
        transform: rotateY(-180deg);
    }

    .rotateHint {
        transform: rotateY(180deg);
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

    #back-inner-content p,
    #hints-inner-content p {
        border-bottom: thin solid #0aaf82;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
        visibility: hidden;
    }

    i {
      position: absolute;
      padding: 10px;
    }

    .fa {
      font-size: 1.5em;
    }

    #hints-button {
        z-index: 3; /* in front of everything so it can be clicked on */
    }

    #front-button {
        z-index: 3; /* in front of everything so it can be clicked on */
        display: none;
    }

    #ranking {
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
        color: white;
        line-height: 2em;
        text-align: center;
        background: #0aaf82;
    }

    .circle:hover {
        color: #0aaf82;
        background-color: black;
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
    var viewingSolution = false;
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
        remove('solution', 'hints-button');
        display('hints');
        if(document.getElementById('hints').childElementCount > 0) {
            document.getElementById('hint0').style.visibility = 'visible';
            hintIndex += 1;
        }

        viewingHints = true;
        document.getElementById('flipper').classList.toggle('rotateHint');
    }

    function clickedShowFront() {
        remove('front-button');
        display('hints-button');

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
            display('front-button');
        } else if (!viewingSolution) {
            hideChildren(document.getElementById('back-inner-content'), 'solution');
            hideChildren(document.getElementById('hints-inner-content'), 'hint');
            document.getElementById('ranking').style.visibility = 'hidden';
            display('hints-button');
        }
    }

    function hideChildren(ele, id) {
        for (var index = 0; index < ele.childElementCount; index++) {
          document.getElementById(id + index).style.visibility = 'hidden';
        }
    }

    function showNextHint() {
        var hintsDiv = document.getElementById('hints-inner-content');
        if (hintIndex < hintsDiv.childElementCount) {
          document.getElementById('hint' + hintIndex).style.visibility = 'visible';
          hintIndex += 1;
        }
    }

    function resetCard() { // flips back to front after solution viewed, resetting everything
        solutionIndex = 0;
        viewingHints = false;
        viewingSolution = false;
        document.getElementById('flipper').classList.toggle('rotateBack');
    }

    function showNextSolutionStep() {
        document.getElementById('solution' + solutionIndex++).style.visibility = 'visible';
    }

    function showSolutionSide() {
        remove('hints', 'hints-button', 'front-button');
        display('solution');

        var solutionElementCount = document.getElementById('back-inner-content').childElementCount;
        if (solutionIndex == solutionElementCount) { // solution steps & ranks are all visible at this point
            resetCard();
            return;
        }

        if (solutionIndex === 0) { // flip to back!
            viewingSolution = true;
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

module.exports = {
    html1: html1,
    html2: html2,
    html3: html3,
    html4: html4,
    css: css,
    js: js
}
