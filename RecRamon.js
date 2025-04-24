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

  }

class Mago extends Personagem{
    super(vida, força, mana){
        this.vida = vida
        this.força = força
        this.mana = mana
      }
}
class Arqueiro extends Personagem{
    super(vida, força, mana){
        this.vida = vida
        this.força = força
        this.mana = mana
      }
}