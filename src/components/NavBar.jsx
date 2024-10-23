import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import "../styles/NavBar.css"
export default function NavBar ({cartNumber,setCartNumber}){
    

    return (
        <div className="navbar">
            <Link to="homepage">Home Page</Link>
            <Link to="shoppage">Shop Page</Link>
            <ShoppingCart cartNumber={cartNumber} setCartNumber={setCartNumber}/>
        </div>
    )
}