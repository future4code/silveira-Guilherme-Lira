import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { url } from "../../constants/contant"
import { goToPage } from "../../Routes/coordinator"
import { CircleMania, LeftContainerLotomania, RightContainer, MainPage, MegaTitle, ConcursoText, IdDate, Select } from "../../style"
import { sorteio } from "../../types/types"

export const Lotomania = () => {

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
        getConcursoId(2167)
    }, [])

    // useEffect(() => {
    //     goToPage(navigate, selectOptions)
    // }, [selectOptions])


    const numbersSorted = numbers.length > 0 && numbers.map((number: number[], index) => {
        return (
            <RightContainer key={index}>
                <CircleMania>
                    <h1>{number}</h1>
                </CircleMania>
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

    const changePage = (event: any) => {
        setSelectOptions(event.target.value)
    }


    return (
        <MainPage>
            <LeftContainerLotomania>
                
                <Select name="valueSelect" onChange={changePage} value={selectOptions}>
                    <option value="">Escolha uma loteria:</option>
                    {opcoesLoterias}
                </Select>

                <MegaTitle> LOTOMANIA </MegaTitle>
                <ConcursoText> CONCURSO </ConcursoText>
                <IdDate>{concursoId} - {concursoDate}</IdDate>
            </LeftContainerLotomania>

            <RightContainer>
                {numbersSorted}
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </RightContainer>
        </MainPage>
    )
}
