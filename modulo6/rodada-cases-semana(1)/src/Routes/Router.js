import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from '../Pages/Cart/cart'
import Feed from '../Pages/Feed/feed'
import Login from '../Pages/Login/login'
import Profile from '../Pages/Profile/profile'
import Restaurant from '../Pages/Restaurant/restaurant'
import SignUp from '../Pages/SignUp/signup'
import SignUpAddress from '../Pages/SignUpAddress/signupaddress'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signup/address' element={<SignUpAddress/>}/>
                <Route path='/feed' element={<Feed/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/feed/:restaurantId' element={<Restaurant/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router