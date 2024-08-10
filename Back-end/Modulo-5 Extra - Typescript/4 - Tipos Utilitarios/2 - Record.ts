//Record<Keys,Type>

type Carro = {
    ano: number,
    cor: string
}

type Propriedades = 'Gol' | 'Palio' | 'Fusca';  //Tipo absoluto, em que o tipo só pode receber esses valores, do contrário dará erro.

const carros: Record<Propriedades, Carro> = {  //Record recebe a propriedade, e o tipo, onde cada propriedade de Propriedades, terá de preencher os requisitos do tipo Carro.
    Gol: {
        ano: 2021,
        cor: 'branco'
    },
    Palio: {
        ano: 2021,
        cor: 'branco'
    },
    Fusca: {
        ano: 2021,
        cor: 'branco'
    }
}  //Objeto
