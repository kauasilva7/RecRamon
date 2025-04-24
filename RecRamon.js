class Personagem{
    #vida
    #força
    #mana
    constructor(vida, força, mana){
        this.#vida = vida
        this.#força = força
        this.#mana = mana
    }

    get vida() {
        return this.#vida
      }
    
      set vida(novaVida) {
        this.#vida = novaVida
      }
    
      get força() {
        return this.#força
      }

      get mana(){
        return this.#mana
      }
    
    
}

class Guerreiro extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)

    }
   
    ataqueEspada(){
      if(this.vida <= 15){
          this.ataqueEspada + 1
          console.log('Segura essa !')
      }
  
  }
   
}


class Mago extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)

    }

      usarFeitiço(){
        if(this.vida < 1){
            this.usarFeitiço + 2
            console.log('Agora você vai sentir a pressão')
        }
      }


}
class Arqueiro extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)

    }

      atirarFlecha(){
        if(this.vida < 1){
            this.atirarFlecha + 4
            console.log('Segura essa flecha otário')
        }
      }

}

const oponente = new Personagem(20, 40, 15)
const guerreiro = new Guerreiro(25, 50, 35)
const mago = new Mago(15, 35, 40)
const arqueiro = new Arqueiro(20, 25, 45)
