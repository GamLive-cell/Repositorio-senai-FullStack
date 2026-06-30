class Carro {
    marca: "chevrolet";
    modelo: "onix";
    ano: 2020;

    constructor (marca: string, modelo: string, ano: number) {
        this.marca = "chevrolet";
        this.modelo = "onix";
        this.ano = 2020;
    }
    
    exibirDetalhes() : void {
        console.log (`${this.marca} ${this.modelo} - ${this.ano}`);
    }
}

let carro1 = new Carro("Toyota", "Corolla", 2022);
carro1.exibirDetalhes();