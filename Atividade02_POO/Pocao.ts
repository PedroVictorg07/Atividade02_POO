import { Item } from "./Item";
import { Personagem } from "./Personagem";

export class Pocao extends Item {

    aplicarBeneficios(personagem: Personagem){
        personagem.setHP(personagem.getHP()+(personagem.getHPmax() + 0.5));
        personagem.setMP(personagem.getMP()+(personagem.getMPmax() + 0.2));
    }
    removerBeneficios(personagem: Personagem){
        
    }
}