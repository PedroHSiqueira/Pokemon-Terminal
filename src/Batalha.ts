import { oponente, personagem } from "./Principal";
import { Funcionalidades, Estetica } from "./Utilitario";
const teclado = require("prompt-sync")();

export let rodada: number = 1;
export let ataque: number = 0;
let option: number;

export class Batalha {
  public Iniciar() {
    console.clear();
    console.log(Estetica.confirmacao());
  }

  public atacar(ataqueEscolhido: number) {
      switch (ataqueEscolhido) {
        case 1:
          console.clear();
          if (ataque <= 20) {
            ataque += Funcionalidades.random(2, 5);
            console.log(Estetica.fortalecimento());
            break;
          } else {
            console.log("Seu ataque já está no máximo!");
            break;
          }
        case 2:
          console.clear();
          console.log(Estetica.ataqueUm());
          oponente.pokemon.vida -= Funcionalidades.random(3, 9) + ataque;
          break;
        case 3:
          console.clear();
          console.log(Estetica.ataqueDois());
          oponente.pokemon.vida -= Funcionalidades.random(2, 5) + ataque;
          break;
      }

      if (oponente.pokemon.vida > 0) {
        option = +teclado("Passar o turno para o oponente, clique enter ... ");
        console.clear();
        console.log(Estetica.dano());
        option = +teclado("Voltar para o seu turno, clique enter ... ");
        console.clear();
      }

      rodada += 1;
  }
}
