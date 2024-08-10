![](https://i.imgur.com/xG74tOh.png)

# Backend TypeScript | Polimorfismo

## Sistema Bancário

**Implemente um sistema, utilizando o paradigma de orientação a objetos, que simule algumas funcionalidades de um sistema bancário, conforme as regras abaixo.**

1 - Implemente uma classe `Cliente` de acordo com as informações:

-   Atributos
    -   nome
    -   email
    -   cpf
    -   dataCadastro (esse atributo deve ser um formato de data válido)
    -   enderecos (esse atributo deve ser uma lista de endereços com as propriedades a seguir)
        -   cep
        -   rua
        -   bairro
        -   cidade

Com exceção dos atributos `dataCadastro` e `enderecos`, os demais são obrigatórios ao instanciar a classe.

O atributo `dataCadastro` deverá receber a data atual no momento em que a classe é instanciada.

A classe deverá implementar um método `adicionarEndereco` que recebe o endereço de acordo com os atributos acima e adicione na lista de endereços.

2 - Implemente uma classe `ContaBancaria` que receberá, obrigatoriamente, os atributos a seguir:

-   Atributos
    -   saldo (esse atributo só deve ser acessado pela própria classe ou por subclasses que possa estendê-la, jamais publicamente)
    -   numero
    -   agencia
    -   senha (esse atributo só deve ser acessado pela própria classe ou por subclasses que possa estendê-la, jamais publicamente)
    -   cliente (esse atributo deve receber um objeto, instancia da classe `Cliente`)

O saldo informado obrigatoriamente representa o saldo inicial da conta do cliente.

A classe deverá implementar um método `consultarSaldo`, que recebe a senha e retornará o saldo no formato `Saldo: R$ 123,45` ou a mensagem de `senha inválida`. Para que o saldo seja retornado, a senha passada como argumento deve ser extamente a mesma cadastrada para o cliente.

A classe deverá exigir que dois métodos sejam implementados em subclasses que possa estendê-la. `depositar` que recebe um valor a ser depositado e `sacar` que recebe o valor a ser sacado e uma senha. Não é necessário implementar os métodos na classe `ContaBancaria`, pois ela nunca poderá ser instanciada. Ambas terá o saldo retornado da seguinte forma: `Saldo: R$ 123,45`

3 - Implemente uma classe `ContaCorrente` que herda as características e funcionalidades da classe `ContaBancaria`, com as seguintes particularidades:

Deverá existir um atributo chamado `limite` que deverá receber o valor de `R$ 1000,00` convertidos para centavos, ao criar um objeto. Esse atributo deverá ser exclusivo da classe `ContaCorrente` e não poderá ser acessado publicamente.

Deverá implementar os métodos obrigatórios da superclasse, seguindo as seguintes regras:

a) o método `depositar` deverá incrementar o valor recebido como argumento ao saldo do cliente e retornar o saldo conforme solicitado anteriormente.

b) o método `sacar` deverá seguir as seguintes obrigatoriedades:

-   Validar se a senha recebida como argumento é extamente a mesma cadastrada para o cliente.
-   Verificar se o valor a ser sacado está disponível. O valor disponível na conta corrente deve ser a soma do limite com o saldo do cliente.
-   Subtrair o valor recebido como argumento do saldo do usuário, caso as regras anteriores estejam validadas e retornar o saldo conforme solicitado anteriormente.

4 - Implemente uma classe `ContaPoupanca` que herda as características e funcionalidades da classe `ContaBancaria`, com as seguintes particularidades:

Deverá existir um atributo chamado `taxaRendimento` que deverá receber o valor de `0.05` que representará 5% de taxa de rendimento, ao criar um objeto. Esse atributo deverá ser exclusivo da classe `ContaPoupanca` e não poderá ser acessado publicamente.

Deverá implementar os métodos obrigatórios da superclasse, seguindo as seguintes regras:

a) o método `depositar` deverá incrementar o valor recebido como argumento ao saldo do cliente, acrescido do valor da taxa de rendimento com base no valor depositado e retornar o saldo conforme solicitado anteriormente.

b) o método `sacar` deverá ser implementado conforme a classe `ContaCorrente`, com exceção do limite que não existirá na classe `ContaPoupanca`.

**Testes do sistema**

Crie ao menos dois clientes e cadastre uma conta bancária para cada um deles, sendo uma poupança e uma corrente.

Faça operações de saques e depositos em cada uma das contas para testar a implementação.

Não é necessário transpilar o código.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para fazer os exercícios:

-   [ ] Fazer o fork do repositório para sua conta
-   [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
-   [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
-   [ ] Copiar a url do seu fork e enviar na plataforma

###### tags: `backend` `typescript` `exercicio` `nodeJS` `JavaScript`