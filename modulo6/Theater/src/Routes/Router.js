import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './../page/Home/Home';
import { Details } from './../page/Details/Details';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/movie/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router 