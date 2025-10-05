const Nota1 = 4.5;
const Nota2 = 3.8;
const Nota3 = 2.9;
const Nota4 = 4.0;

let sumatoria = Math.floor(Nota1 + Nota2 + Nota3 + Nota4);// Calcula sumatorio de las 4 notas
let promedio = sumatoria / 4; //calcula el promedio de las 4 notas

console.log("La sumatoria de las notas es:" + sumatoria)
console.log("El promedio de las notas es:" + promedio.toFixed(1))

let resultadoperacion = (Nota1 + Nota2)*(Nota3 + Nota4)/2 //Calcular la operacion del indexo 3 donde se nos pide resolverla
console.log(resultadoperacion.toFixed(3))


//(4,5 + 3,8) * (2,9 + 4,0) / 2
//(8,3) * (6,9) / 2
//57,7 / 2
// 28,635