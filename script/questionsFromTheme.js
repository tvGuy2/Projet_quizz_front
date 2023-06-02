import { displayQuestions } from "./index-display.js";
import { getQuestions } from "../api/api.js";

let currentQuestionIndex = 0;
const themeId = localStorage.getItem("selectedThemeId");
const questionCount = localStorage.getItem("selectedQuestionCount");

// Variable pour stocker les réponses de l'utilisateur
const userResponses = [];

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
            // Stocker la question, la réponse sélectionnée et la réponse correcte
            const question = questions[currentQuestionIndex];
            const selectedAnswerId = parseInt(button.id)
            const selectedAnswer = question.reponses.find(reponse => reponse.id === selectedAnswerId);
            const correctAnswer = question.reponses.find(reponse => reponse.is_correct === true);

            userResponses.push({
                question: question.intitule,
                selectedAnswer: selectedAnswer,
                correctAnswer: correctAnswer
            });

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestions(questions, currentQuestionIndex);
                handleNextQuestion(questions)
            } else {
                window.location.href = `responses.html?userResponses=${encodeURIComponent(JSON.stringify(userResponses))}&questionCount=${questions.length}`;
            }
        });
    });
}

export { handleNextQuestion }; // Ajout de l'exportation de la fonction handleNextQuestion