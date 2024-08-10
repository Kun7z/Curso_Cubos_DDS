class Pessoa {
    private velocidade = 0

    constructor(public nome: string, private idade: number, private sobrenome: string) {
    }

    andar() {
        this.velocidade += 1;
    }

    //método privado para ser usado dentro da própria classe
    private nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
    //get método -> palavra restrita
    public get getIdade(): number {
        return this.idade
    }

    public set setIdade(idade: number) {
        this.idade = idade
    }

    //método público utilizando método privado
    public get getNomeCompleto(): string {
        return this.nomeCompleto()
    }
}

const eric = new Pessoa('Eric', 24, 'Kuntz')
eric.nome = 'Eric Matheus';  //pode ser alterado porque o encapsulamento é public.  -> alterei no meio da aula para private
//eric.velocidade = 200;  //taxa erro, porque o encapsulamento desse atributo é private, no caso não sendo acessável sem ser da classe que foi utilizada para instanciar.

console.log(eric)
console.log(eric.getIdade)
eric.setIdade = 30
console.log(eric.getIdade)
console.log(eric.getNomeCompleto)