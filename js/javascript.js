//Game Questions
const gameQuestions = [
    {
        question1: "We'll give you an easy one to start: What is the best premier league side of all time?",
        answers1: {
            a: "Tottenham Hotspur FC",
            b: "Tottenham Hotspur FC",
            c: "Tottenham Hotspur FC",
            d: "Tottenham Hotspur FC",
        },
    },
    {
        question2: "Who is the all time top scorer in Premier League history?",
        answers2: {
            a: "Davy Crocket",
            b: "Tim Sherwood",
            c: "Harry Kane",
            d: "Alan Shearer",
        },
        correctAnswer: "d",
    },
    {
        question3: "Which Premier League team finished the season with the fewest points ever?",
        answers3: {
            a: "Aston Villa (15/16)",
            b: "Huddersfield (18/19)",
            c: "Derby County (07/08)",
            d: "Sunderland (05/06)",
        },
        correctAnswer: "c",
    },
    {
        question4: "Who has won the most Premier League titles as manager?",
        answers4: {
            a: "Arsene Wenger",
            b: "Sir Alex Ferguson",
            c: "Jose Mourinho",
            d: "Pep Guardiola",
        },
        correctAnswer: "b",
    },
    {
        question5: "Who scored the 20,000th Premier League goal in the 2011/12 season?",
        answers5: {
            a: "Clint Dempsey",
            b: "Marc Albrighton",
            c: "Leighton Baines",
            d: "Yakubu",
        },
        correctAnswer: "b",
    },
    {
        question6: "Which country has provided the most players to the Premier League outside of England?",
        answers6: {
            a: "Spain",
            b: "Netherlands",
            c: "Brazil",
            d: "France",
        },
        correctAnswer: "d",
    },
    {
        question7: "Who was the top scorer in the Premier League first season of 1992/93?",
        answers7: {
            a: "Alan Shearer",
            b: "Les Ferdinand",
            c: "Teddy Sheringham",
            d: "Dean Holdsworth",
        },
        correctAnswer: "c",
    },
    {
        question8: "Which player won the PFA Player of the Year Award in the opening Premier League season of 92/93?",
        answers8: {
            a: "Paul Ince",
            b: "Paul McGrath",
            c: "Chris Waddle",
            d: "Gary Speed",
        },
        correctAnswer: "b",
    },
    {
        question9: "In 2000/01 three teams named City were relegated. Which one avoided the drop?",
        answers9: {
            a: "Leicester City",
            b: "Bradford City",
            c: "Manchester City",
            d: "Coventry City",
        },
        correctAnswer: "a",
    },
    {
        question10: "In 2000/01 three teams named City were relegated. Which one avoided the drop?",
        answers10: {
            a: "Leeds United",
            b: "Boavista",
            c: "Atletico Madrid",
            d: "AZ Alkmaar",
        },
        correctAnswer: "c",
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
const startingTime = 1.5;
const endingMinutes = 0;
const endingMinutes2 = 1;
let time = startingTime * 60;

//Display questions
q1.innerHTML = `<h3>${gameQuestions[0].question1}</h3>
<div class="answer-grid">
    <button class="btn btnq1 correct">${gameQuestions[0].answers1.a}</button>
    <button class="btn btnq1 correct">${gameQuestions[0].answers1.b}</button>
    <button class="btn btnq1 correct">${gameQuestions[0].answers1.c}</button>
    <button class="btn btnq1 correct">${gameQuestions[0].answers1.d}</button>
</div>`;

q2.innerHTML = `<h3>${gameQuestions[1].question2}</h3>
<div class="answer-grid">
    <button class="btn btnq2 wrong">${gameQuestions[1].answers2.a}</button>
    <button class="btn btnq2 wrong">${gameQuestions[1].answers2.b}</button>
    <button class="btn btnq2 correct">${gameQuestions[1].answers2.c}</button>
    <button class="btn btnq2 wrong">${gameQuestions[1].answers2.d}</button>
</div>`;

q3.innerHTML = `<h3>${gameQuestions[2].question3}</h3>
<div class="answer-grid">
    <button class="btn btnq3 wrong">${gameQuestions[2].answers3.a}</button>
    <button class="btn btnq3 correct">${gameQuestions[2].answers3.b}</button>
    <button class="btn btnq3 wrong">${gameQuestions[2].answers3.c}</button>
    <button class="btn btnq3 wrong">${gameQuestions[2].answers3.d}</button>
</div>`;

q4.innerHTML = `<h3>${gameQuestions[3].question4}</h3>
<div class="answer-grid">
    <button class="btn btnq4 wrong">${gameQuestions[3].answers4.a}</button>
    <button class="btn btnq4 correct">${gameQuestions[3].answers4.b}</button>
    <button class="btn btnq4 wrong">${gameQuestions[3].answers4.c}</button>
    <button class="btn btnq4 wrong">${gameQuestions[3].answers4.d}</button>
</div>`;

q5.innerHTML = `<h3>${gameQuestions[4].question5}</h3>
<div class="answer-grid">
    <button class="btn btnq5 wrong">${gameQuestions[4].answers5.a}</button>
    <button class="btn btnq5 wrong">${gameQuestions[4].answers5.b}</button>
    <button class="btn btnq5 wrong">${gameQuestions[4].answers5.c}</button>
    <button class="btn btnq5 correct">${gameQuestions[4].answers5.d}</button>
</div>`;

//start game on click. starts timer function. destroys splash screen. displays question 1.
startGame.onclick = function() {
    splashScreen.style.display = "none";
    q1.style.display = "block";
    
    
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
        alert('Thanks for playing');
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
        //timer.style.display = "none";
        if (time > 0) {
            time = endingMinutes2;
            console.log('button clicked');
          }
    });
}

//function to refresh page
function refreshPage(){
    window.location.reload();
} 

//restart game from end game screen
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
        /*if (correctAnswers == 0) {
            displayScore.innerHTML = `You got 0 correct answers out of ${numberQuestions}`;
        }*/
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

