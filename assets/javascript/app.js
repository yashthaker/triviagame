
var timeout1 = setTimeout(fiveSeconds, 1000 * 5);
var timeout2 = setTimeout(tenSeconds, 1000 * 10);
var timeout3 = setTimeout(timeUp, 1000 * 15);

clearTimeout(timeout1);
clearTimeout(timeout2);
clearTimeout(timeout3);

function fiveSeconds() {
    $('#time-left').html('<h2>About 10 Seconds Left!</h2>');
    alert('10 seconds left');
}

function tenSeconds() {
    $('#time-left').html('<h2>About 5 Seconds Left!</h2>');
    alert('5 seconds left');
}

function timeUp(){
    // audio.play();
    console.log('done');
    $('#time-left').html('<h2>Time\'s Up!</h2>');
    alert('time is up');
}



var numQues = 10;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(10);

var correctAnswers = 0;
var incorrectAnswers = 0;

// Insert answers to questions
var answers[0] = "Martha and Thomas";
var answers[1] = "Ironman";
var answers[2] = "Chris Evans";
answers[3] = "Heath Ledger";
answers[4] = "DC and Marvel";
answers[5] = "Kryptonite";
answers[6] = "Gotham";
answers[7] = "Green";
answers[8] = "Peter Parker";
answers[9] = "Asgard";

function correctscore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}