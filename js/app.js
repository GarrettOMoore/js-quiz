var question = document.getElementsByTagName("p")[0]; 
var answerOne = document.getElementById("one");
var answerTwo = document.getElementById("two");
var answerThree = document.getElementById("three");
var answerFour = document.getElementById("four");
var nextBtn =  document.getElementsByClassName('btn-floating btn-large red pulse')[0];
var messageDisplay = document.getElementsByTagName('h2')[0];
var questionCount = 0;
var radios = document.forms[0].answer;
var correctAnswers = [];
var playerScore = 0;
var btnOne = document.getElementById("ques1");
var btnTwo = document.getElementById("ques2");
var btnThree = document.getElementById("ques3");
var btnFour = document.getElementById("ques4");
var score = document.getElementById('score'); 

var allQuestions = 
[{question: "Okinawa is a volcano in which country?", choices: ["Japan", "Russia", "USA", "Uzbekistan"], correctAnswer: "Japan"},
{question: "Ottawa is which country's capital?", choices: ["Africa", "Alaska", "Yemen", "Canada"], correctAnswer: "Canada"},
{question: "What is the great barrier reef made from?", choices: ["Plankton", "Sand", "Coral", "Stone"], correctAnswer: "Coral"},
{question: "Which US holiday state has the Everglades National Park", choices: ["Idaho", "Florida", "Montana", "Maine"], correctAnswer: "Florida"},
{question: "Buckingham Palace is in which English city?", choices: ["London", "Chelsea", "Manchester", "Norfolk"], correctAnswer: "London"},
{question: "The Victoria falls are shared between Zimbabwe and which other country beginning with the same letter?", choices: ["Zoolander", "Zambia", "Zaszeck", "Zermolia"], correctAnswer: "Zambia"},
{question: "Madagascar is off which coast of Africa?", choices: ["North", "South", "West", "East"], correctAnswer: "East"},
{question: "Argentina's east coast lies on which ocean?", choices: ["Atlantic", "Pacific", "Indian", "Adriatic"], correctAnswer: "Atlantic"},
{question: "The people of which European country consume the most calories per capita?", choices: ["England", "Scotland", "Denmark", "Ireland"], correctAnswer: "Ireland"},
{question: "Which nation's population, on the average, takes the most time to eat their meals?", choices: ["USA", "Spain", "China", "France"], correctAnswer: "France"}]

function clearRadios () {
    for(let i = 0; i<radios.length;i++){
        radios[i].checked=false;
    }
}

function initGame(){
    question.textContent = allQuestions[questionCount].question;
    answerOne.textContent = allQuestions[questionCount].choices[0];
    answerTwo.textContent = allQuestions[questionCount].choices[1];
    answerThree.textContent = allQuestions[questionCount].choices[2]; 
    answerFour.textContent = allQuestions[questionCount].choices[3];   
    btnOne.setAttribute("value", allQuestions[questionCount].choices[0]);
    btnTwo.setAttribute("value", allQuestions[questionCount].choices[1]);
    btnThree.setAttribute("value", allQuestions[questionCount].choices[2]);
    btnFour.setAttribute("value", allQuestions[questionCount].choices[3]);
    nextBtn.addEventListener('click', nextQuestion);
}

document.addEventListener("DOMContentLoaded", initGame);

function checkAnswer() {
    console.log(document.forms[0].answer.value);
    console.log(allQuestions[questionCount].correctAnswer);
    if (document.forms[0].answer.value === allQuestions[questionCount].correctAnswer) {
        playerScore++;
        messageDisplay.textContent = "Correct!";
        score.textContent = playerScore;
    } else {
        console.log("false");
        messageDisplay.textContent = "Wrong answer!";
    }
}
    
function nextQuestion(){
    checkAnswer();
    questionCount++;
    if (questionCount < 10) {
    question.textContent = allQuestions[questionCount].question;
    answerOne.textContent = allQuestions[questionCount].choices[0];
    answerTwo.textContent = allQuestions[questionCount].choices[1];
    answerThree.textContent = allQuestions[questionCount].choices[2]; 
    answerFour.textContent = allQuestions[questionCount].choices[3];   
    btnOne.setAttribute("value", allQuestions[questionCount].choices[0]);
    btnTwo.setAttribute("value", allQuestions[questionCount].choices[1]);
    btnThree.setAttribute("value", allQuestions[questionCount].choices[2]);
    btnFour.setAttribute("value", allQuestions[questionCount].choices[3]);
    clearRadios();
    } else {
        messageDisplay.textContent = "Game over!";
    }
}

