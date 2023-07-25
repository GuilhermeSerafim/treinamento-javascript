console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = true;
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhado == true) {
//     console.log("Está acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("\nPassagem comprada");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não posso vender");
}

console.log("\nListas de destino:\n" + listaDeDestinos);

console.log("Embarque: \n");
if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Pode embarcar");
} else {
    console.log("Não pode embarcar");
}
// //Podemos retornar um valor bollean pelo console
// console.log(idadeComprador >= 18);