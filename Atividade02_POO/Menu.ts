class Menu {
    private itemMenu: ItemMenu[];
    
    constructor(){
        let arma = new ItemMenu("1", "Equipar arma");
        let tomarPocao = new ItemMenu("2", "Tomar poção");
        let addArmaInv  = new ItemMenu("3", "Adicionar arma ao inventário");
        let addPocaoInv = new ItemMenu("4", "Adicionar poção ao inventário");
        let imprimiriInfo = new ItemMenu("5", "Imprimir informações");
        let desequiparArma = new ItemMenu("6", "Desequipar arma");
        let sair = new ItemMenu("0", "Sair");
    

        this.itemMenu.push(arma);
        this.itemMenu.push(addArmaInv);
        this.itemMenu.push(addPocaoInv);
        this.itemMenu.push(imprimiriInfo);
        this.itemMenu.push(desequiparArma);
        this.itemMenu.push(tomarPocao);
        this.itemMenu.push(sair)
    }

    imprimirMenu(){
        this.itemMenu.forEach(itemMenu => console.log(itemMenu.getopcao() + " - " + itemMenu.gettextoOpcao()))

        var enter = require('prompt-sync')();
        let opcaoSelecionada = enter("Selecione uma opção");
        return opcaoSelecionada;
    }
}