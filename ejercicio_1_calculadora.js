



const transporte = 120000
const alojamiento = 200000
const alimentación = 150000
const personas = 4
// valores constantes requeridos

let aporte = 130000

// valor variable del aporte

let total = transporte + alojamiento + alimentación

// suma para conseguir el total de costos

let total_dividido = total/personas 

// división para encontrar cuánto debe pagarse por persona

let sobrante = aporte * personas - total 
// multiplicación y sustracción para encontrar el sobrante 

alert("El total de costos es: " + total + " lo que debe pagar cada uno es: "
     + total_dividido + " con el aporte que hicieron sobran: " + sobrante )