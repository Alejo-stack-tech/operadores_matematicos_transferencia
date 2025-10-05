const segundos = 7200
// valor de segundos constante requerido

let minutos = segundos / 60
// un minuto equivale a 60 segundos, por ende , se divide la cantidad de segundos en 60 
// para como resultado obtener la cantidad de minutos

let horas =  segundos / 3600

// una hora equivale a 3600 segundos, por ende , se divide la cantidad de segundos en 3600 
// para como resultado obtener la cantidad de horas


let dias = segundos / 86400

// un día equivale a 86400 segundos, por ende , se divide la cantidad de segundos en 86400 
// para como resultado obtener la cantidad de días

alert("7.200 segundos son " + minutos + " minutos, " + horas + " horas y "+ dias.toFixed(2) + " días")