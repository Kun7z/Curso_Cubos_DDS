--criação de database
create database aula_modelagem;

--criação de tabela editoras
create table editoras (
id serial primary key,  
  --tipo serial, um alias para BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE
  --BIGINT: tipo de dado inteiro, aloca até 8 bits
	--UNSIGNED: não permite valor negativo
	--NOT NULL: não pode ser nulo – é obrigatório
	--AUTO_INCREMENT: incrementa novo número a cada registro
	--UNIQUE: restrição que diz que o valor deve ser único na coluna
  nome text not null,
  --tipo text, aloca caracteres infinitos
  cnpj text unique,
  --tipo text, aloca caracteres infinitos
  --UNIQUE: valor deve ser único na coluna
  data_cadastro timestamp default now()
  --timestamp: Tipo de dado, TIMESTAMP é usado para valores que contêm partes de data e hora.
  --default: caso não seja passado nenhum valor, será preenchido algo que será definido na proxima palavra
  --now: tempo em que é adicionado registro
);

--insere valores nos campos nome e cnpj na tabela editoras
insert into editoras (nome,cnpj) values
('cubos academy','000000000');

--criação da tabela livros
create table livros (
  isbn integer primary key,  --isbn padrão numérico para livros, nada ver com mysql, só usamos um número que não se repete como primary Key
  editora_id integer references editoras(id), --foreign key para referenciar ao id na tabela editoras
  titulo text not null,	--titulo tipo texto não nulo
  data_publicacao date not null	--tipo date(sem horário) não nulo , padrão de data ANO-DIA-MES
);

--insere valores na tabela livros
insert into livros (isbn,editora_id,titulo,data_publicacao)
values
(12345,1,'Backend com NodeJS','2021-12-01');  --padrão de data ANO-DIA-MES

--cria tabela endereços - RELAÇÃO UM PARA UM
create table enderecos (
  id serial primary key,  --id PrimaryKey
  editora_id integer references editoras(id), --editora(id) com o mesmo tipo que o id na tabela editoras possui referenciando tabela editoras(id)
  cep text not null, --cep tipo texto não nulo
  rua text, --rua tipo texto
  bairro text,  --bairro tipo texto 
  cidade text,  --cidade tipo text
  estado char(2),  --estado com tamanho fixo de 2 caracteres, caso não possua 2 caracteres, preenche os espaços vazios até ter 2 caracteres, como é estado a sigla sempre vai ter 2 caracteres
  pais text  --pais tipo texto
);

insert into enderecos 
(editora_id, cep)
values 
(1, '41000-000');

--cria tabela categorias - RELAÇAO MUITOS PARA MUITOS
create table categorias (
	id serial primary key,
  	nome text not null
);

create table livro_categoria (
	livro_isbn integer references livros(isbn),
  	categoria_id integer references categorias(id)
);

insert into categorias (nome) values ('Tecnologia'), ('Programação'), ('Nodejs');

insert into livro_categoria 
(livro_isbn, categoria_id)
values
(12345, 1),
(12345, 2),
(12345, 3),
(12346, 2);

--cria tabela comentarios - AUTO RELACIONAMENTO
create table comentarios (
	id serial primary key,
  	descricao text not null,
  	comentario_id integer references comentarios(id),  --auto relacionamento
  	livro_isbn integer references livros(isbn)
);


insert into comentarios (livro_isbn, descricao) values (12345, 'Livro muito bom');

insert into comentarios (comentario_id, descricao) values (1, 'Obrigado pelo elogio');

--alterar tabelas já criadas


alter table categorias add column descricao text;  -- add coluna a mais (só pode ser não obrigatória, ou tabela sem dados para adicionar not null)

alter table categorias drop column descricao; --remove coluna

alter table categorias alter column descricao type varchar(100); --altera tipo da coluna

create table telefones (
	id serial primary key,
  	editora_id integer,
  	numero text
);

alter table telefones 
add constraint fk_telefones_editoras_id
foreign key (editora_id) references editoras(id);
