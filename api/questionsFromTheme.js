import { displayQuestions } from "./index-display.js";
import { getQuestions } from "./api.js";

let currentQuestionIndex = 0;

const themeId = localStorage.getItem("selectedThemeId");
const questionCount = localStorage.getItem("selectedQuestionCount");

getQuestions(themeId, questionCount)
    .then((result) => {
        displayQuestions(result, currentQuestionIndex);
        handleNextQuestion(result);
    })
    .catch((error) => console.log(error));

function handleNextQuestion(questions) {
    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestions(questions, currentQuestionIndex);
                handleNextQuestion(questions)
            }else{
                const score = calculateScore(questions);
                displayScore(score)
            }
        });
    });
}
function calculateScore(questions) {
    let score = 0;
    questions.forEach((question) => {
        if (question.selectedAnswer == true) {
            score++;
        }
    });
    return score;
}
function displayScore(score){
    console.log('Score:', score);
}
