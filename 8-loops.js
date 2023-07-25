console.log(`\nTrabalhando com listas\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 19;
const estaAcompanhado = false;
const temPassagemComprada = true;
const destino = `Salvador`;

//Podemos armazenar lógicas em variaveis
const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);
//estrutura de repetição

let contador = 0
let destinoExiste = false;
while(contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } else { //n precisa, mas deixei mais explicito
        destinoExiste = false;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

//for
//inicialização, condicional, incremento
// for(let i = 0; i < 3; i++) {
//     if (listaDeDestinos[i] == destino) {
//         destinoExiste = true;
//         break;
//     } else {
//         destinoExiste = false;
//     }
// }