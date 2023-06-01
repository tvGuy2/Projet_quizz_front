//Fonction qui récupère la liste des Themes
const getThemes = () => {
    return fetch('http://127.0.0.1:8000/api/themes')
        .then(response => {
            // tester si la reponse est correcte
            if (response.ok){
                return response.json()
            }
            throw new Error("Une erreur est survenue. Vérifier votre Endpoint")
        })

}

const getQuestions = (themeId, questionCount) => {
    const url = `/api/themes/${themeId}/${questionCount}/question`;
    return fetch(url)
        .then((response) => {
            // Vérifier si la réponse est valide
            if (response.ok) {
                return response.json();
            }
            throw new Error("Une erreur est survenue. Vérifiez votre endpoint");
        });
};


// Rendre disponnible cette fonction dans d'autres module
export {getThemes}
export {getQuestions}

