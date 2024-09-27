/* 
É possível selecionar elementos através de métodos do document. Exemplo:

Com o método document.querySelector, pode ser utilizado o seletor CSS para encontrar algo no html. Se eu tenho um <p class="my-text">. Um parágrafo no html, consigo através do js, estar selecionando esse parágrafo selecionando o seletor, que seria a class my-text:
*/

document.querySelector('.my-text')

/* Se eu tiver um seletor id, posso selecionar com: */

document.querySelector('#my-text')

/* Porém isso tem um problema, se por ventura eu tiver mais de 1 elemento, por exemplo, 4 parágrafos com a mesma classe, só vai retornar a primeira ocorrência.*/


//Para selecionar mais de um elemento html, posso utilizar o .querySelectorAll(seletor)

document.querySelectorAll('div')

//Vai retornar todos os elementos div
