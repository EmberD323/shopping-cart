import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
export default function NavBar ({cartNumber,setCartNumber}){
    

    return (
        <>
            <Link to="homepage">Home Page</Link>
            <Link to="shoppage">Shop Page</Link>
            <ShoppingCart cartNumber={cartNumber} setCartNumber={setCartNumber}/>
        </>
    )
}