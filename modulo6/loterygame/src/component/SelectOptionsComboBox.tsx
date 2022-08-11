import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { url } from "../constants/contant"
import { goToPage } from "../Routes/coordinator"
import { Select } from "../style"
import { sorteio } from "../types/types"

export const SelectOptionsComboBox = () => {

    const [loteria, setLoteria] = useState([])
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

    useEffect(() => {
        goToPage(navigate, selectOptions)
    }, [selectOptions])

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

    <Select name="valueSelect" onChange={changePage} value={selectOptions}>
                <option value="0">Escolha uma loteria:</option>
                {opcoesLoterias}
    </Select>
)}