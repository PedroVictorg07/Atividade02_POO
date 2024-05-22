import { ItemInventario } from "./ItemInventario";

class InventarioLimiteException extends Error {
    nome = InventarioLimiteException
}

export class Inventario {
    private itensInventario: ItemInventario[];
    private quantidadeMaxItens: number;

    // get e set dos atributos criados na classe
    public getItensInventario(){
        return this.itensInventario
    }
    public getquantidadeMaxItens(){
        return this.quantidadeMaxItens
    }
    public getadicionarItem(){
        return this.adicionarItem
    }

    private adicionarItem(item:ItemInventario){
        if (this.itensInventario.length >= this.quantidadeMaxItens) {
            throw new InventarioLimiteException('O inventário está cheio.');
        }
        if (this.itensInventario.includes(item)){
            this.quantidadeMaxItens++
        } else {
            this.itensInventario.push(item)
        }
    }
    }
