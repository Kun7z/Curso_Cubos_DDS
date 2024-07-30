--count: conta quantidade de resultados

select count(*) from usuarios where idade>=18;

--alias: apelido

select count(*) as quantidadeUsuarios from usuarios where idade>=18;

select nome as nomeCompleto from usuarios where idade>=18;

select count(*) as "Quantidade Usuarios" from usuarios where idade>=18; -- string 

--concat: operador ||

select nome || email from usuarios; --sem nome na coluna

select nome || email as nomeEmail from usuarios;  --com nome na coluna com alias

select nome || ' - ' || email as nomeEmail from usuarios; --concatenado com espaço

select concat(nome,' - ',email) as "Nome e e-mail" from usuarios;

--avg e round

select avg(idade) from usuarios;  --traz a média aritmética de uma coluna com números inteiros

select round(avg(idade)) from usuarios;  -- arredonda o resultado da média

select round(avg(idade),2) from usuarios;  --retorna o resultado, com o segundo parametro indicando quantas casas para retornar

--min e max

select min(idade) from usuarios;  --traz o registro com menor número inteiro

select max(idade) from usuarios;  --traz o registro com maior número inteiro

select min(nome) from usuarios;		--traz o registro alfabético com menor resultado de A -> Z

select max(nome) from usuarios;		--traz o registro alfabético com maior resultado de Z -> A

--sum: soma

select sum(idade) from usuarios;  --soma de todos os registros (apenas inteiros)

--cast: permite converter um dado, ou operador ::

select idade::text from usuarios;

select '123'::integer;

select '123'+4;  -- caso qualqeur um dos elementos de soma for número, o próprio postgres converte o número string/texto para número para concluir a operação

select '123'+'4'; --erro;

select cast(idade as text) from usuarios;

--now

select now();  --seleciona o momento em que for executado, sendo atualizado a cada solicitação

select * from agendamentos where cast(agendamento as date) > now();  --seleciona agendamentos maiores que o tempo atual, não retorna nada no momento porque não existe agendamento futuro

select cast(agendamento as date) from agendamentos;  -- converte pra data

select cast(agendamento as time) from agendamentos;	 --converte pra hora

select cast(agendamento as timestamp) from agendamentos;  --converte pra data e hora

--age: passa duas datas e traz o intervalo entre essas datas

select age('2022-03-16 12:00:00','2022-03-15 12:00:00');  --1 day

select age('2022-03-16 12:00:00','2022-02-15 12:00:00');  --1 mes e 1 dia

select age('2022-03-16 12:00:00','2021-02-15 12:00:00'); --1 ano, 1 mes e 1 dia;

select age('2022-03-16 12:00:00'::timestamp);  --compara com o dia atual e hora, ou seja, now

select age('2022-03-16 12:00:00'::date);  --compara com o dia atual, now

select *,age(agendamento::timestamp) from agendamentos where agendamento::timestamp<now();

--coalesce:

select * from usuarios where telefone is null;

select coalesce(null,'batata','cenoura'); --verifica se um argumento for nulo, se for, substitui por um valor/string, etc

select concat(nome,' - ',coalesce(telefone,'Não tem telefone'))from usuarios; -- verifica se o campo telefone é nulo, e substitui por 'Não tem telefone'

select concat(nome,' - ',coalesce(telefone,email,'Não tem'))from usuarios;  -- verifica se o campo telefone é nulo, se for, substitui pelo email, se o email for nulo, substitui por 'Não tem'

--group by: agrupar por valores através de argumentos

select idade,count(id) from usuarios group by idade;  -- seleciona a coluna idade, e conta quantos usuários tem a mesma idade

select idade,count(id),sum(idade) from usuarios group by idade;  -- seleciona a coluna idade e conta quantos usuários tem a mesma idade e retorna a soma da idade desses usuários


