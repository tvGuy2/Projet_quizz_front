import { getThemes } from "../api/api.js";
import { displayThemes } from "./index-display.js";

// Fonction pour gérer le clic sur un thème
const handleThemeClick = (theme) => {
    const questionRange = document.getElementById("question-range");
    const questionCount = questionRange.value;

    // Stocker les informations dans localStorage
    localStorage.setItem("selectedThemeId", theme.id);
    localStorage.setItem("selectedQuestionCount", questionCount);

    // Redirection vers la nouvelle page
    window.location.href = "../public/question.html";
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