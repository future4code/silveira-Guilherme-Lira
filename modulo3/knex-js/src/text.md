# QUESTÕES DE KNEX

#### QUESTÃO 1 
>a) O raw devolve o resultado da query e outras informações do banco do jeito que o mySQL devolve.
>b)
~~~Typescript
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"`)
  return result[0]
}
~~~
>c)
~~~Typescript
const getActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT (*) FROM Actor WHERE gender = '${gender}'`)
  return result[0][0]
}
~~~
#### QUESTÃO 2
>a)
~~~Typescript
const updateActor = async (id: string, salary: string): Promise<any> => {
  const result = await connection.raw(`
  UPDATE Actor SET salary="${salary}" WHERE id = ${id};`)
  return result[0]
}
(async () => {
  console.log(await updateActor("001",'9'))
})()
~~~
>b)
~~~Typescript
const deleteActor = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  DELETE FROM Actor WHERE id=${id};
  `)
  return result[0]
}

(async () => {
  console.log(await deleteActor("003"))
})()
~~~
>c)
~~~typescript
const averageGenderSalary = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT avg(salary) FROM Actor where gender='${gender}';
  `)
  
	return result[0][0]
}

(async () => {
  console.log(await averageGenderSalary('female') )
})()
~~~

#### QUESTÃO 3
>a)
~~~typescript
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = "${id}"`)
  return result[0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~
>b)
~~~typescript
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)

  const count = result[0][0].count
  return count
}

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender
    const count = await countActors(gender as string)

    res.status(200).send({quantity: count})
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})
~~~
#### QUESTÃO 4
>a)
~~~typescript
app.post("/actor", async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const salary = req.body.salary;
    await updateActor(id,salary)

    res.status(200).send("Deu bom");
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~
>b)
~~~typescript
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteActor(id)

    res.status(200).send("Deu bom!!");
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~