// Fonction permettant d'afficher des utilisateurs
const displayThemes = (themes) => {
    const tbody = document.querySelector("tbody")
    // Créer une ligne dans la table pour chaque utilisateur

    themes.forEach( theme => {
        const tr = document.createElement("tr")
        const tdThemeLibelle = document.createElement("td")
        tdThemeLibelle.textContent =theme.libelle
        tr.appendChild(tdThemeLibelle)
        const tdThemeImage = document.createElement("td")
        tdThemeImage.textContent =theme.image
        tr.appendChild(tdThemeImage)
        tbody.appendChild(tr)
    })
}
export {displayThemes}