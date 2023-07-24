console.log(`Trabalhando com listas`);
/*Forma Errada
const salvador = `Salvador`;
const saoPaulo = `Sao Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log(salvador, saoPaulo, rioDeJaneiro); */

//Forma Certa
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)
console.log(listaDeDestinos);

//Adicionando um elemento a lista
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);

/*Quando declaramos como const não podemos alterar o tipo de uma lista, por ex:
listaDeDestinos = 2;
 */

//2 - Qual elemento da lista | 1 - Quantos elementos da lista?
listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);