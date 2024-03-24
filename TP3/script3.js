// Exercice 1 :
function validerForm(event) {
  event.preventDefault();
  var form = document.getElementById("form1");
  if (form.checkValidity()) {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("tel").value;
    var langage = document.getElementById("langue").value;
    var comment = document.getElementById("comment").value;

    var message =
      "Nom: " +
      nom +
      "<br>" +
      "Prenom: " +
      prenom +
      "<br>" +
      "Email: " +
      email +
      "<br>" +
      "Telephone: " +
      telephone +
      "<br>" +
      "Langue: " +
      langage +
      "<br>" +
      "Commentaire: " +
      comment;

    document.getElementById("result1").innerHTML = message;
  } else {
    alert("Veuillez remplir tous les champs obligatoires.");
  }
}

function annulerForm() {
  document.getElementById("form").reset();
}

// Exercice 2 :
function generer_tab(event) {
  event.preventDefault();

  var dimensionInput = document.getElementById("dimension");
  var minInput = document.getElementById("min");
  var maxInput = document.getElementById("max");

  var dimension = parseInt(document.getElementById("dimension").value);
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);

  var errorDiv = document.getElementById("error");
  errorDiv.innerHTML = "";

  if (
    isNaN(dimension) ||
    isNaN(min) ||
    isNaN(max) ||
    dimension.toString() !== dimensionInput.value ||
    min.toString() !== minInput.value ||
    max.toString() !== maxInput.value
  ) {
    alert(
      "Veuillez saisir des valeurs numériques entières dans tous les champs."
    );
    return;
  }

  if (min >= max) {
    alert("La valeur minimale doit être inférieure à la valeur maximale.");
    return;
  }

  var tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";

  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  for (var i = 0; i < dimension / 10 + 1; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < Math.min(10, dimension - i * 10); j++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      var td = document.createElement("td");
      td.textContent = randomNumber;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}
