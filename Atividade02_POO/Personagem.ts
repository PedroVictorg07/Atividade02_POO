import { Arma } from "./Arma";
import { Inventario } from "./Inventario";
import { Item } from "./Item";
import { Pocao } from "./Pocao";

export class Personagem {

    // Atributos da classe
    private nome: string;
    private HP: number;
    private HPmax: number;
    private MP: number;
    private MPmax: number;
    private forca: number;
    private desefa: number;
    private inventario: Inventario;
    private arma: Arma | null;

    // get e set
    getinventario(){
        return this.inventario
    }
    getForca(){
        return this.forca
    }
    setForca(forca){
        return this.forca = forca
    }
    getDesefa(){
        return this.desefa
    }
    setDefesa(d){
        return this.desefa = d
    }
    getHP(){
        return this.HP
    }
    setHP(hp){
        return this.HP = hp
    }
    getHPmax(){
        return this.HPmax
    }
    setHPmax(hpmax){
        return this.HPmax = hpmax
    }
    getMP(){
        return this.MP
    }
    setMP(mp){
        return this.MP = mp
    }
    getMPmax(){
        return this.MPmax
    }
    setMPmax(mpmax){
        return this.MPmax = mpmax
    }
    

    // metodos da classe
    abrirInventario(){
        for(let i:number = 0; i < this.inventario.getItensInventario().length; i++ ){
            console.log(i + "- " + this.inventario.getItensInventario()[i].getItem().getNome() + this.inventario.getItensInventario[i].getquantidade() +
         "Total: " +   this.inventario.getItensInventario[i].getquantidade() + "/" + this.inventario.getItensInventario[i].getquantidadeMaxItens())
        }
    }

    usarIntem(item:Item){
        if(item instanceof Pocao){
            for(let i:number = 0; i < this.inventario.getItensInventario().length; i++){
                if(this.inventario.getItensInventario()[i].getItem().getNome() == item.getNome()){
                    this.inventario.getItensInventario()[i].setQuantidade(this.inventario.getItensInventario()[i].getquantidade()-1);

                }
            }
        } else if (item instanceof Arma) {
            this.arma = item
        }
    }

    informacoesPersonagem(){
        console.log(`\nInformações do Personagem:\n
        Nome: ${this.nome}\n
        HP: ${this.HP}\n
        MP: ${this.MP}\n
        Força: ${this.forca}\n
        Defesa: ${this.desefa}`)
    }

    desaquiparArma(){
        this.arma?.removerBeneficios(this);
        this.arma = null;
    }
}