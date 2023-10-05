import { Luta } from "./Batalha";
import {Personagem, Oponente} from "./Personagem";
import { Bulbasaur, Charmander, Squirtle } from "./Pokemon";
const teclado = require("prompt-sync")();

export const personagem: Personagem = new Personagem();
export const oponente: Oponente = new Oponente();
let option: number;

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.clear();
console.log(` 
  Bem vindos ao Pokemon!

+----------------------+
|   Escolha seu Nome   |
|    _____________     |
+----------------------+`);
option = teclado("Escolha seu Nome: ");

while (option.toString().length < 3) {
  console.log("Nome Inválido");
  option = teclado("Escolha seu Nome: ");
}
console.clear();
personagem.nome = option.toString();

//----------------------------------------------
// Escolha do Pokemon Inicial

console.log(`\nPrazer em conhece-lo ${personagem.nome}!, Agora você tera 3 Opções de Pokemons Iniciais`);
console.log("Deves escolher com qual irá iniciar a sua jornada!");

console.log(`
+----------Pokemon!----------+
| 1.Charmander (Fogo)        |
|                            |
| 2.Squirtle (Água)          |
|                            |
| 3.Bulbasaur (Planta)       |
+----------------------------+`)

option = +teclado("Numero Selecionado: ");

while (option < 1 || option > 3) {
  console.log("Opção Inválida, Por favor escolha uma das 3 opções!");
  option = +teclado("Escolha seu Inicial: ");
}

switch (option) {
  case 1:
    personagem.pokemon = new Charmander();
    oponente.pokemon = new Bulbasaur()
    oponente.nome = "Gary";
    break;

  case 2:
    personagem.pokemon = new Squirtle();
    oponente.pokemon = new Charmander()
    oponente.nome = "Jesse";
    break;

  case 3:
    personagem.pokemon = new Bulbasaur();
    oponente.pokemon = new Squirtle()
    oponente.nome = "James";
    break;
}

//----------------------------------------------
// Inicio da Batalha

Luta.batalhar();
Luta.atacar();


