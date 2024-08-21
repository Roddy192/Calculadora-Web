//function soma(num1, num2) {
    //return num1 + num2;
//}

//function subtracao(num1, num2) {
   // return num1 - num2;
//}

//function multiplicacao(num1, num2) {
    //return num1 * num2;
//}

//function divisao(num1, num2) {
   // return num1 / num2;
//}



//function resultado (num1, operador, num2) {
   // var result = operador(num1, num2);
  // console.log(result);
//}

const display = document.getElementById('display');

function add_display(input){
    display.value += input;
}

function clear_display() {
    display.value = "";
}

function calcular() {
    try{
        display.value = eval(display.value);
    }

    catch (error){
        display.value = "Algo deu errado!"

    }
    
    
}

