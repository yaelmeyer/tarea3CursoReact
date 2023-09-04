//ejercicio 1

const distancia = prompt('ingrese distancia recorrida...');
let transporte = '';

if(distancia > 0 && distancia < 1000){
    transporte = 'pie'
} 
else if(distancia >=1000 && distancia < 10000){
    transporte = 'bicicleta'
}
else if(distancia >= 10000 && distancia < 30000){
    transporte = 'colectivo'
}
else if(distancia >= 30000 && distancia < 100000){
    transporte = 'auto'
}
else {
    transporte = 'avion'
}

console.log('transporte: ', transporte);