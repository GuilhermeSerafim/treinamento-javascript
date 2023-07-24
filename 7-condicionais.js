console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

idadeComprador = 18;

if(idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);
// //Podemos retornar um valor bollean pelo console
// console.log(idadeComprador >= 18);