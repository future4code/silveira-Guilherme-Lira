import axios from "axios"
import { BASE_URL } from "../Constants/url"

export const createComment = (body, clear, id, setIsLoading) => {
    setIsLoading(true)
      axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
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