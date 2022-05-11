import axios from "axios"
import { BASE_URL } from "../Constants/url"

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      alert(res.data)
      clear()
      setIsLoading(false)
    })
    .catch((er) => {
      alert(er.response.message)
      setIsLoading(false)
    })
  }