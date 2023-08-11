//"use strict";
//presentation de l'objet document
/* console.log(document);
console.log(typeof document);

console.log(document.head);
console.log(document.body);

console.log(document.body.childNodes[1]); */

//Parcourir le DOM

/* let h1Elt = document.getElementsByTagName("h1");
let loveClassElt = document.getElementsByClassName("love");
let topicId = document.getElementById("topic");
let querySelec = document.querySelector("p");
let querySelecAll = document.querySelectorAll("p");

console.log(h1Elt);
console.log(loveClassElt);
console.log(topicId);
console.log(querySelec);
console.log(querySelecAll); */

//Structure et modification du DOM
/* let ulElt = document.getElementsByTagName("ul");
let liElt = document.querySelector("li"); */

//console.log(ulElt.parentNode);
//text.content et innerHTML
/* console.log(liElt.parentNode);
console.log(liElt.textContent);
console.log(liElt.innerHTML);
console.log(ulElt[0].innerHTML);
console.log(document.getElementsByTagName("li")[0]);
liElt.textContent = "Hedranawoe";

let firstPElt = document.querySelector("p");
let myUl = document.querySelector("ul");
myUl.innerHTML = "";

firstPElt.textContent = "Hollllaaaaa!!!!!!"; */

/* let ulElt = document.querySelector("ul");

ulElt.style.color = "magenta";
ulElt.style.fontSize = "32px";
let sectionElt = document.querySelector("section");
let pElt = document.querySelector("p");
pElt.style.backgroundColor = "red"; */
//creation d'element

/* 3 etapes:
-créer l'element
-créer le contenu de l'élément
-Définir un attribut
-Insérer l'élément */
/* let articleElt = document.createElement("article");
articleElt.textContent = "Je suis un article crée";
sectionElt.appendChild(articleElt);
let h1Elt = document.createElement("h1");
h1Elt.textContent = "Fuck you";
articleElt.appendChild(h1Elt);

ulElt.removeChild(document.querySelector("li"));

let styleCss = getComputedStyle(ulElt);

styleCss.backgroundColor = "black";

console.log(styleCss.height, styleCss.width);
 */

//Intro Manipulation des evenements

let myBtn = document.querySelector(".btn");
let ulElt = document.querySelector("ul");

myBtn.style.backgroundColor = "white";
myBtn.style.color = "blue";
myBtn.style.border = "1px solid blue";
myBtn.style.width = "16vh";
myBtn.style.height = "4vh";
myBtn.style.borderRadius = "5vh";
myBtn.style.cursor = "pointer";
myBtn.classList.add("btn");
myBtn.classList.add("");

let sayHi = (e) => {
  console.log("HI!!!!!!!!");
};
myBtn.addEventListener("click", (e) => {
  console.log("You clicked me");
  ulElt.style.color = "red";
});
