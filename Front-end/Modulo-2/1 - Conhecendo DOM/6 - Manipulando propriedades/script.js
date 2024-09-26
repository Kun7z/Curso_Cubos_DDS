const element = document.querySelector('h1')

element.textContent = 'Novo Dom'  //substitui o DOM pela string novo Dom

//caso eu queira realizar uma adesão, posso fazer o uso de um +

element.textContent += ' Dom'  //output Novo Dom Dom

element.style.backgroundColor = 'red';  //alterando o estilo do background color com red. Sempre que o CSS for por hifen, vai ser camelCase

const elementoImagem = document.querySelector('img')

elementoImagem.alt = 'Essa imagem é de teste'  //Alterando a descrição da imagem caso não carregue, alterando a propriedade dentro da tag.