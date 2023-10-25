import { Batalha, rodada } from "./Batalha";
import { Personagem, Oponente } from "./Personagem";
import { Bulbasaur, Charmander, Squirtle } from "./Pokemon";
import { Error, Funcionalidades, estetica } from "./Utilitario";

const teclado = require("prompt-sync")();

export const personagem: Personagem = new Personagem();
export const oponente: Oponente = new Oponente();
export const batalha: Batalha = new Batalha();

let option: number;

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.log(estetica.nome());
option = teclado(" ☛ Digite ele aqui: ");

while (option.toString().length < 3) {
  console.log(Error.verificarNome());
  option = teclado("☛ Digite ele aqui: ");
}
personagem.nome = option.toString();

//----------------------------------------------
// Escolha do Pokemon Inicial

console.log(Funcionalidades.SelecaoPokemon());

//----------------------------------------------
//Batalha

console.log(batalha.Iniciar());
option = +teclado("Aperte Enter para continuar ... ");
console.log(typeof option);

while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
  console.log(estetica.ataques());
  option = +teclado("Movimento Escolhido ☛ ");
  batalha.atacar(Number(option));
}

if (oponente.pokemon.vida <= 0) {
  console.log(estetica.vitoria());
} else if (personagem.pokemon.vida <= 0) {
  console.log(estetica.derrota());
}

//------------------------------------------------

option = +teclado("Passar o turno para o oponente, clique enter ... ");

while (personagem.pokemon.vida > 0) {
  console.log(estetica.menuOpcoes());

  option = +teclado("Opção Selecionada: ");
  while (option < 1 || option > 3 || isNaN(option)) {
    console.log(Error.VerificaSelecao());
    option = +teclado("☛ Escolha seu Inicial: ");
  }

  switch (option) {
    case 1:
      oponente.pokemon.vida = 1;

      console.log(batalha.Iniciar());
      option = +teclado("Aperte Enter para continuar ... ");

      while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
        console.log(estetica.ataques());
        option = +teclado("Movimento Escolhido ☛ ");
        batalha.atacar(option);
      }

      if (oponente.pokemon.vida <= 0) {
        console.log(estetica.vitoria());
      } else if (personagem.pokemon.vida <= 0) {
        console.log(estetica.derrota());
      }
      break;

    case 2:
      console.clear();
      console.log(Funcionalidades.SelecaoPokemon());
      break;

    case 3:
      personagem.pokemon.vida = 0;
      console.clear();
      console.log(estetica.finalizacao());
      break;
  }
}
