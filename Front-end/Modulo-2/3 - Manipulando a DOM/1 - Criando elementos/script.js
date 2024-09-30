//Cria o elemento, mas não injeta na página, logo só da pra ver que foi criado no console e não na página aberta em si
const novoElemento = document.createElement('h1')
novoElemento.textContent = 'Criando elemento'
novoElemento.style.color = 'black';

//Preciso pedir pra monitora, por que que quando eu dou console.log vejo todo o elemento, e não só a parte de estilização e conteúdo do texto da tag como na aula com a professora. Momento da aula: 2:17 Criando elementos prática
console.log(novoElemento)