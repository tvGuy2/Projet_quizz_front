// Fonction permettant d'afficher les thèmes
const displayThemes = (themes, onClick) => {
    const themesContainer = document.getElementById("themes");

    // Créer un bouton pour chaque thème
    themes.forEach(theme => {
        const button = document.createElement("button");
        button.textContent = theme.libelle;

        // Ajouter un événement de clic sur le bouton
        button.addEventListener("click", () => {
            onClick(theme);
        });

        themesContainer.appendChild(button);
    });
};


function displayQuestions(questions, currentQuestionIndex) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    // Vérifier si l'index de la question est valide
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];

        // Créer des éléments HTML pour chaque question et réponse
        const questionElement = document.createElement('h3');
        questionElement.textContent = question.intitule;

        const answersContainer = document.createElement('div');
        answersContainer.classList.add('answers');

        question.reponses.forEach(reponse => {
            const answerButton = document.createElement('button');
            answerButton.type = 'button';
            answerButton.classList.add('btn', 'btn-primary', 'answer-button');
            answerButton.textContent = reponse.intitule;
            answerButton.id = reponse.id;

            answersContainer.appendChild(answerButton);
        });

        const questionWrapper = document.createElement('div');
        questionWrapper.classList.add('question');
        questionWrapper.appendChild(questionElement);
        questionWrapper.appendChild(answersContainer);

        // Ajouter les éléments à votre interface utilisateur
        questionContainer.appendChild(questionWrapper);
    }
}



export {displayThemes,displayQuestions,};
