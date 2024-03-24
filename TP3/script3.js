// Exercice 1 :
function validerForm(event) {
  event.preventDefault();

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
}

function annulerForm() {
  document.getElementById("form").reset();
}

// Exercice 2 :