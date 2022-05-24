import { Login } from "../page/Login/Login"
import { SignUp } from "../page/SignUp/SignUp";
import { Post } from "../page/Post/Post"
import { Feed } from "../page/Feed/Feed"
import { Error } from "../page/Error/Error"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={< SignUp />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/feed" element={<Feed />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    )
} 