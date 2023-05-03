// Utilisation de l'API json placeholder

// fetch renvoie une promesse
// - si tenue : le resultat (json)
// - si pas tenue : error



import {getThemes} from "./api.js";
import {displayThemes} from "./index-display.js";


getThemes()
    .then(result => displayThemes(result))
    .catch(error => console.log(error))

