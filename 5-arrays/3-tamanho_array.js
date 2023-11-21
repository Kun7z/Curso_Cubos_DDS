const nome_de_estudantes = ['jose', 'maria', 'joao', 'joana', 'andre'];

console.log(nome_de_estudantes.length);  //valor sem começar do zero, fala literalmente quantos itens possui

nome_de_estudantes[nome_de_estudantes.length] = 'pedro';  // como o valor é sempre sem contar o zero, sempre será o próximo item a ser adicionado.

console.log(nome_de_estudantes);  // adicionado último valor