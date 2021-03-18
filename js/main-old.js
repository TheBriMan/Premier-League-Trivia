function buildGame(){
    //variable to store HTML output
    const output = [];
    
    //loop through each question
    gameQuestions.forEach(
        (currentQuestion, questionNumber) => {
        
            //variable stores list possible answers
            const answers = [];

            //loop through each available answer
            for(letter in currentQuestion.answers) {

                //HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            
            //add question and its answers to output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    //combine output list into string and display on page
    gameContainer.innerHTML = output.join('');
}

function showEndGameResults(){

    //get answer containers
    const answerContainers = gameContainer.querySelectorAll('.answers');

    //tally user answers
    let numberCorrectAnswers = 0;
    //MAY WANT TO ADD POINTS HERE

    //loop through each question again
    gameQuestions.forEach ( (currentQuestion, questionNumber) => {

        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const playerAnswer = (answerContainer.querySelector(selector) || {}).value;

        //check answer correct
        if(playerAnswer === currentQuestion.correctAnswer){
            numberCorrectAnswers++;

            //Color correct answer selection green - May take this out
            //answerContainers[questionNumber].style.color = 'green';

            //PLAY A CHEERING NOISE HERE
            //ALSO POINTS ACCUMULATION HERE FOR RIGHT ANSWER
        } else {
            //If answer wrong, color answers red - May take this out
            //answerContainers[questionNumber].style.color = 'red';

            //PLAY BOOING/JEARING NOISE HERE
            //ALSO POINTS DEDUCTION HERE FOR WRONG ANSWER
        }
    });
    //show number correct answers out of total questions
    endGameResultsContainer.innerHTML = `${numberCorrectAnswers} out of ${gameQuestions.length}`;
}

//variables
const splashScreen = document.getElementById('splash')
const startGame = document.getElementById('start-game')
const gameContainer = document.getElementById('game');
const endGameResultsContainer = document.getElementById('end-game-results');
const submitButton = document.getElementById('submit');

splashScreen.innerHTML = `<img src="images/Premier_League_Logo.svg" />`;

//display game on slick "Start Game" button

startGame.onclick = function() {
    startGame.style.display = "none";
    splashScreen.style.display = "none";
    submitButton.style.display = "block";
    return buildGame();
  };

//on submit, show end game results
//submitButton.addEventListener('click', showEndGameResults);
submitButton.onclick = function() {
    const answers = gameContainer.querySelectorAll(".answers");
    const questions = gameContainer.querySelectorAll(".question");
    //console.log(answersArr);
    //console.log(questionsArr);
    for (var i=0;i<answers.length;i+=1){
        answers[i].style.display = "none";
      }
    //answers.style.display = "none";
    for (var i=0;i<questions.length;i+=1){
        questions[i].style.display = "none";
    }
    //questions.style.display = "none";
    submitButton.style.display = "none";
    return showEndGameResults();
  };
