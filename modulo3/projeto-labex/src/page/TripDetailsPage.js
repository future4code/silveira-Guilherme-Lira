// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
import React, { useEffect, useState } from "react";
import { ContainerForm } from "../components/main/styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useProtectedPage } from '../components/main/Protect'

const aluno = 'Guilherme-Lira-Silveira'
const header = { headers: { auth: localStorage.getItem("token") } }

export function TripDetailsPage() {
    const navigate = useNavigate()
    const [detailsTrip, setDetailsTrip] = useState({
        candidates: [],
        approved: [],
    });
    const { id } = useParams();

    useProtectedPage()

    const getDetailsTrip = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`;
        axios
            .get(url, header)
            .then((res) => {
                setDetailsTrip(res.data.trip);
            })
            .catch((er) => {
                console.log(er.data);
            });
    };

    useEffect(() => {
        getDetailsTrip(id);
    }, []);


    return (
        <ContainerForm>
            <h1> Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</h1>
        </ContainerForm>
    )
}

export default TripDetailsPage;