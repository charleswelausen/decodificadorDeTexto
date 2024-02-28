let textoOriginal = document.getElementById('input');
let textoCriptografado = document.getElementById('output');

let outputButton = document.querySelector('#output-button');
let imgText = document.querySelector('#imagem-texto');

let textoCopiado = '';

function criptografar() {
    let texto = textoOriginal.value;
    let cripto = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    
    textoCopiado = document.getElementById('output').innerHTML = cripto;

    outputButton.style.display="flex";
    imgText.style.display="none";
    textoOriginal.style.opacity="0";
};  

function descriptografar() {
    let texto = textoOriginal.value;
    let descripto = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, "a").replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    
    textoCopiado = document.getElementById('output').innerHTML = descripto;

    outputButton.style.display="flex";
    imgText.style.display="none";
    textoOriginal.style.opacity="0";

};

function copiar() {
    outputButton.style.display="none";
    imgText.style.display="flex";
    textoOriginal.style.opacity="1";

    navigator.clipboard.writeText(textoCopiado);

    alert('Texto copiado.'); 
    textoOriginal.value = '';
};