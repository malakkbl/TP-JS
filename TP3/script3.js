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

// Exercice 3 :

function add_tab(event) {
  event.preventDefault();

  var code = document.getElementById("code").value;
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var semestre = document.getElementById("semestre").value;
  var module1 = parseInt(document.getElementById("module1").value);
  var module2 = parseInt(document.getElementById("module2").value);
  var module3 = parseInt(document.getElementById("module3").value);
  var module4 = parseInt(document.getElementById("module4").value);
  var module5 = parseInt(document.getElementById("module5").value);
  var module6 = parseInt(document.getElementById("module6").value);

  if (
    !code ||
    !nom ||
    !prenom ||
    !semestre ||
    isNaN(module1) ||
    isNaN(module2) ||
    isNaN(module3) ||
    isNaN(module4) ||
    isNaN(module5) ||
    isNaN(module6)
  ) {
    alert("Veuillez remplir tous les champs avec des valeurs appropriées.");
    return;
  }

  var moyenne = (module1 + module2 + module3 + module4 + module5 + module6) / 6;

  var decision = "";
  var modulesNonValides = 0;
  if (module1 < 12) modulesNonValides++;
  if (module2 < 12) modulesNonValides++;
  if (module3 < 12) modulesNonValides++;
  if (module4 < 12) modulesNonValides++;
  if (module5 < 12) modulesNonValides++;
  if (module6 < 12) modulesNonValides++;

  if (moyenne >= 12 && modulesNonValides < 3) {
    decision = "Validé";
  } else {
    decision = "Échoué";
  }

  // Création de la ligne pour le tableau
  var tableRow = document.createElement("tr");
  var tableData = document.createElement("td");
  tableData.textContent = code;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = nom;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = prenom;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = semestre;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = module1;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = module2;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = module3;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = module4;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = module5;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = module6;
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = moyenne.toFixed(2);
  tableRow.appendChild(tableData);

  tableData = document.createElement("td");
  tableData.textContent = decision;
  tableRow.appendChild(tableData);

  // Ajout de la ligne au tableau
  var tableBody = document.getElementById("studentTableBody");
  tableBody.appendChild(tableRow);
}
