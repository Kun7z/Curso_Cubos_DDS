const json = JSON.stringify(['Guido', 'Eric', 'Giullie', 'Maroquinho']);//transforma em STRING, como se fosse recebendo um arquivo JSON e transformando em uma grande string.

//tipo unknown, usado geralmente quando não sabemos o que vamos receber executando uma função, por exemplo, uma string, número, JSON, etc...

// Por que utilizar unknown e não any? Porque se eu usar any, deixaria o programa muito permissivo, praticamente como sem nenhuma segurança, se um dia aquela função executada deixar de ser enviado um tipo de dado string, para um Number, poderia alterar toda execução do meu programa e começar a executar de outra forma, dessa forma, se eu ditar um Unknown, ele para nessa linha de código, deixando de ser tão permissivo.

//Exemplo:

//let value: unknown;

// value.foo.bar; // Error
// value.trim(); // Error
// value(); // Error
// new value(); // Error
// value[0][1]; // Error

//Independente do que eu receber, ele não me deixa fazer (quase) nada.

const converteJSON = (info: string): unknown => {  //retorna uma string, porém essa função esperará receber um umknown
    return JSON.parse(info);
}

const jsonConvertido = converteJSON(json);  //apesar da função funcionar e transformar de JSON para string, o tipo ainda está como unknown, PASSE O MOUSE EM CIMA DA VARIÁVEL PARA VER

console.log(jsonConvertido) //retorna [ 'Guido', 'Eric', 'Giullie', 'Maroquinho' ]

//console.log(jsonConvertido[0])  //porém não consigo acessar sua propriedade, dando erro.

const jsonConvertidoAsArrayString = converteJSON(json) as string[];// dessa forma, estou ditando que eu quero que essa função, sempre retorne um array de strings.

console.log(jsonConvertidoAsArrayString[0]) //retorna Guido

//não tenho certeza, mas acredito que seja muito útil para funções de APIs, frameworks em que eu não sou dono do código, assim se mudarem algo em uma função, posso botar esse unknown, ACHO.