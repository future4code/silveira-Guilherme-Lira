# INTRODUÇÃO A AUTENTICAÇÃO

#### QUESTÃO 1 
>a) O comando "DROP COLUMN" vai excluir a coluna mencionada logo após ela, no caso do exercício, a coluna "salario" vai ser excluida. 
~~~SQL
ALTER TABLE Actor DROP COLUMN salary;
~~~
>b) O comando change, neste caso, vai alterar a coluna "gender" para "sex" (uma coluna que já existe) e alterar o número de caractéres da string para 6.
~~~SQL
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~
>c) Neste caso, como foi repetido o mesmo nome para a coluna, a única coisa que vai ser alterado é o tipo para uma string de 255 caractéres. 
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~
>d)
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~
#### QUESTÃO 2
>a)  
~~~SQL
UPDATE Actor SET name = "Antonio Fagundez", birth_date='2022-02-02' WHERE id = "003";
~~~
>b)  
~~~SQL
UPDATE Actor SET name="JULIANA PAES" WHERE name="Juliana Paes";
UPDATE Actor SET name="Juliana Paes" WHERE name="JULIANA PAES";
~~~
>c) 
~~~SQL
UPDATE Actor SET name = "Lady Gaga", birth_date = "2022-06-07", salary = 10000045, gender 
="female" WHERE id = "005";
~~~
>d) No caso, o programa não alega nenhum erro mas também não chega a fazer nenhuma alteração pois não existe essa query.
~~~SQL
UPDATE Actor SET name = "Demi Lovato" WHERE id = "009";
~~~
#### QUESTÃO 3
>a)
~~~SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
~~~
>b)
~~~SQL
DELETE FROM Actor WHERE gender = "male" and salary>1000000;
~~~
#### QUESTÃO 4
>a)
~~~SQL
SELECT max(salary) FROM Actor;
~~~
>b)
~~~SQL
SELECT min(salary) FROM Actor where gender='female';
~~~
>c)
~~~SQL
SELECT COUNT(*) FROM Actor WHERE gender='female';
~~~
>d)
~~~SQL
SELECT SUM(salary) FROM Actor
~~~
#### QUESTÃO 5
>a) O comando vai fazer a contagem dos queries de cada gender e dividir ele em grupos.
~~~SQL
SELECT COUNT(*), gender FROM Actor GROUP BY gender
~~~
>b)
~~~SQL
SELECT id, name FROM Actor ORDER BY name DESC;
~~~
>c)
~~~SQL
SELECT * FROM Actor ORDER BY salary;
~~~
>d)
~~~SQL
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
~~~
>e)
~~~SQL
SELECT avg(salary) FROM Actor where gender='female';
~~~
#### QUESTÃO 6
>a) 
~~~SQL
ALTER TABLE Movie ADD playing_limit_date DATE;
~~~
>b) 
~~~SQL
ALTER TABLE Movie CHANGE rating rating FLOAT;
~~~
>c) 
~~~SQL
UPDATE Movie SET playing_limit_date = current_date() WHERE id = "001";
UPDATE Movie SET playing_limit_date = "1990-12-24" WHERE id = "002";
~~~
>d) O comando não mostra nenhum erro mas também não faz nenhuma alteração já que a linha não existe mais. 
~~~SQL
DELETE FROM Movie WHERE id = "001";
UPDATE Movie SET synopsis = "Sinopse de teste" WHERE id = "001";
~~~
#### QUESTÃO 7
>a) 
~~~SQL
SELECT COUNT(*) FROM Movie WHERE rating>7.5;
~~~
>b) 
~~~SQL
SELECT avg(rating) FROM Movie;
~~~
>c) 
~~~SQL
SELECT COUNT(*) FROM Movie;
~~~
>d) 
~~~SQL
SELECT COUNT(*) FROM Movie WHERE playing_limit_date >= curdate();
~~~
>e) 
~~~SQL
SELECT * FROM Movie ORDER BY rating DESC LIMIT 1;
~~~
>f) 
~~~SQL
SELECT * FROM Movie ORDER BY rating ASC LIMIT 1;
~~~
#### QUESTÃO 8
>a) 
~~~SQL
SELECT * FROM Movie ORDER BY title;
~~~
>b) 
~~~SQL
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
~~~
>c) 
~~~SQL
SELECT * FROM Movie WHERE release_date < curdate() ORDER BY release_date DESC LIMIT 3;
~~~
>d) 
~~~SQL
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
~~~