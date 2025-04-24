class Personagem{
    #vida
    #força
    #mana
    constructor(vida, força, mana){
        this.#vida = vida
        this.#força = força
        this.#mana = mana
    }
    
}

class Guerreiro extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)

    }
   
    ataqueEspada(){
      if(this.vida < 1){
          this.ataqueEspada = true
          console.log('Segura essa !')
      }
  
  }
   
  get vidaAtual(){
    return this.vida

  }

  set vidaAtual(vidaAtual){
    return this.vida = vidaAtual
  }
  }


class Mago extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)

    }

      usarFeitiço(){
        if(this.vida < 1){
            this.usarFeitiço = true
            console.log('Agora voce vai sentir a pressão')
        }
      }

      get vidaAtual(){
        return this.vida
    
      }
    
      set vidaAtual(vidaAtual){
        return this.vida = vidaAtual
      }


}
class Arqueiro extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)

    }

      atirarFlecha(){
        if(this.vida < 1){
            this.atirarFlecha = true
            console.log('Segura essa flecha otario')
        }
      }

      get vidaAtual(){
        return this.vida
    
      }
    
      set vidaAtual(vidaAtual){
        return this.vida = vidaAtual
      }
}