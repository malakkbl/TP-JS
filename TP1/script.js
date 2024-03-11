// Exercice 01 :
const my_input1 = prompt("EXERCICE 01 : Entrez une chaîne de caractères :");
const my_div1 = document.getElementById("ex1");
const my_paragraph1 = document.createElement("p");
const my_text1 = document.createTextNode("EXERCICE 01 : Vous avez entré : " + my_input1);
my_paragraph1.appendChild(my_text1);
my_div1.appendChild(my_paragraph1);

// Exercice 02 :
var a = 5;
var b = 7;

var result = a + b;
alert("EXERCICE 02 : " + a + " + " + b + " = " + result);

// Exercice 03 :
var budget = 1000;
var achats = 800;

if (budget >= achats) {
  alert("EXERCICE 03 : Le budget permet de payer les achats.");
} else {
  alert("EXERCICE 03 : Le budget ne permet pas de payer les achats.");
}

// Exercice 04 :
var prixHT = prompt(" EXERCICE 04 : Entrez le prix hors taxes :");
var prixTTC = parseFloat(prixHT) * 1.2;

document.body.innerText += "EXERCICE 04 :  Le prix TTC : " + prixTTC + " DHS";

// Exercice 05 :
var prixHT = prompt("Entrez le prix hors taxes en DHS :");

if (isNaN(parseFloat(prixHT))) {
  alert("Le prix hors taxes doit être un nombre valide.");
} else {
  var tva = prompt("Entrez le taux de la TVA en pourcentage :");
  if (isNaN(parseFloat(tva))) {
    alert("Le taux de TVA doit être un nombre valide.");
  } else {
    var prixTTC = parseFloat(prixHT) * (1 + parseFloat(tva) / 100);
    document.body.innerText +=
      " EXERCICE 05 : Le prix TTC est de " + prixTTC + " DHS";
  }
}
