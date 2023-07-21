console.log("Trabalhando com atribuição de variaveis");

const idade = 29;
let nome = "Ricardo";
const sobrenome = "Bugan"

//console.log(nome + "" + sobrenome);
console.log(nome, sobrenome);

//Interpolação de variaveis - Maneira mais legivel
console.log(`Meu nome é ${nome} ${sobrenome}`);

//O let varia e o const é constante
nome = nome + sobrenome;
console.log(nome);
nome = 2;
console.log(nome);

//No geral, se você conseguir manter o uso do const nas suas variaveis, melhor ainda
const idade2 = 29;
const nome2 = "Guilher";
const sobrenome2 = "Serafim"
const nomeCompleto = nome2 + sobrenome2;
console.log(nomeCompleto);

//Mas temos cenarios que o let é comum
let contador = 0;
/*laço de repetição*/ contador = contador + 1;