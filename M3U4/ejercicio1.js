let cajaRoja = document.getElementById('rojo')
let cajaAzul = document.getElementById('azul')
let cajaVerde = document.getElementById('verde')

let fondo = document.getElementsByTagName('body')

cajaRoja.addEventListener('click', function(){
    document.body.style.backgroundColor ="red"
})

cajaAzul.addEventListener('click', function(){
    document.body.style.backgroundColor ="blue"
})

cajaVerde.addEventListener('click', function(){
    document.body.style.backgroundColor ="green"
})