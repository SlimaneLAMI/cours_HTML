// DOM : Document Object Model

// Utilise par les scripts pour modifier un document HTML en
// ajoutant un noeud
// modifiant un autre
// remplacant un premier par un deuxi`eme
// supprimant un autre

// selon l’identifiant
var container = document.getElementById("container");

//Recuperer le contenu d'un element HTML (y compris les balises)
console.log(container.innerHTML);
//Recuperer le contenu d'un element HTML (sans les balises)
console.log(container.textContent);

// selon le nom de la balise
var paragraphes = document.getElementsByTagName("p");
for (let par of paragraphes) {
    console.log(par.innerHTML);
}

// selon le nom de la balise
var paragraphes = container.getElementsByTagName("p");
for (let par of paragraphes) {
    console.log(par.innerHTML);
}

// selon la valeur de l'attribut class
var bleus= document.getElementsByClassName("blue");
for (let bleu of bleus) {
    console.log(bleu.innerHTML);
}

// selon la valeur de l'attribut name
var parConteneurs = document.getElementsByName("parConteneur");
for (let par of parConteneurs) {
    console.log(par.innerHTML);
}

//Recuperer tous les element selon un selecteur CSS 3
var pbleus = document.querySelectorAll("p.blue");
for (let bleu of pbleus) {
    console.log(bleu.innerHTML);
}

//Recuperer le 1er element selon un selecteur CSS 3
var pbleu = document.querySelector("p.blue");
console.log(pbleu.innerHTML);

// Recuperer l’attribut d’un element HTML
var lien = document.querySelector("a");
var href = lien.getAttribute('href');
console.log(href);

// Modifier l’attribut d’un element HTML
lien.setAttribute('href', 'https://www.w3schools.com');
console.log(lien);

// Suppression de l'attribut d'un element html
lien.removeAttribute('href');

//Recuperer la classe d'un element HTML
var container = document.getElementById('container');
console.log(container.className);

//Modifier la classe d'un element HTML
container.className = "blue"
console.log(container.className);

//Ajouter une nouvelle classe a un element HTML
container.className += " size"
console.log(container.className);

//Recuperer la liste des classes d'un element HTML
var list = container.classList;
console.log(list);

//Ajouter une ou plusieurs clases à la liste de classes
list.add('back','weight');
console.log(list);

//Supprimer une classe
list.remove('weight');
console.log(list);

//Modifier le contenu d'un element HTML
var container = document.getElementById('container');
container.innerHTML += "<p> Hello </p>";
console.log(container.innerHTML);

//Recuperer le parent d'un element HTML (l'objet)
var parent = container.parentNode;
console.log(parent);

//afficher le parent d'un element HTML (le nom)
console.log(parent.nodeName);

//Recuperer le premier element fils d'une element HTML
var premierFils = container.firstElementChild;
console.log(premierFils.nodeName);

//Recuperer le dernier element fils d'une element HTML
var dernierFils = container.lastElementChild;
console.log(dernierFils.nodeName);

//Recuperer le premier fils (element, texte ou autre) d'une element HTML
var premierFils = container.firstChild;
console.log(premierFils.nodeName);
console.log(premierFils);

//Recuperer le dernier fils (element, texte ou autre) d'une element HTML
var dernierFils = container.lastChild;
console.log(dernierFils.nodeName);


function myFunction(){
    var x = document.getElementById("myText").value;
    document.getElementById("demo").textContent = x;
}

