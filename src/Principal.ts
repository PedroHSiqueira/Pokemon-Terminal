import Personagem from "./Personagem";
import Oponente from "./Oponente";
const teclado = require("prompt-sync")();

const personagem: Personagem = new Personagem();
const oponente: Oponente = new Oponente();
let option: number;

console.log(`\n+----------------------+`);
console.log("|   Escolha seu Nome   |");
console.log("|    _____________     |");
console.log("+----------------------+\n");
option = teclado("Escolha seu Nome: ");

while (option.toString().length < 3) {
  console.log("Nome Inválido");
  option = teclado("Escolha seu Nome: ");
}

personagem.nome = option.toString();

console.log(`\n+----------Pokemon!----------+`);
console.log("| 1.Charmander (Fogo)        |");
console.log("|                            |");
console.log("| 2.Squirtle (Água)          |");
console.log("|                            |");
console.log("| 3.Bulbasaur (Planta)       |");
console.log("+----------------------------+\n");

option = +teclado("Escolha seu Inicial: ");

while (option < 1 || option > 3) {
  console.log("Opção Inválida");
  option = +teclado("Escolha seu Inicial: ");
}

switch (option) {
  case 1:
    personagem.pokemon.Charmander();
    oponente.pokemon.Bulbasaur();
    break;

  case 2:
    personagem.pokemon.Squirtle();
    oponente.pokemon.Charmander();
    break;

  case 3:
    personagem.pokemon.Bulbasaur();
    oponente.pokemon.Squirtle();
    break;
}

console.log(`\n+----------Pokemon!----------+`);
console.log(`| Parabéns o seu Inicial Foi |`);
console.log("|         Escolhido!         |");
console.log("|                            |");
console.log("| Uma Batalha será iniciada! |");
console.log("+----------------------------+\n");

console.log(`\n+----------Batalha!----------+`);
console.log(`       ${personagem.nome} Vs ${oponente.nome}  `);
console.log(`  (${personagem.pokemon.nome}) Vs (${oponente.pokemon.nome})  `);
console.log("+----------------------------+\n");




