

//MÉTODO

const pessoa = {
    nome: 'José',
    idade: 30,
    profissao: 'professor',
    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);  //this palavra reservada para determinar que é esse objeto q ele está informando, seria a mesmaa coisa que digitar pessoa.idade

        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}`)
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return 'jovem';
        } else if (this.idade < 66) {
            return 'adulto';
        } else {
            return 'idoso';
        }
    }
}

pessoa.apresentar();
