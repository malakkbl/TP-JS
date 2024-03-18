function calculer() {
    var num1 = parseInt(document.getElementById("number1_1").value);
    var num2 = parseInt(document.getElementById("number1_2").value);
    var result = num1 + num2;
    document.getElementById("result1").textContent = result;
  }

function permuter(){
    var valeur1=document.getElementById("valeur2_1").value;
    var valeur2=document.getElementById("valeur2_2").value;
    document.getElementById("valeur2_1").value = valeur2;
    document.getElementById("valeur2_2").value = valeur1;
}