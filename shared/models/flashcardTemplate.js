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
    var myHtml = `<!DOCTYPE html>
    <html >
    <head>
      <meta charset="UTF-8">
      <title>Flashcard</title>
      <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
    </head>

    <body>
      <!-- https://davidwalsh.name/css-flip; accessed 03/16/17 -->
    <div class='flashcard-container'>
      <div id='flipper' class='flashcard-flipper'>
        <div class='front'>
          <i id='hints-button' class="fa fa-question-circle-o"></i>
          <i id='front-button' class="fa fa-arrow-left"></i>
          <div id='front-content' class='content'>
            <div class='middle'>
              <div id='front-inner-content' class='inner'>
                ${getFrontContent(front)}
              </div>
              <div id='hints' class='inner hints'>
                ${getContentLines(hints, 'hint')}
              </div>
            </div>
          </div>
        </div>
        <div class='back'>
          <div id='back-content' class='content'>
            <div class='middle'>
              <div id='back-inner-content' class='solution inner'>
                ${getContentLines(back, 'solution')}
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

    <style>
        html {
            background-color: #0aaf82;
        }

        body {
            font-size: 22px;
        }

        .flashcard-container {
            font-family: Tahoma, Geneva, sans-serif;
            perspective: 1000px; /* adds realistic-looking perspective to flip action */
            padding: 5px;
            background-color: black;
        }

        .flashcard-container,
        .front,
        .back {
            width: 800px;
            height: 400px;
            border-radius: 10px;
        }

        #flipper {
            transition: width 1s, height 1s, transform 1s;
            transform-style: preserve-3d;
            position: relative;
        }

        .front,
        .back {
            /* not sure how much of this is needed for Electron */
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -o-backface-visibility: hidden;
            backface-visibility: hidden;

            position: absolute;
            top: 0;
            left: 0;
            background-color: #e7fef8;
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
          font-size: 40px;
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

    <script>
        var viewingHints = false;
        var solutionIndex = 0;
        var hintIndex = 0;

        document.getElementById('hints-button').onclick = function() {
            toggleHintFront(true, 'rotateHint', 500);
            showFirstHint();
        };

        document.getElementById('front-button').onclick = function() {
          hideChildren(document.getElementById('hints'), 'hint');
          toggleHintFront(false, 'rotateHint', 500);
        };

        function toggleHintFront(showHints, rotate, timeout=0) {
            document.getElementById('flipper').classList.toggle(rotate);
            viewingHints = showHints;

            var displayHints = showHints ? 'inline' : 'none';
            var displayFront = !showHints ? 'inline' : 'none';
            window.setTimeout(function() {
                showHintSide(displayHints, timeout);
                showFrontSide(displayFront, timeout);
            }, timeout);

        }

        function showHintSide(display, timeout=0) {
            document.getElementById('hints').style.display = display;
            document.getElementById('front-button').style.display = display;
        };

        function showFrontSide(display, timeout=0) {
            document.getElementById('front-inner-content').style.display = display;
            document.getElementById('hints-button').style.display = display;
        }

        function showFirstHint() {
            document.getElementById('hint0').style.visibility = 'visible';
            hintIndex = 1;
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

        function resetCard() {
            solutionIndex = 0;
            toggleHintFront(false, 'rotateBack');
            hideChildren(document.getElementById('back-inner-content'), 'solution');
            document.getElementById('ranking').style.visibility = 'hidden';
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
    </script>

    </body>
    </html>
`;

    // console.log('front:');
    // console.log(front);
    // console.log("\n");
    //
    // console.log("back:")
    // back.forEach(function(step) {
    //     console.log(step);
    // });
    // console.log("\n");
    //
    // console.log("hints:")
    // hints.forEach(function(hint) {
    //     console.log(hint);
    // });
    console.log(myHtml);
    return myHtml;
}

module.exports.makeFlashcard = makeFlashcard;
