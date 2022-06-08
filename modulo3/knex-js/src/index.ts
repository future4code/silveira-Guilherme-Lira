import { Request, Response } from "express"
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { count } from "console";

// A) Ele devolve pra gente o resultado da query e outras informações

const app = express();

app.use(express.json());
app.use(cors());

// SERVODOR

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Questao 1

// b
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"`)
  return result[0]
}

// (async () => {
//   console.log(await getActorByGender('Tony Ramos') )
// })()


// c
const getActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT (*) FROM Actor WHERE gender = '${gender}'
  `)
  
	return result[0][0]
}

// (async () => {
//   console.log(await getActorByGender('female') )
// })()

// Questão 2

// a)
const updateActor = async (id: string, salary: string): Promise<any> => {
  const result = await connection.raw(`
  UPDATE Actor SET salary="${salary}" WHERE id = ${id};`)
  return result[0]
}

// (async () => {
//   console.log(await updateActor("001",'9'))
// })()

// (async () => {
//   console.log(await getActorByName("Tony Ramos"))
// })()


// b)

const deleteActor = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  DELETE FROM Actor WHERE id=${id};
  `)
  return result[0]
}

// (async () => {
//   console.log(await deleteActor("003"))
// })()

// c)

const averageGenderSalary = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT avg(salary) FROM Actor where gender='${gender}';
  `)
  
	return result[0][0]
}

// (async () => {
//   console.log(await averageGenderSalary('female') )
// })()

// QUESTAO 3

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


const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)

  const count = result[0][0].count
  return count
}

// app.get("/actor", async (req: Request, res: Response) => {
//   try {
//     const gender = req.query.gender
//     const count = await countActors(gender as string)

//     res.status(200).send({quantity: count})
//   } catch (error:any) {
//     res.status(400).send(error.message)
//   }
// })


// QUESTAO 4

app.put("/actor", async (req: Request, res: Response) => {
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