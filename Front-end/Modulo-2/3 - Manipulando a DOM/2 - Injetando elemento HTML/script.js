const novoElemento = document.createElement('h1');
novoElemento.textContent = 'Injetando elemento';
novoElemento.style.color = 'red';
console.log(novoElemento)
//Caso eu só injete esse elemento, ele vai ser injetado depois do meu script na ordem html, ou seja, depois de todos os elementos html da minha página

//document.body.appendChild(novoElemento)

//Para injetar dentro de um elemento html, devo definir através do:

const divRoot = document.querySelector('.root')  //não preciso criar uma variável pra isso, posso por direto no código, mas fica mais legível
divRoot.appendChild(novoElemento)