import axios from "axios";
import { BASE_URL } from "../Constants/url";
import { goToFeed, goToHomePage } from "../routes/coordinator";

export const login = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToFeed(navigate)
        
    })
    .catch((err) => { 
        alert(err.response.data.message)
        setIsLoading(false)
    })
}

export const logout = (navigate) => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
}

export const signUp = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToFeed(navigate)
    })
    .catch((err) => {
        alert("Falha ao concluir cadastro")
        setIsLoading(false)
    })
}