const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const encodedUserResponses = urlParams.get('userResponses');
const userResponses = JSON.parse(decodeURIComponent(encodedUserResponses));

const score = calculateScore(userResponses)
const displayScore = document.createElement('p')
displayScore.textContent = `score = ${score}`
document.body.appendChild(displayScore)

userResponses.forEach(response => {
    const questionElement = document.createElement('p')
    questionElement.textContent = `Question: ${response.question}`

    const selectedAnswerElement = document.createElement('p')
    selectedAnswerElement.textContent = `Réponse selectionnée: ${response.selectedAnswer.intitule}`

    const correctAnswerElement = document.createElement('p')
    correctAnswerElement.textContent = `Réponse correct: ${response.correctAnswer.intitule}`

    document.body.appendChild(questionElement);
    document.body.appendChild(selectedAnswerElement);
    document.body.appendChild(correctAnswerElement);
});

function calculateScore(userResponses) {
    let score = 0;
    userResponses.forEach((response) => {
        if (response.selectedAnswer.is_correct === true) {
            score++;
        }
    });
    return score;
}
