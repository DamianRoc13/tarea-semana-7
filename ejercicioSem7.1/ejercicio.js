`use strict`

function mostrarEdad(bornYear) {
    let currentyear = 2023;
    alert(`Tu edad es ${currentyear - bornYear}`);
}
let bornYear = parseInt(prompt("Ingresar año de nacimiento:"));
mostrarEdad(bornYear);