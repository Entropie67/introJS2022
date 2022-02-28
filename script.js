
console.log("Bonjour, je suis un message");
document.write("ICI");

// Syntaxe pour une simple boucle
for (let i=0; i<10; i++){
    console.log(i);
}

// Syntaxe pour une condition
let age = 12;
if (age <= 18){
    console.log("OK");
}else {
    console.log("Trop vieux !");
}

// Ajout d'un paragrpahe
let bloc = document.querySelector("#main");
bloc.innerHTML = "<p>paragraphe</p>";

// ajout de plusieurs paragraphes avec une boucle
let blocBoucle = document.querySelector("#main");
for (let i=0; i<10; i++){
    bloc.innerHTML += `<p>paragraphe numéro ${i}</p>`;
}
// Changer du style en js
bloc.style.color = "red";

let identification = document.querySelector("#connexion");
identification.addEventListener("click", (evt => {
    alert("coucou");
}));