--Excluir database

drop database aula_crud;

--Criar database

create database aula_crud;

--criar tabela
create table if not exists produtos (
	id serial primary key,
  	nome text,
  	descricao text,
  	preco integer,
  	categoria text
);

--inserir valores
insert into produtos (nome,descricao,preco,categoria) values ('Camisa','Linda camisa',5990,'Roupas');

insert into produtos (nome,preco,categoria) values ('Caderno',2000,'Material escolar'); --sem a descricao, vai ficar null no registro

insert into produtos (nome,descricao,preco,categoria) values
('Óculos',NULL,1500,'Acessório'),	--adicionar mais valores por vírgula
('Relógio','Relógio preto',10000,'Acessório');

--atualizar valores

update produtos set nome = 'Óculos cinza' where id=3;

update produtos set descricao = 'Sem descrição' where descricao is null;

update produtos set 
descricao = 'Lindo óculos cinza',
preco=12000	--atualiza mais de uma coluna separando por vírgula
where id=;

--NUNCA FAÇA ISSO

update produtos set nome='qualquer nome'; -- NUNCA FAÇA, sem where, pois vai atualizar todos os valores da coluna, apenas faça se for consciente

--DELETE

delete from produtos where id=2;

delete from produtos where descricao is null;

--NUNCA FAÇA ISSO

delete from produtos;  -- não especificado qual das linhas ou colunas é pra ser deletado com o where, com isso ele vai deletar todos os registros da database;

