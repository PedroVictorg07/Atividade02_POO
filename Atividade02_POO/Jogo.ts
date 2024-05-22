import { Arma } from "./Arma";
import { Inventario } from "./Inventario";
import { ItemInventario } from "./ItemInventario";
import { Personagem } from "./Personagem";
import { Pocao } from "./Pocao";

export class Jogo{
    private menu:Menu;
    private personagem:Personagem;

    constructor (m, p, i){
        this.menu = m;
        this.personagem = p;
    };
     
    jogar() {
        do {
            let opcao = this.menu.imprimirMenu();
            
            if(opcao == "3"){
                var enter = require('prompt-sync')();
                let nomeItem = enter("Digite o nome do Item: ");
                let descricaoItem = enter("Digite a descrição do Item: ")
                let quantidadeItem = enter("Digite a quantidade que você deseja adicionar ao inventario: ");
                let novaArma = new Arma(nomeItem, descricaoItem);
                let itemInv = new ItemInventario(novaArma, quantidadeItem);
                this.personagem.getinventario().getItensInventario().push(itemInv)
            } else if (opcao == "4"){
                var enter = require('prompt-sync')();
                let nomeItem = enter("Digite o nome do Item: ");
                let descricaoItem = enter("Digite a descrição do Item: ")
                let quantidadeItem = enter("Digite a quantidade que você deseja adicionar ao inventario: ");
                let novaPocao = new Pocao(nomeItem, descricaoItem);
                let itemInv = new ItemInventario(novaPocao, quantidadeItem);
                this.personagem.getinventario().getItensInventario().push(itemInv)
            } else if (opcao == "1"){
                prompt(`${this.personagem.abrirInventario()} \n
                Selecione a arma que você deseja usar`)
            } else if (opcao == "2"){
                prompt(`${this.personagem.abrirInventario()} \n
                Escolha a poção que você deseja usar`) 
            } else if (opcao == "5"){
                this.personagem.informacoesPersonagem()
            } else if (opcao == "0"){
                console.log("Programa finalizado!!")
            } else if (opcao == "6"){
                this.personagem.desaquiparArma();
            } 
      
            } while();   
    }
}