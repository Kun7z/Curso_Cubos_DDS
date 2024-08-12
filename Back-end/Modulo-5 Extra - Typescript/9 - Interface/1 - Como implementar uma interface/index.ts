//Um dos princípios básicos do TypeScript é que a verificação de tipos foca na forma que os valores têm. Isso às vezes é chamado de “duck typing” ou “structural subtyping”. No TypeScript, as interfaces preenchem o papel de nomear esses tipos e são uma maneira poderosa de definir contratos dentro do seu código, bem como contratos com código fora do seu projeto.

//estrutura:

interface ICarro {  //interessante de acordo com a convenção estar criando uma interface com o I maiúsculo na frente do nome da interface
    marca: string,  //propriedade, mas não posso ditar os encapsulamento como na classe public, private, protected
    modelo: string,
    velocidade: number,

    //constructor(){}  por ser uma interface, não pode ser criado um construtor
    acelerar(): void  //método
}
//implements -> interface != extends -> class

class Carro implements ICarro {
    marca: string
    modelo: string
    velocidade: number

    acelerar(): void {

    }
}