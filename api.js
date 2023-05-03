//Fonction qui récupère la liste des utilisateurs
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

// Rendre disponnible cette fonction dans d'autres module
export {getThemes}
