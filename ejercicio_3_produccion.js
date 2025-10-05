const produccionH = 250; //constante produccion / H
const HorasT = 8; //Constante horas trabajadas
const capacidadcajas = 12; // Capacidad / Caja

let totalpiezas = produccionH * HorasT; // Multiplicacion produccion H * HorasT = total piezas
let cajasllenas = Math.floor(totalpiezas/capacidadcajas) // Total de piezas producidas dividido por la capacidad de las cajas = cajas llenas
let piezasobrantes = Math.floor(totalpiezas%capacidadcajas) // El residuo de la division de cajas llenas es igual a las piezas sobrantes

console.log("El total de piezas producidas en una jornada laboral es: " + totalpiezas)
console.log("El total de cajas llenas es:" + cajasllenas)
console.log("El total de piezas sobrantes es" + piezasobrantes)