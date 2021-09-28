// var numeroUno = prompt("Ingrese un número");
// var numeroDos = prompt("Ingrese otro número");

// // alert(`${numeroUno} + ${numeroDos} es ${numeroUno + numeroDos}`);

// if ((numeroUno !== "") && (numeroDos != "")) {
//     alert(`${numeroUno} + ${numeroDos} es ${(Number(numeroUno) + Number(numeroDos))}`);
// } else {
//     alert("Debe ingresar dos números")
// }

var numeroUno = Number(prompt("Ingrese un número"));
//var numeroDos = Number(prompt("Ingrese otro número"));

// if ((numeroUno !== "") && (numeroDos != "")) {
//     alert(`${numeroUno} + ${numeroDos} es ${numeroUno + numeroDos}`);
// } else {
//     alert("Debe existir un valor")
// }

for (let index = 1; index <= numeroUno; index++) {
    alert(`${numeroUno + index}`);
}   