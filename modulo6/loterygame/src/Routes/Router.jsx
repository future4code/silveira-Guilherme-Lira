import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DiaSorte } from "../pages/DiaSorte/DiaSorte"
import { LotoFacil } from "../pages/LotoFacil/LotoFacil"
import { Lotomania } from "../pages/Lotomania/Lotomania"
import { Mega } from "../pages/Mega/Mega"
import { Quina } from "../pages/Quina/Quina"
import { Timemania } from "../pages/Timemania/Timemania"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Mega/>}/>
                <Route path='/mega' element={<Mega/>}/>
                <Route path='/quina' element={<Quina/>}/>
                <Route path='/lotofacil' element={<LotoFacil/>}/>
                <Route path='/lotomania' element={<Lotomania/>}/>
                <Route path='/timemania' element={<Timemania/>}/>
                <Route path='/diasorte' element={<DiaSorte/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router 