import { getThemes, getQuestions } from "./api.js";
import { displayThemes, displayQuestions } from "./index-display.js";

// Fonction pour gérer le clic sur un thème
const handleThemeClick = (theme) => {
    const questionRange = document.getElementById("question-range");
    const questionCount = questionRange.value;

    const url = `/api/themes/${theme.id}/${questionCount}/questions`;
    window.location.href = url; // Redirection vers la nouvelle page
};

getThemes()
    .then((result) => displayThemes(result, handleThemeClick))
    .catch((error) => console.log(error));

// Mise à jour du nombre de questions sélectionné
const selectedCount = document.getElementById("selected-count");
const questionRange = document.getElementById("question-range");

questionRange.addEventListener("input", () => {
    const count = questionRange.value;
    selectedCount.textContent = count;
});

// Récupérer l'ID du thème et le nombre de questions depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const themeId = urlParams.get("id");
const questionCount = urlParams.get("count");

// Récupérer les questions depuis l'API
getQuestions(themeId, questionCount)
    .then((result) => displayQuestions(result))
    .catch((error) => console.log(error));