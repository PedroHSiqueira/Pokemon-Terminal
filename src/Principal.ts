import { Personagem } from "./Personagem";

const promp = require("prompt-sync")();
const personagem: Personagem = new Personagem();
let option: number;

console.log(`+----------------------+`);
console.log("|   Escolha seu Nome   |");
console.log("|    _____________     |");
console.log("+----------------------+");
option = promp("Escolha seu Nome: ");

while (option.toString().length < 3) {
  console.log("Nome Inválido");
  option = promp("Escolha seu Nome: ");
}

personagem.nome = option.toString();

console.log(`+----------Pokemon!----------+`);
console.log("|1.Charmander                |");
console.log("|                            |");
console.log("|2.Squirtle                  |");
console.log("|                            |");
console.log("|3.Bulbasaur                 |");
console.log("+----------------------------+");

option = +promp("Escolha seu Inicial: ");

while (option < 1 || option > 3) {
  console.log("Opção Inválida");
  option = +promp("Escolha seu Inicial: ");
}

switch (option) {
  case 1:
    personagem.pokemon.Charmander();
    break;

  case 2:
    personagem.pokemon.Squirtle();
    break;

  case 3:
    personagem.pokemon.Bulbasaur();
    break;

  default:
    break;
}

console.log(`+----------Pokemon!----------+`);
console.log(`| Parabéns o seu Inicial Foi |`);
console.log("|         Escolhido!         |");
console.log("+----------------------------+");
