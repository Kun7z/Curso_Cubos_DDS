/*
Ideal é utilizar o console do seu navegador para usar algumas das funções, pois aqui será interpretado pelo NodeJS e as suas configurações padrões que podem
estar diferente das configurações do seu navegador.
*/

const data = new Date();
console.log(data);

//data local do navegador, se seu navegador estiver em outra língua, pode estar retornando diferente, sendo dinâmico para as configurações de navegação do usuário.
const dataLocal = data.toLocaleString();
console.log(dataLocal);

//força a fazer com que a data local seja em PT-BR, ignorando as configurações do usuário.
const dataLocalPT_BR = data.toLocaleString('pt-BR');
console.log(dataLocalPT_BR);

//força a fazer com que a data local seja em EN-US, ignorando as configurações do usuário.   
const dataLocalEN_US = data.toLocaleString('en-US');
console.log(dataLocalEN_US);

/*undefined ele pega das configurações do navegador, ou no caso do VSCode o NodeJS, e define os valores da data se quero em número ou escrito por extenso, com numeric
para número e long para extenso. */
const dataLocalComPropriedades = data.toLocaleString(undefined, { year: "numeric", month: "long", day: "numeric" })
console.log(dataLocalComPropriedades) //27 de fevereiro de 2024

// para mais opções: https://devdocs.io/javascript/global_objects/date/tolocalestring
