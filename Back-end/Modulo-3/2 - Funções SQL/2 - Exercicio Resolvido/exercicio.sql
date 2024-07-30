-- 1: Execute o script de criação da tabela farmácia

--2: Monte uma query que retorne a quantidade de produtos agrupados por categoria e a soma do estoque de todos os produtos de cada categoria.


select categoria,count(id),sum(estoque) from farmacia group by categoria;

--minha resposta foi a mesma do professor.
