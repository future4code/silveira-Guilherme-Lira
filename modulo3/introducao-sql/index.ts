/* > --- QUESTÃO 1 --- <

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

A) 
O Varchar é equivalente ao tipo String no JavaScript e o Date é o mesmo do JavaScript, é usado para datas.
Primary Key significa que estamos definindo ID como nossa chave primária, ou seja, é um valor único por cada Actor.
Not Null signifca que aqueles valores não podem ser vazios. 

B) 
SHOW DATABASES -> Mostra todo os databases disponíveis. (No meu caso mostrou duas databases, a do Guilherme-Silveira e uma básica que vem com o MySQL)
SHOW TABLES -> Mostra todas as tables que tem na database, no caso, apenas a de Actor.

C)
DESCRIBE mostra todas as variaveis/elementos que compoem a table de Actor que no caso sao: id, name, salary, birth_date, gender.
*/

/////////////////////////////////////////////////////

/* > --- QUESTÃO 2 --- <
B) 
"Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'"
Apareceu uma mensagem de erro informando que o id 002 já foi utilizado e como ele é uma chave primária, o banco de dados não permite que seja criado
um outro elemento utilizando uma mesma chave que já foi usada.

C)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
"Error Code: 1136. Column count doesn't match value count at row 1"
Esse erro apareceu por que só foi definida 3 das 5 variáveis. send o que os resultados que faltaram não pode ser Null. 

D)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  "Xuxa",
  400000,
  "1949-04-18", 
  "male"
);
"Error Code: 1364. Field 'name' doesn't have a default value"
Erro devido ao nome não ter sido digitado.

E)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
"Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1"
Erro aconteceu por que a data não foi digitada corretamente, faltou as aspas.
*/

///////////////////////////////////////////////////////////////

/* > --- QUESTÃO 3 --- <

A)
SELECT * FROM Actor where gender="female"

B)
SELECT salary FROM Actor where name="Tony Ramos"

C)
Neste caso, nenhum valor é retornado pois não tem nenhuma correspondência a ele na tabela, mas como é tecnicamente um tipo de variável 
que existe, o sistema permite que o código seja executado sem erros.

D)
SELECT id, name, salary from Actor WHERE salary>500000

E)
"Error Code: 1054. Unknown column 'nome' in 'field list'"
O problema ocorreu pois foi usado a palavra "nome" sendo que o correto é name.

*/

/* > --- QUESTÃO 4 --- <

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

A)
O código vai buscar autores que o nome começa com A ou J e o salario é maior do que 300000.

B)
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

C)
SELECT * FROM Actor
WHERE name LIKE "%G%";

D) 
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%g%") AND (salary between 350000 and 900000);
*/

/* > --- QUESTÃO 5 --- <

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)

- Esse é o código para criar a tabela de filmes, ela tem 5 variáveis, o id que é uma chave primária, título que é único e não vazio,
as outras são texto, data e um número.

D) 
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Minha mãe é uma peça",
    "Hermínia Amaral (Paulo Gustavo) é uma dona de casa de meia idade, divorciada do marido (Herson Capri) que a trocou por uma mulher mais jovem, Soraya (Ingrid Guimarães).",
    "2013-06-21",
    10
)
*/

/* > --- QUESTÃO 6 --- <

A) 
select id, title, rating from Movie where id = "003";

B)
select * from Movie where title = "minha mãe é uma peça"

C)
select id, title, synopsis from Movie where rating>7;

*/

/* > --- QUESTÃO 7 --- <

A) 
select * from Movie where title like "%vida%";

B)
SELECT * FROM Movie WHERE title LIKE "%Peça%" OR synopsis LIKE "%vida%";

C)
SELECT * FROM MOVIE WHERE release_date < "2022-06-06";

D)
SELECT * FROM MOVIEWHERE release_date < "2020-05-04" AND 
(title LIKE "%Peça%" OR synopsis LIKE "%Vida%") AND rating > 7;

*/
