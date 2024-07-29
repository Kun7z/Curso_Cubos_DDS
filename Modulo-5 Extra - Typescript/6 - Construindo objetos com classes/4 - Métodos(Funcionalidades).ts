class Carros { //classe - objeto
    ligado = false
    aceleracao = 0;
    constructor(
        public cor: string,  //atributo
        public modelo: string,  //atributo
        public marca: string,  //atributo
        public ano: number,  //atributo
        public potencia: number) { }  //atributo

    ligar() {  //método
        if (!this.ligado) {
            this.ligado = true;
        }
    }

    acelerar(rpm: number) {
        this.aceleracao += rpm;
    }

    frear() {
        this.aceleracao = 0;
    }

    estadoDoCarro(): string {
        if (this.ligado) {
            return `O carro está ligado`
        }
        return `O carro está desligado`
    }
}

const fusca = new Carros('preto', 'fusca', 'Volkswagen', 1980, 90)
console.log(fusca)