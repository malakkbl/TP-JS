function runExercise1() {
  const my_input1 = prompt("Entrez une chaîne de caractères :");
  const my_div1 = document.getElementById("ex1");
  const my_paragraph1 = document.createElement("p");
  const my_text1 = document.createTextNode(
    "Vous avez entré : " + my_input1
  );
  my_paragraph1.appendChild(my_text1);
  my_div1.appendChild(my_paragraph1);
}

function runExercise2() {
  var a = 5;
  var b = 7;

  var result = a + b;
  alert("EXERCICE 02 : " + a + " + " + b + " = " + result);
}

function runExercise3() {
  var budget = 1000;
  var achats = 800;

  if (budget >= achats) {
    alert("EXERCICE 03 : Le budget permet de payer les achats.");
  } else {
    alert("EXERCICE 03 : Le budget ne permet pas de payer les achats.");
  }
}

function runExercise4() {
  var prixHT4 = prompt(" EXERCICE 04 : Entrez le prix hors taxes :");
  var prixTTC4 = parseFloat(prixHT4) * 1.2;

  document.body.innerText =
    "\n\nEXERCICE 04 :  \nLe prix HT : " +
    prixHT4 +
    " DHS" +
    "\nTVA : " +
    "20%" +
    "\nLe prix TTC : " +
    prixTTC4 +
    "DHS";
}

function runExercise5() {
  var prixHT5 = prompt("Entrez le prix hors taxes en DHS :");

  if (isNaN(parseFloat(prixHT5))) {
    alert("Le prix hors taxes doit être un nombre valide.");
  } else {
    var tva = prompt("Entrez le taux de la TVA en pourcentage :");
    if (isNaN(parseFloat(tva)) || parseFloat(tva) >= 100) {
      alert("Le taux de TVA doit être un nombre valide.");
    } else {
      var prixTTC5 = parseFloat(prixHT5) * (1 + parseFloat(tva) / 100);
      document.body.innerText =
        "\n\nEXERCICE 05 :  \nLe prix HT : " +
        prixHT5 +
        " DHS" +
        "\nTVA : " +
        tva +
        "%" +
        "\nLe prix TTC : " +
        prixTTC5 +
        "DHS";
    }
  }
}

function runExercise6() {
  var prixHT6 = prompt("Entrez le prix hors taxes en DHS :");
  var tva6 = prompt("Entrez le taux de la TVA en pourcentage :");
  var prixTTC6 = parseFloat(prixHT6) * (1 + parseFloat(tva6) / 100);
  var style = prixTTC6 > 100 ? "color: red;" : "color: green;";
  document.body.innerHTML =
    "<p style='" + style + "'>Le prix TTC est de " + prixTTC6 + " DHS</p>";
}

function runExercise7() {
  var cocktailElement = document.getElementById("cocktail");
  cocktailElement.innerText = "Long Island Iced Tea";
}

function runExercise8() {}

function runExercise9() {}

function runExercise10() {}

function runExercise11() {}

function runExercise12() {}

