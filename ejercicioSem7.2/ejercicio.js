`use strict`

let multiplicador = parseInt(prompt("Ingresar primer valor:"));
let multiplicando = parseInt(prompt("Ingresar segundo valor:"));

function multiplicar(multiplicador , multiplicando){
    let suma = 0;
    for (let i=0; i < multiplicador ; i++){
        suma = suma + multiplicando;
    }
    return suma;
}

let resultado = multiplicar(multiplicador,multiplicando);
alert(resultado);