let ville = "Paris";
recevoirTempérature(ville);

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
    ville = prompt("Quelle ville souhaitez-vous voir ?");
    recevoirTempérature(ville);
});

function recevoirTempérature(ville) {
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=81c6e55d648ca1710952284c96a6bc9a&units=metric";

let requête = new XMLHttpRequest();
requête.open("GET", url);
requête.responseType = "json";
requête.send();

requête.onload = function() {
    if (requête.readyState === XMLHttpRequest.DONE) {
        if (requête.status === 200) {
            let réponse = requête.response;
            let température = réponse.main.temp;
            let ville = réponse.name;
            document.querySelector(".température_label").textContent = température;
            document.querySelector("#ville").textContent = ville;
        } else {
            alert("Un problème est intervenu, merci de revenir plus tard.");
        }
    }
}};