import { Item } from "./Item";
import { Personagem } from "./Personagem";

export class Arma extends Item {

    aplicarBeneficios(personagem: Personagem){
        personagem.setForca(personagem.getForca() + 10);
        personagem.setDefesa(personagem.getDesefa() + 5)
    }
    removerBeneficios(personagem: Personagem){
        personagem.setForca(personagem.getForca() - 10);
        personagem.setDefesa(personagem.getDesefa() - 5)
    }
}