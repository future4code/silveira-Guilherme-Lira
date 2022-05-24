import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator"

export function useProtectedPage() {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            goToHomePage(navigate)
        }
    }, [navigate])
}

  export default useProtectedPage;