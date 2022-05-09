import axios from "axios";
import { BASE_URL } from "../Constants/url";
import { goToFeed } from "../routes/coordinator";

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
    })
    .catch((err) => alert("Falha no login"))
}