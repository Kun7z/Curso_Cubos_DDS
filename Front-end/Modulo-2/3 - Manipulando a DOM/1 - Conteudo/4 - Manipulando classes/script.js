const elementoh1 = document.querySelector('h1') //pega o primeiro elemento h1

//me informa o className do elemento selecionado 
console.log(elementoh1.className)

//verifica se o elemento possui a classe que eu escrevo
console.log(elementoh1.classList.contains("meuTitulo"))

//adiciona essa classe no meu elemento
elementoh1.classList.add("minhaNovaClasse")

//remove a classe do elemento
elementoh1.classList.remove("minhaNovaClasse")

//toggle -> Se não existe a classe, ele cria, se a classe cria, ele remove, bom para casos em clique
elementoh1.classList.toggle("MeuTituloToggle")