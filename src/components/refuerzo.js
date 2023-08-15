//operador terciario
/* let salario = 10000; */
//Decision normal
/* if (salario > 0) {
  console.log("Rico papiiii");
} else {
  console.log("Pobre hp");
} */

/* salario > 0 ? console.log("Saoko papi saokoo") : console.log("Perritaa"); */

//Recorriendo arreglos
let numeros = [1, 3, 5];

numeros.forEach((numero) => {
  /* console.log(numero * 2); */
  console.log(numero * 4);
});
//operador map: devuelve otro arreglo con las posiciones originales
//USAR EL MAP EN REACT ME PERMITE OBTENER LOS INDEX
let nuevoArreglo = numeros.map((numero) => {
  return numero * 4;
});
console.log(numeros);
console.log(nuevoArreglo);
