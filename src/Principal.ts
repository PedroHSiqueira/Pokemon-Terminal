import { Batalha } from "./Batalha";
import { Personagem, Oponente } from "./Personagem";
import { Bulbasaur, Charmander, Squirtle } from "./Pokemon";
import { estetica } from "./Utilitario";
const teclado = require("prompt-sync")();

export const personagem: Personagem = new Personagem();
export const oponente: Oponente = new Oponente();
let option: number;

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.clear();
estetica.nome();

option = teclado(" ☛ Digite o seu Nome: ");

while (option.toString().length < 3) {
  console.log("Nome Inválido");
  option = teclado("Escolha seu Nome: ");
}
console.clear();
personagem.nome = option.toString();

//----------------------------------------------
// Escolha do Pokemon Inicial

estetica.apresentacao();
estetica.selecao();

option = +teclado("Opção Selecionada: ");

while (option < 1 || option > 3 || isNaN(option)) {
  console.log("☛ Erro ...Opção Inválida, Por favor escolha uma das 3 opções!");
  option = +teclado("Escolha seu Inicial: ");
}

switch (option) {
  case 1:
    personagem.pokemon = new Charmander();
    oponente.pokemon = new Bulbasaur();
    oponente.nome = "Gary";
    break;

  case 2:
    personagem.pokemon = new Squirtle();
    oponente.pokemon = new Charmander();
    oponente.nome = "Jesse";
    break;

  case 3:
    personagem.pokemon = new Bulbasaur();
    oponente.pokemon = new Squirtle();
    oponente.nome = "James";
    break;
}

//----------------------------------------------
// Inicio da Batalha

Batalha.Iniciar();
Batalha.atacar();
