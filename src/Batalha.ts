import { oponente, personagem } from "./Principal";
import { estetica } from "./Utilitario";
const teclado = require("prompt-sync")();

export let rodada: number = 1;
export let ataque: number = 0;
let option: number;

function random(minimo: number, maximo: number): number {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

export class Batalha {
  public static Iniciar() {
    console.clear();
    estetica.confirmacao();

    option = +teclado("Aperte Enter para continuar ... ");

    console.clear();
    estetica.batalha();
  }

  public static atacar() {
    while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
      estetica.ataques();
      option = +teclado("Movimento Escolhido: ");

      switch (option) {
        case 1:
          console.clear();
          if (ataque <= 20) {
            ataque += random(2, 5);
            estetica.fortalecimento();
            break;
          } else {
            console.log("Seu ataque já está no máximo!");
            break;
          }
        case 2:
          console.clear();
          estetica.ataqueUm();
          oponente.pokemon.vida -= random(3, 9) + ataque;
          break;
        case 3:
          console.clear();
          estetica.ataqueDois();
          oponente.pokemon.vida -= random(2, 5) + ataque;
          break;
      }

      if (oponente.pokemon.vida > 0) {
        option = +teclado("Passar o turno para o oponente, clique enter ... ");
        estetica.dano();
        option = +teclado("Voltar para o seu turno, clique enter ... ");
      }

      rodada += 1;
    }

    if (oponente.pokemon.vida <= 0) {
      estetica.vitoria();
    } else if (personagem.pokemon.vida <= 0) {
      estetica.derrota();
    }
  }
}
