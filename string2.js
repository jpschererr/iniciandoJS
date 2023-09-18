frase = String(prompt("Digite uma frase qualquer"))

const frasemaiuscula = frase.toUpperCase();

const linguadoi = frasemaiuscula.replaceALL("O", "I");

console.log((linguadoi), (frase.length))