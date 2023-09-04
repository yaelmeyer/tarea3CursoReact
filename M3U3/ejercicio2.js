const numeros = prompt('ingrese numeros separados por coma...');

let array = numeros.split(",");

//paso a tipo numerico
for (let cont = 0; cont < array.length; cont++)
    array[cont] = parseInt(array[cont])

let mayor = [array[0]];

//busco cual es el mayor
for(let cont = 1; cont < array.length;cont ++)
    if(array[cont] > mayor)
        mayor = array[cont]

console.log(mayor);