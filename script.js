let textoOriginal = document.querySelector('textarea');
let textoCriptografado = document.getElementById('paragrafo');

let paraBut = document.querySelector('#paragrafo-buton');
let imgText = document.querySelector('#imagem-texto');

let textoCopiado = '';

function criptografar() {
    let texto = textoOriginal.value;
    let cripto = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    
    textoCopiado = document.getElementById('paragrafo').innerHTML = cripto;

    paraBut.style.display="flex";
    imgText.style.display="none";
    textoOriginal.style.display="none";
};  

function descriptografar() {
    let texto = textoOriginal.value;
    let descripto = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, "a").replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    
    textoCopiado = document.getElementById('paragrafo').innerHTML = descripto;

    paraBut.style.display="flex";
    imgText.style.display="none";
    textoOriginal.style.display="none";
};

function copiar() {
    paraBut.style.display="none";
    imgText.style.display="flex";
    textoOriginal.style.display="flex";

    navigator.clipboard.writeText(textoCopiado);

    alert('Texto copiado'); 
};