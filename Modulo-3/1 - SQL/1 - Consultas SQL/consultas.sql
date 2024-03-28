
-- REALIZE UMA CONSULTA POR LINHA NA QUERY, SELECIONANDO OU APERTANDO CTRL SHIFT ENTER

--select 
select * from musicas;  -- seleciona tudo do db musicas

select id, compositor from musicas;  --seleciona algumas colunas específicas do db músicas

select compositor from musicas;  -- seleciona coluna compositor do db músicas

--distinct
select distinct compositor from musicas;  -- seleciona apenas resultados distintos da coluna compositor do db músicas

--where
select * from musicas where tempo<100;  -- seleciona tudo de músicas onde o tempo for maior que 100, utilizando o operador lógico > maior que

select * from musicas where compositor IS NULL;  -- seleciona tudo de músicas onde compositor IS NULL ou seja, está vazio.

--operador and, between or
select * from musicas where tempo >200 and tempo<400;  --seleciona tudo de músicas onde tempo maior que 200 e tempo menor que 400.

select * from musicas where tempo between 200 and 400;  --mesma coisa que a linha de cima mas usando predicado between, entre um valor e outro.

select * from musicas where compositor = 'Bach';  -- seleciona tudo de músicas onde compositor seja igual a Bach.

select * from musicas where compositor = 'Bach' or compositor= 'Schubert';  -- seleciona tudo de músicas onde compositor seja igual a Bach ou compositor igual a Schubert

--limit, offset
select * from musicas limit 3;  --seleciona tudo do db musicas com limite de 3 consultas. 

select * from musicas offset 3;  --seleciona tudo do db musicas os registros a partir do identificador ou primaryKey 3.

select * from musicas limit 10 offset 2; --seleciona tudo do db musicas a partir da primaryKey 2 com limite de 10 consultas

--paginação

select * from musicas limit 10 offset 0; --pagina 1

select * from musicas limit 10 offset 10; --pagina 2

select * from musicas limit 10 offset 20; --pagina 3

--order by, asc, desc

select * from musicas order by compositor asc;  -- seleciona tudo do db musicas ordenado por compositor ascendente (ordem alfabética por ser texto)

select * from musicas order by compositor desc;  -- seleciona tudo do db músicas ordenado por compositor descendente (ordem alfabética por ser texto)

select * from musicas order by id asc;  -- seleciona tudo do db músicas ordenado pelo id (PrimaryKey) ascedente.

select * from musicas order by id desc;  -- seleciona tudo do db músicas ordenado pelo id (PrimaryKey) descendente.


-- primeiro ele pega todos os resultados que retornaram compositor e depois retorna todos esses resultados em descendente pela composição

select * from musicas order by compositor asc, composicao desc; -- seleciona tudo do db músicas ordenado por compositor ascendente(alfabético) e composição descendente (alfabético)

--(string) primeiro ele pega os números em ordem e depois as letras

select * from musicas order by ritmo asc;  -- seleciona tudo do db músicas ordenado por ritmo ascendente

--like e ilike % coringa

select * from musicas where composicao like 'Violin Sonata No 1 in G minor'; -- seleciona tudo do db musicas onde composicao igual a (string) obs: Exatamente como o operador =

select * from musicas where composicao like '% in G minor'; -- seleciona tudo do db musicas onde composicao igual a % qualquer coisa antes de in G minor.

select * from musicas where composicao like 'Violin Sonata%'; -- seleciona tudo do db músicas onde composicao igual a (string) + qualquer coisa.

select * from musicas where composicao like '%Sonata%'; --seleciona tudo do db musicas onde composicao igual a qualquer coisa antes (string) qualquer coisa depois.

select * from musicas where composicao ilike '%violin%';--seleciona tudo do db musicas onde composicao igual a qualquer coisa antes da string e qualquer coisa depois da string, ignorando case sensitive

--underline _

select * from musicas where composicao like '_iano%'; --seleciona tudo do db musicas onde composicao igual a 1 caractere+string+coringa

select * from musicas where composicao like '__iano%'--seleciona tudo do db musicas onde composicao igual a 2 caracteres+string+coringa obs: Não retorna nada



