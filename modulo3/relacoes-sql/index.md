# RELAÇÕES EM SQL

#### QUESTÃO 1 
>a) Chave estrangeira é o atributo que estabelece a relação de uma entidade com a chave primária de outra entidade e permite uma relação entre entidades. Chave estrangeira estabelece relação entre uma entidade com chave primaria e outra entidade, permite referencia-las.

>b)
~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
	"003",
    "Na minha opinião, é, uma obra prima",
    10,
	"003"
);

~~~
>c) O erro ocorreu pois o valor da chave estrangeira informada não existe, logo o programa não tem como fazer referência ao filme informado e por isso da erro.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`---`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

>d)
~~~SQL
ALTER TABLE Movie DROP COLUMN rating;
~~~

>e) 
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`---`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

#### QUESTÃO 2
>a) Essa tabela recebe dois valores, o id de um filme e o id de um ator, sendo assim, podemos criar uma relação entre essas duas tabelas, e esse é exatamente o propósito dessa tabela.

>b)
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id) VALUES(
	"003",
    "006"
);
~~~
>c) Este erro ocorreu pois estamos tentando criar uma relação com um ator que não existe, e como esse valor é necessário para a tabela, o sistema envia uma mensagem de erro.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`---`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

>d) O erro ocorreu pois este ator foi referenciado na tabela do MovieCast, então, para poder deletá-lo, será necessário remover a relação dele com a tabela MovieCast.
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`silveira-21814478-guilherme-lira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

#### QUESTÃO 3
>a) Primeiramente estamos passando a condição para fazer a relação de duas tabelas, e é exatamente isso que o comando INNER JOIN está fazendo. 

>b)
~~~SQL
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
~~~


