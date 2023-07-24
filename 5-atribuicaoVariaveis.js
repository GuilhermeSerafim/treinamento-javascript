console.log("Trabalhando com atribuição de variaveis");

const idade = 29;
let primeiroNome = "Ricardo";
const sobrenome = "Bugan"

//console.log(nome + "" + sobrenome);
console.log(primeiroNome, sobrenome);

//Interpolação de variaveis - Maneira mais legivel
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//O let varia e o const é constante
primeiroNome = primeiroNome + sobrenome;
console.log(primeiroNome);
nome = 2;
console.log(primeiroNome);

//No geral, se você conseguir manter o uso do const nas suas variaveis, melhor ainda
const idade2 = 29;
const primeiroNome2 = "Guilher";
const sobrenome2 = "Serafim"
const nomeCompleto = primeiroNome2 + sobrenome2;
console.log(nomeCompleto);

//Mas temos cenarios que o let é comum
let contador = 0;
/*laço de repetição*/ contador = contador + 1;

//Entendendo como funciona mais o let
let idade3;
idade3 = 27;
idade3 = idade3 + 1;
console.log(idade3)