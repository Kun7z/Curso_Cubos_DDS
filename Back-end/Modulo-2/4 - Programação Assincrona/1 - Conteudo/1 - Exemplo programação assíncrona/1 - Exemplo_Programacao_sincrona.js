// cada execução é feita uma depois da outra, por isso síncrona, uma função tem de terminar para a outra ser executada.

console.log('inicio');

for (let index = 1; index <= 5; index++) {
    console.log(index);

}

console.log('fim')