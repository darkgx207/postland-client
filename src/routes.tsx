import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyPosts } from "./pages/MyPosts";


export function MyRoutes() {
    return (
        <Routes>
          <Route index path="/" element={ <Home/> }/>
          <Route path="/my-posts" element={ <MyPosts /> }/>
          <Route path="/profile" />
        </Routes>
    )
}