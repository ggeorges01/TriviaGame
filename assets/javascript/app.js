var countDownTimer = 100
var numQuestions = 8
var numRightAnswers = 0
var numWrongAnswers = 0

// setInterval
  var countDownTimer = setInterval (countDown('+secs+', "'+countDownTimer+'"),1000);
setInterval(countDown, 1000);

function countDown() {
    countDown--;
 
  if (countDown == 0) {
    alert("All Done!");  
    alert("Correct Answers:");
    alert("Incorrect Answers:");
    alert("Unanswered:");
      }
}

function onTimeFinished() {
  // validateAnswers
  alert("Correct Answers:");
    alert("Incorrect Answers:");
    alert("Unanswered:");
}

function validateAnswers() {
  if ( $('input[name=FirstCGI]:checked', '#FirstCGI').val() === 'Toy Story' ) {
    numRightAnswers++    
  } else  {
    numWrongAnswers++
  }
}

function validateAnswers() {
  if ( $('input[name=spiceGirl]:checked', '#spiceGirl').val() === 'Fred Spice' ) {
    numRightAnswers++
  } else  {
    numWrongAnswers++
  }
}

function validateAnswers() {
  if ( $('input[name=mostNBAtitles]:checked', '#mostNBAtitles').val() === 'Chicago Bulls' ) {
    numRightAnswers++
  } else  {
    numWrongAnswers++
  }
}

function validateAnswers() {
  if ( $('input[name=hitSong]:checked', '#hitSong').val() === 'Nirvana' ) {
    numRightAnswers++
  } else  {
    numWrongAnswers++
  }
}

function validateAnswers() {
  if ( $('input[name=featuredSong]:checked', '#featuredSong').val() === 'The Lion King' ) {
    numRightAnswers++
  } else  {
    numWrongAnswers++
  }
}

function validateAnswers() {
  if ( $('input[name=themeSong]:checked', '#themeSong').val() === 'Fresh' ) {
    numRightAnswers++
  } else  {
    numWrongAnswers++
  }
}


function validateAnswers() {
  if ( $('input[name=BFF]:checked', '#BFF').val() === 'Zach' ) {
    numRightAnswers++
  } else  {
    numWrongAnswers++
  }
}

function validateAnswers() {
  if ( $('input[name=HSprincipal]:checked', '#HSprincipal').val() === 'Mr. Belding' ) {
    numRightAnswers++
  } else  {
    numWrongAnswers++
  }
}

$('#submitButton').on('click', function (event) {
  validateAnswers()
})

