import axios from "axios"
import { ReactNode, useState } from "react"
import { url } from "../../constants/contant"
import { sorteio } from "../../types/types"

export const Main = () => {

    const [loteria, setLoteria] = useState([])
    const [loteriaConcurso, setLoteriaConcurso] = useState([])
    const [concurso, setConcurso] = useState([])

    const getLoteria = async ():Promise<void> => {
        await axios.get(`${url}/loterias`)
            .then((res) => {
                    console.log(res.data)
                    setLoteria(res.data.id)
            })
            .catch ((err: any) => {
            console.log(err.response.data.message)
            })
        }

const getLoteriaConcurso = async () => {
    await axios.get(`${url}/loterias-concursos`)
        .then((res) => {
            console.log(res.data)
            setLoteriaConcurso(res.data)
        })
        .catch((err: any) => {
            console.log(err.response.data.message)
        })
}

const getConcursoId = async (id: number) => {
    await axios.get(`${url}/concursos/${id}`)
        .then((res) => {
            console.log(res.data)
            setConcurso(res.data)
        })
        .catch((err: any) => {
            console.log(err.response.data.message)
        })
}

return (
    <div>
        <select id="sorteio">
            <option value=""></option>
            <option value="MG">MEGA-SENA</option>
            <option value="QU">QUINA</option>
            <option value="LT">LOTOFACIL</option>
            <option value="LM">LOTOMANIA</option>
            <option value="TM">TIMEMANIA</option>
            <option value="DS">DIA DE SORTE</option>
        </select> */
        ESTÁ É A PAGINA PRINCIPAL
        <div>
            {getLoteria}
        </div>
    </div>
)
}
