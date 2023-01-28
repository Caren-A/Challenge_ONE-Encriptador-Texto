//obtencion de valores en elementos del html por su Id, guardados en variables
const textInput = document.getElementById("container__input");
const textOutput = document.getElementById("container__output");
const btnDesc = document.getElementById("botonDesencriptar");
const btnEnc = document.getElementById("botonEncriptar");
const btnCopy = document.getElementById("botonCopiar");

// funcion con palabras que se reemplazan al Encriptar + chequeo
const dicEncripta = texto => {

    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
        .replace( /[^-A-Za-z0-9]+/g, ' ' );
}

// funcion con palabras que se reemplazan al Desencriptar
const dicDesencripta = texto => {

    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
        .replace( /[^-A-Za-z0-9]+/g, ' ' );
}


//Eventos que se disparan al hacer click para los botones desencriptar y encriptar
btnEnc.addEventListener("click", () => {
    
    textOutput.value = dicEncripta(textInput.value.toLowerCase());
    textOutput.style.backgroundImage = "none";
    btnCopy.style = "center";
    
})

btnDesc.addEventListener("click", () => {
    textOutput.value = dicDesencripta(textInput.value.toLowerCase());
})

//funcion que toma el valor que hay en el documento y lo copia en el Portapapeles
function funcionCopiar() {

    const texto = document.querySelector("#container__output");
    navigator.clipboard.writeText(texto.value);
    
}