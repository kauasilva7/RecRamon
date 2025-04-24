class Personagem{
    constructor(vida, força, mana){
        this.vida = vida
        this.força = força
        this.mana = mana
    }
    
}

class Guerreiro extends Personagem{
  super(vida, força, mana){
    this.vida = vida
    this.força = força
    this.mana = mana
  }
  
  ataqueEspada(){
    if(this.força >= 1){
        this.ataqueEspada = true
    }

  }

  }


class Mago extends Personagem{
    super(vida, força, mana){
        this.vida = vida
        this.força = força
        this.mana = mana
      }

      usarFeitiço(){
        if(this.força >= 1){
            this.usarFeitiço = true
        }
      }

}
class Arqueiro extends Personagem{
    super(vida, força, mana){
        this.vida = vida
        this.força = força
        this.mana = mana
      }

      atirarFlecha(){
        if(this.força >= 1){
            this.atirarFlecha = true
        }
      }
}