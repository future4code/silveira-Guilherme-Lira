import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "../../constants/contant"
import { Circle, LeftContainerTime, RightContainer, MainPage, MegaTitle, ConcursoText, IdDate, Select } from "../../style"
import { sorteio } from "../../types/types"

export const Timemania = () => {

    const [loteria, setLoteria] = useState([])
    const [loteriaConcurso, setLoteriaConcurso] = useState([])
    const [concurso, setConcurso] = useState([])
    const [numbers, setNumbers] = useState([])
    const [concursoId, setConcursoId] = useState('')
    const [concursoDate, setConcursoDate] = useState('')

    const getLoteria = () => {
        axios.get(`${url}/loterias`)
            .then((res) => {
                setLoteria(res.data)
            })
            .catch((err: any) => {
                console.log(err.response.data.message)
            })
    }

    useEffect(() => {
        getLoteria()
    }, [])

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
                setNumbers(res.data.numeros)
                setConcursoId(res.data.id)
                setConcursoDate(res.data.data)
            })
            .catch((err: any) => {
                console.log(err.response.data.message)
            })
    }

    useEffect(() => {
        getLoteriaConcurso()
    }, [])

    useEffect(() => {
        getConcursoId(1622)
    }, [])

    const numbersSorted = numbers.length > 0 && numbers.map((number: number[]) => {
        return (
            <RightContainer>
                <Circle>
                    <h1>{number}</h1>
                </Circle>
            </RightContainer>
        )
    });

    const opcoesLoterias = loteria.length > 0 && loteria.map((loteria: sorteio) => {
        return (
            <option key={loteria.id} value={loteria.id}>
                {loteria.nome}
            </option>
        );
    });


    return (
        <MainPage>
            <LeftContainerTime>
                <Select name="valueSelect">
                    <option value="">Escolha uma loteria:</option>
                    {opcoesLoterias}
                </Select>

                <MegaTitle> TIMEMANIA </MegaTitle>
                <ConcursoText> CONCURSO </ConcursoText>
                <IdDate>{concursoId} <br></br>
                    {concursoDate}</IdDate>
            </LeftContainerTime>

            <RightContainer>
                {numbersSorted}
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </RightContainer>
        </MainPage>
    )
}
