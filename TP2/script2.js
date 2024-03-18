function calculer() {
  var num1 = parseInt(document.getElementById("number1_1").value);
  var num2 = parseInt(document.getElementById("number1_2").value);
  var result = num1 + num2;
  document.getElementById("result1").textContent = result;
}

function permuter() {
  var valeur1 = document.getElementById("valeur2_1").value;
  var valeur2 = document.getElementById("valeur2_2").value;
  document.getElementById("valeur2_1").value = valeur2;
  document.getElementById("valeur2_2").value = valeur1;
}

function operation() {
  var mon_operation = document.getElementById("operation3").value;

  if (mon_operation === "") {
    alert("Veuillez choisir une opération.");
  } else {
    var num1 = document.getElementById("number3_1").value;
    var num2 = document.getElementById("number3_2").value;
    document.getElementById("result3").textContent = eval(
      num1 + mon_operation + num2
    );
  }
}

function faireExo4() {
  var saisie = prompt("Entrez trois nombres séparés par un espace:");
  var nombres = saisie.split(" ");

  if (
    nombres.length !== 3 ||
    isNaN(nombres[0]) ||
    isNaN(nombres[1]) ||
    isNaN(nombres[2])
  ) {
    document.getElementById("result4").innerHTML =
      "Veuillez saisir trois nombres valides séparés par un espace.";
    return;
  }

  var nombre1 = parseFloat(nombres[0]);
  var nombre2 = parseFloat(nombres[1]);
  var nombre3 = parseFloat(nombres[2]);

  if (nombre1 === nombre2 && nombre2 === nombre3) {
    document.getElementById("result4").innerHTML =
      "Les trois variables sont identiques.";
  } else if (
    nombre1 === nombre2 ||
    nombre1 === nombre3 ||
    nombre2 === nombre3
  ) {
    document.getElementById("result4").innerHTML =
      "Deux des variables sont de valeurs égales.";
  } else {
    document.getElementById("result4").innerHTML =
      "Les trois variables sont différentes.";
  }
}

function faireExo5() {
  var prixHT = prompt("Entrez le prix HT :");

  if (
    prixHT === null ||
    prixHT === "" ||
    isNaN(prixHT) ||
    parseFloat(prixHT) < 0
  ) {
    document.body.innerText = "Prix HT invalide.";
    return;
  }

  prixHT = parseFloat(prixHT);

  var tauxTVA = prompt("Entrez le taux de TVA en pourcentage :");

  if (
    tauxTVA === null ||
    tauxTVA === "" ||
    isNaN(tauxTVA) ||
    parseFloat(tauxTVA) < 0
  ) {
    document.body.innerText = "Taux de TVA invalide.";
    return;
  }

  var prixTTC = prixHT * (1 + parseFloat(tauxTVA) / 100);

  document.body.innerText = "Le prix TTC est : " + prixTTC + " DHS";
}

function afficherEmail(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var objet = document.getElementById("object").value;
  var corps = document.getElementById("corps").value;

  var message =
    "Sender: " +
    email +
    "<br>" +
    "Objet: " +
    objet +
    "<br>" +
    "Corps de l'email: " +
    corps;

  document.getElementById("result6").innerHTML = message;
}

// Exercice 7 :

// Partie 1:
document.getElementById("lien").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Redirection interdite");
});

// Partie 2:
document.getElementById("divMenu").addEventListener("click", function () {
  var menu = document.getElementById("menu");
    menu.style.display = "block";

});


document.getElementById("menu").addEventListener("mouseleave", function () {
  this.style.display = "none";
});
