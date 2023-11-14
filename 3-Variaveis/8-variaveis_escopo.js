// Variáveis de dentro do escopo, entre chaves {} só existem dentro do escopo.



{
    const idade = 30;
    {
        console.log(idade);  //é possível ler, porque estou tentando ler de dentro do escopo algo de fora
        let nome = "Eric";
    }
    console.log(nome)  //não é possível ler, porque estou tentando ler uma variável de dentro do escopo
}

console.log(idade);  //não é possível ler a variável idade, porque ela foi criada dentro das chaves {} (escopo)