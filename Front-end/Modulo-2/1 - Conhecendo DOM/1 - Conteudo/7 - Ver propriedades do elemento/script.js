//Com o método .__proto__, conseguimos ver as propriedades de um elemento.

const elemento = document.querySelector('h2').__proto__
console.log(elemento)


//caso eu queira ver alguma propriedade de um elemento, por exemplo, id vai ser uma priopriedade dentro do elemento h2, eu digito

console.log(document.querySelector('h2').id)

//posso usar isso pra ver a estilização css feita também

console.log(document.querySelector('h2').style)
