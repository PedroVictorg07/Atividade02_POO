import { Personagem } from "./Personagem";

export abstract class Item {
    protected nome: string;
    protected descricao: string;

    constructor(n: string, d: string){
        this.nome = n;
        this.descricao = d
    }
    
    protected abstract aplicarBeneficios(personagem: Personagem);

    protected abstract removerBeneficios(personagem: Personagem);

    getNome(){
        return this.nome
    }

    getDescricao(){
        return this.descricao
    }
}