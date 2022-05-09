import React from "react";
import { Route, Routes } from "react-router-dom";
import Example from "../Navbar";
import Home from "../Home";
import { Product } from "../Product";
import { Description } from "../Description";



 const MainRoutes = () => {
    return(
        <>
        <Example/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productPage" element={<Product/>}/>
            <Route path="/productDescription" element={<Description/>}/>
            </Routes>
        </>
    )
}
export default MainRoutes;