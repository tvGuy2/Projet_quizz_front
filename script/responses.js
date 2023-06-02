const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const encodedUserResponses = urlParams.get('userResponses');
const userResponses = JSON.parse(decodeURIComponent(encodedUserResponses));
const questionCount = parseInt(urlParams.get('questionCount'));


userResponses.forEach(response => {
    const questionElement = document.createElement('p');
    questionElement.textContent = `Question: ${response.question}`;
    questionElement.classList.add('space');


    const selectedAnswerElement = document.createElement('p');
    selectedAnswerElement.textContent = `Réponse selectionnée: `;
    const selectedAnswerText = document.createElement('span');
    selectedAnswerText.textContent = response.selectedAnswer.intitule;
    if (response.selectedAnswer.is_correct) {
        selectedAnswerText.classList.add('correct-answer');
    } else {
        selectedAnswerText.classList.add('wrong-answer');
    }
    selectedAnswerElement.appendChild(selectedAnswerText);

    const correctAnswerElement = document.createElement('p');
    correctAnswerElement.textContent = `Réponse correct: ${response.correctAnswer.intitule}`;

    document.body.appendChild(questionElement);
    document.body.appendChild(selectedAnswerElement);
    document.body.appendChild(correctAnswerElement);
});

const score = calculateScore(userResponses);
const displayScore = document.createElement('span');
displayScore.textContent = `score = ${score}/${questionCount}`;
displayScore.classList.add('score-button');

document.body.appendChild(displayScore);

function calculateScore(userResponses) {
    let score = 0;
    userResponses.forEach((response) => {
        if (response.selectedAnswer.is_correct === true) {
            score++;
        }
    });
    return score;
}
