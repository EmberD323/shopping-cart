import { useOutletContext } from "react-router-dom";
import ItemCard from "./itemCard";
export default function ShopPage (){
    const [cartNumber,setCartNumber] = useOutletContext();
    return (
        <>
            <div className="cardContainer">
                <ItemCard itemNumber={1} cartNumber={cartNumber} setCartNumber={setCartNumber}/>
                <ItemCard itemNumber={2} cartNumber={cartNumber} setCartNumber={setCartNumber}/>
                <ItemCard itemNumber={3} cartNumber={cartNumber} setCartNumber={setCartNumber}/>
                <ItemCard itemNumber={4} cartNumber={cartNumber} setCartNumber={setCartNumber}/>
                <ItemCard itemNumber={5} cartNumber={cartNumber} setCartNumber={setCartNumber}/>
                <ItemCard itemNumber={6} cartNumber={cartNumber} setCartNumber={setCartNumber}/>
            </div>
            <p>This is the Shop Page</p>
        </>
    )
}