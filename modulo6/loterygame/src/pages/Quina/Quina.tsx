import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SelectOptionsComboBox } from "../../component/SelectOptionsComboBox"
import { url } from "../../constants/contant"
import { goToPage } from "../../Routes/coordinator"
import { Circle, LeftContainerQuina, RightContainer, MainPage, MegaTitle, ConcursoText, IdDate, Select } from "../../style"
import { concurso, sorteio } from "../../types/types"

export const Quina = () => {

    const [loteria, setLoteria] = useState([])
    const [loteriaConcurso, setLoteriaConcurso] = useState([])
    const [concurso, setConcurso] = useState([])
    const [numbers, setNumbers] = useState([])
    const [concursoId, setConcursoId] = useState('')
    const [concursoDate, setConcursoDate] = useState('')
    const [selectOptions, setSelectOptions] = useState('')
    const navigate = useNavigate()

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
        getLoteria()
        getLoteriaConcurso()
        getConcursoId(5534)
    }, [])

    // useEffect(() => {
    //     goToPage(navigate, selectOptions)
    // }, [selectOptions])


    const numbersSorted = numbers.length > 0 && numbers.map((number: number[], index) => {
        return (
            <RightContainer key={index}>
                <Circle>
                    <h1>{number}</h1>
                </Circle>
            </RightContainer>
        )
    });

    const opcoesLoterias = loteria.length > 0 && loteria.map((loteria: sorteio) => {
        return (
            <option key={loteria.id} value={loteria.nome.replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        }>
                {loteria.nome}
            </option>
        );
    });


    return (
        <MainPage>
            <LeftContainerQuina>

                <MegaTitle> QUINA </MegaTitle>
                <ConcursoText> CONCURSO </ConcursoText>
                <IdDate>{concursoId} <br></br>
                    {concursoDate}</IdDate>
            </LeftContainerQuina>

            <RightContainer>
                {numbersSorted}
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </RightContainer>
        </MainPage>
    )
}
