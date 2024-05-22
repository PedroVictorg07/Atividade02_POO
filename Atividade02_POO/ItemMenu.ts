class ItemMenu {
    private opcao: string;
    private textoOpcao: string;

    constructor(o:string, to:string){
        this.opcao = o;
        this.textoOpcao = to;
    }
    
    // get e set
    getopcao(){
        return this.opcao;
    }
    gettextoOpcao(){
        return this.textoOpcao
    }
}