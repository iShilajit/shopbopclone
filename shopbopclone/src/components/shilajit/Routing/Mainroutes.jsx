import React from "react";
import { Route, Routes } from "react-router-dom";
import Example from "../Navbar";
import Home from "../Home";
import { Product } from "../Product";
import { Description } from "../Description";
import Order from "../../punam/Order";
import { Fav } from "../Fav";
import { Checkout } from "../Checkout";
import { Mens } from "../../sridhar/Mens";
import Multithings from "../../monika/accessories/Multithings";
import Bag from "../../monika/bagcomponents/Bag";
import { Signup } from "../Signup";
import { Login } from "../Login";


 const MainRoutes = () => {
    return(
        <>
        <Example/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productPage" element={<Product/>}/>
            <Route path="/fav" element={<Fav/>}/>
            <Route path="/productDescription" element={<Description/>}/>
            <Route path="/cart" element={<Order/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/Men" element={<Mens/>}/>
            <Route path="/Acc" element={<Multithings/>}/>
            <Route path="/bag" element={<Bag/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            </Routes>
        </>
    )
}
export default MainRoutes;