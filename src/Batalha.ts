import { oponente, personagem } from "./Principal";
import { Funcionalidades, estetica } from "./Utilitario";
const teclado = require("prompt-sync")();

export let rodada: number = 1;
export let ataque: number = 0;
let option: number;

export class Batalha {
  public static Iniciar() {
    console.clear();
    console.log(estetica.confirmacao());

    option = +teclado("Aperte Enter para continuar ... ");

    console.clear();
  }

  public static atacar() {
    while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
      console.log(estetica.ataques());
      option = +teclado("Movimento Escolhido ☛ ");

      switch (option) {
        case 1:
          console.clear();
          if (ataque <= 20) {
            ataque += Funcionalidades.random(2, 5);
            console.log(estetica.fortalecimento());
            break;
          } else {
            console.log("Seu ataque já está no máximo!");
            break;
          }
        case 2:
          console.clear();
          console.log(estetica.ataqueUm());
          oponente.pokemon.vida -= Funcionalidades.random(3, 9) + ataque;
          break;
        case 3:
          console.clear();
          console.log(estetica.ataqueDois());
          oponente.pokemon.vida -= Funcionalidades.random(2, 5) + ataque;
          break;
      }

      if (oponente.pokemon.vida > 0) {
        option = +teclado("Passar o turno para o oponente, clique enter ... ");
        console.clear()
        console.log(estetica.dano());
        option = +teclado("Voltar para o seu turno, clique enter ... ");
        console.clear()
      }

      rodada += 1;
    }

    if (oponente.pokemon.vida <= 0) {
      console.log(estetica.vitoria());
    } else if (personagem.pokemon.vida <= 0) {
      console.log(estetica.derrota());
    }
  }

  public static reinicio() {
    
  }
}
