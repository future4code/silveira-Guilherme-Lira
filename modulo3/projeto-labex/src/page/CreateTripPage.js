// Formulário para o administrador criar uma nova viagem

import React, { useEffect, useState } from 'react'
import axios from "axios" 

const aluno = "Guilherme-Lira-Silveira"
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
const headers = {headers: {auth: localStorage.getItem("token")}}

export function CreateTripPage() {
    const [tripList, setTripList] = useState ([])

    return (
      <div>
        <h1> PÁGINAS PARA CADASTRAR NOVAS VIAGENS </h1>
        <form>
        <input
                    placeholder={"Nome"}
                    name={"name"}
                    // value={#}
                    // onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                    required
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    // defaultValue={""}
                    // onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    // value={#}
                    // onChange={onChange}
                    required
                    // min={stringToday}
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    // value={#}
                    // onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    // value={#}
                    // onChange={onChange}
                    required
                    min={50}
                />
        </form>
      </div>
    );
  }
  
  export default CreateTripPage;