import { ataque, rodada } from "./Batalha";
import { oponente, personagem } from "./Principal";

let danoOponente: number = 0;

export class Funcionalidades {

  public static random(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
}

export class Error {
  public static verificarNome(): string {
    return (`
»»———————————————————————————————————　★　———————————————————————————————————««\n
☛ Erro ...Nome Inválido, Por favor escolha um nome com mais de 3 caracteres!\n
»»———————————————————————————————————————————————————————————————————————————««\n`);
  }

  public static VerificaSelecao(): string {
    return (`
»»———————————————————————————————————　★　———————————————————————————————————««\n
☛ Erro ...Nome Inválido, Por favor escolha um nome com mais de 3 caracteres!\n
»»———————————————————————————————————————————————————————————————————————————««\n`);
  }
}

export class estetica {
  public static nome(): string {
    console.clear()
    return (` 
                         Bem vindos ao Pokemon Terminal!
                           
»»———————————————————————————————————　★　———————————————————————————————————««
                           
                                 Escolha seu Nome      
                                   _____________       
                           
»»———————————————————————————————————————————————————————————————————————————««\n`);
  }

  public static apresentacao(): string {
    return (`\n✷ 　 　　 　 ·         　 ⋆ · 　 *         ✷ 　 　　 　 ·
　 　　 *　　 * ⋆ 　 .      Bem vindo ao Centro Pokémon      　 　　 *　　 * ⋆ 　 . 
· 　　 ⋆ 　　　 ˚ ˚ 　　 ✦                     　 ⋆ · 　 *         · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦
　 ⋆ · 　 *      * ⋆ 　 .       * ⋆ 　 .             * ⋆ 　 .              　 ⋆ · 　 *
　 *         ✷ 　 　       Prazer em conhece-lo ${personagem.nome}!,　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　Agora você tera 3 Opções de Pokemons Iniciais　 　 　　 *　　 * ⋆ 　 . ✧　 　 · 　 ✧　✵
　　 *　　 * ⋆ 　 . 　Deves escolher com qual irá iniciar a sua jornada!　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✧　 　 · 　 ✧　✵           　 ⋆ · 　 *`);
  }

  public static selecao(): string {
    return (`                           
          ====
          !!!!
        ============================
      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      ||      _____          _____    ||            __| |____________________________________________| |__
      ||      | | |          | | |    ||           (__   _____________Escolha um numero!_____________   __)
      ||      |-|-|          |-|-|    ||              | |                                            | |
      ||      #####          #####    ||              | |             1 - Charmander                 | |
      ||                              ||              | |                                            | |
      ||      _____   ____   _____    ||              | |             2 - Squirtle                   | |
      ||      | | |   @@@@   | | |    ||              | |                                            | |
      ||      |-|-|   @@@@   |-|-|    ||              | |             3 - Bulbassaur                 | |
      ||      #####   @@*@   #####    ||            __| |____________________________________________| |__
      ||              @@@@            ||           (__   ____________________________________________   __)
    ******************____****************            | |                                            | |
   *****************************************          | |                                            | |\n`);
  }

  public static confirmacao(): string {
    console.clear()
    return (`
       ______________________________
       |                            |.
       |         Parabéns!          |.
       |____________________________|.
       |                            |.
       |      o seu Inicial Foi     |.
       |         Selecionado        |.
       |                            |.
       |                            |.
       | Uma Batalha será iniciada! |.
       |                            |.
       |           Pronto?          |.
       |   _________________________|___
       |  /                            /.
       |_/____________________________/.\n`);
  }

  public static batalha(): string {
    return (`                           
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Batalha -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.

                                ${personagem.nome} Vs ${oponente.nome}  

                          (${personagem.pokemon.nome}) Vs (${oponente.pokemon.nome})  

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'`);
  }

  public static ataques(): string {
    console.log(estetica.batalha());
    return (`
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50                                            
    |                                                                       |
    |-----------------------------------------------------------------------|
    !                                                                       !
    :                                                                       :
    :                                                                       :
    .                                                                       .
    .                                                                       .
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static fortalecimento(): string {
    console.clear()
    console.log(estetica.batalha());
    return (`
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
    |                      Seu ataque foi Fortalicido!                      |
    :                                                                       :
                          Seu Bônus de ataque atual é: ${ataque}                    
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static ataqueUm(): string {
    console.clear()
    console.log(estetica.batalha());
    return (`
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
                            ${personagem.pokemon.nome} atacou o ${oponente.pokemon.nome}                          
    :                                                                       :
                                    com o ${personagem.pokemon.ataques[1]}!                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static ataqueDois(): string {
    console.clear()
    console.log(estetica.batalha());
    return (`
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
                        ${personagem.pokemon.nome} atacou o ${oponente.pokemon.nome}                          
    :                                                                       :
                                com o Tackle!                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:                 
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static dano(): string {

    console.clear()
    console.log(estetica.batalha());


    let ataqueOponente = oponente.pokemon.ataques[Funcionalidades.random(0, 2)];

    if (ataqueOponente == oponente.pokemon.ataques[0]) {
      danoOponente += Funcionalidades.random(3, 9);
    }

    if (ataqueOponente == oponente.pokemon.ataques[1]) {
      personagem.pokemon.vida -= Funcionalidades.random(3, 9);
    }

    if (ataqueOponente == oponente.pokemon.ataques[2]) {
      personagem.pokemon.vida -= Funcionalidades.random(2, 7);
    }

    return (`
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
    :                                                                       :
                             ${oponente.pokemon.nome} Usou o ${ataqueOponente}                          
                                                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:              
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static vitoria(): string {
    return (`
    »»———————————————————————————————————　★　———————————————————————————————————««
    ☛ Parabéns ${personagem.nome}, você venceu a batalha!
    »»———————————————————————————————————————————————————————————————————————————««\n`);
  }

  public static derrota(): string {
    return (`
    »»———————————————————————————————————　★　———————————————————————————————————««
    ☛ Infelizmente ${personagem.nome}, você perdeu a batalha!
    »»———————————————————————————————————————————————————————————————————————————««\n`);
  }
}
