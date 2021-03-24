
const gameQuestions = [
    {
        question1: "Who is the all time top scorer in Premier League history?",
        answers1: {
            a: "Davy Crocket",
            b: "Tim Sherwood",
            c: "Harry Kane",
            d: "Alan Shearer",
        },
        correctAnswer: "d",
    },
    {
        question2: "Which Premier League team finished the season with the fewest points ever?",
        answers2: {
            a: "Wigan Athletic",
            b: "Huddersfield",
            c: "Derby County",
            d: "Nottingham Forest",
        },
        correctAnswer: "c",
    },
    {
        question3: "Who has won the most Premier League titles as manager?",
        answers3: {
            a: "Arsene Wenger",
            b: "Sir Alex Ferguson",
            c: "Jose Mourinho",
            d: "Pep Guardiola",
        },
        correctAnswer: "b",
    },
]

//global variables
const startGame = document.getElementById('start-game');
const splashScreen = document.getElementById('splash-screen');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const btnq1 = document.getElementsByClassName('btnq1');
const btnq2 = document.getElementsByClassName('btnq2');
const btnq3 = document.getElementsByClassName('btnq3');
const btnq4 = document.getElementsByClassName('btnq4');
const btnq5 = document.getElementsByClassName('btnq5');
const endGameScreen = document.getElementById('end-game');
const restartGame = document.getElementById('play-again');
const displayScore = document.getElementById('score-display');
const timer = document.getElementById('timer');
let correctAnswers = 0;
let numberQuestions = 5;
const selectCorrectAnswer = document.getElementsByClassName('correct');
const selectWrongAnswer = document.getElementsByClassName('wrong');

q1.innerHTML = `<h3>${gameQuestions[0].question1}</h3>
<div class="answer-grid">
    <button class="btn btnq1 wrong">${gameQuestions[0].answers1.a}</button>
    <button class="btn btnq1 wrong">${gameQuestions[0].answers1.b}</button>
    <button class="btn btnq1 wrong">${gameQuestions[0].answers1.c}</button>
    <button class="btn btnq1 correct">${gameQuestions[0].answers1.d}</button>
</div>`;


/*for (let i = 0; i < gameQuestions.length; i++) {
    gameQuestions[i];
    q2.innerHTML = `<h3>${gameQuestions[0].question2}</h3>`;
}
for (var i = 0; i<gameQuestions.length; i++) {
    console.log(gameQuestions[0]);;
  }*/

//start game on click. starts timer function. destroys splash screen. displays question 1.
startGame.onclick = function() {
    splashScreen.style.display = "none";
    q1.style.display = "block";
    const startingTime = 1.5;
    const endingMinutes = 0
    let time = startingTime * 60;
    
    const timerCountdown = document.getElementById('timer');
    
    var intervalId = setInterval(startCountdown, 1000);
    
    function startCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      seconds = seconds < 10 ? '0' + seconds : seconds;
    
      timerCountdown.innerHTML = `Time left: ${minutes}:${seconds}`;
      time--;
      if(time < 0){
        time = endingMinutes;
        clearInterval(intervalId);
        alert('Game Over! You ran out of time!');
        refreshPage();
      }
    }
};

//displays q2
for (let i = 0; i < btnq1.length; i++) {
    btnq1[i].addEventListener('click',function(){
        //console.log('clicked btn 1');
        q1.style.display = "none";
        q2.style.display = "block";
    })
}

//displays q3
for (let i = 0; i < btnq2.length; i++) {
    btnq2[i].addEventListener('click',function(){
        q2.style.display = "none";
        q3.style.display = "block";
    })
}

//displays q4
for (let i = 0; i < btnq3.length; i++) {
    btnq3[i].addEventListener('click',function(){
        q3.style.display = "none";
        q4.style.display = "block";
    })
}

//displays q5
for (let i = 0; i < btnq4.length; i++) {
    btnq4[i].addEventListener('click',function(){
        q4.style.display = "none";
        q5.style.display = "block";
    })
}

//displays end game screen and results
for (let i = 0; i < btnq5.length; i++) {
    btnq5[i].addEventListener('click',function(){
        q5.style.display = "none";
        endGameScreen.style.display = "block";
        timer.style.display = "none";
    })
}

//function to refresh page
function refreshPage(){
    window.location.reload();
} 

//retart game from end game screen
restartGame.addEventListener('click',function(){
    endGameScreen.style.display = "none";
    refreshPage(); 
})

//count correct answers & play cheers audio on correct answer selected
for (let i = 0; i < selectCorrectAnswer.length; i++) {
    selectCorrectAnswer[i].addEventListener('click',function(){
        //console.log(correctAnswers);
        correctAnswers++;
        displayScore.innerHTML = `You got ${correctAnswers} correct answers out of ${numberQuestions}`;
        const cheersAudio = new Audio('audio/cheer2.mp3');
        cheersAudio.play();
    })
}

//play audio boos on incorrect answer
for (let a = 0; a < selectWrongAnswer.length; a++) {
    selectWrongAnswer[a].addEventListener('click',function() {
        const boosAudio = new Audio('audio/boos1.mp3');
        boosAudio.play();
    })
}

