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
    document.getElementById("result3").textContent = eval(num1+mon_operation+num2);
  }
}
