import { useState,useEffect } from "react";
import "../styles/itemCard.css"


export default function ItemCard ({itemNumber,cartNumber,setCartNumber}){
    //takes item info number and shopping cart state 
    const [numberOfItems,setNumberofItems]=useState(0);
    const [fakeItem,setFakeItem]=useState({});
    const [error,setError]=useState(null);
    const [loading,setLoading] = useState(true);
    function handleNumberDecrease(){
        if(numberOfItems>0){
            setNumberofItems(numberOfItems-1);
        }
        
    }
    function handleNumberIncrease(){
        console.log(typeof numberOfItems)
        setNumberofItems(numberOfItems+1);
    }
    function handleNumberChange(e){
        console.log(typeof numberOfItems)
        console.log(typeof Number(e.target.value))
        setNumberofItems(Number(e.target.value))

    }
    function handleAddToCart(){
        console.log(typeof numberOfItems)
        console.log(typeof cartNumber)
        setCartNumber(cartNumber+numberOfItems);
    }
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+itemNumber)
        .then((response)=>response.json())
        .then((json)=>setFakeItem(json))
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false));
       },[])
       if(error) return <p>Error</p>
       if(loading) return <p>Loading</p>
    return (
        <div className="card">
            <div className="itemTitle">{fakeItem.title}</div>
            <img className="itemImage" src={fakeItem.image}/>
            <div className="itemCost">${fakeItem.price}</div>
            <div className="numberofItems">
                <button onClick={handleNumberDecrease}>-</button>
                <input type="number" value={numberOfItems} onChange={handleNumberChange}/>
                <button onClick={handleNumberIncrease}>+</button>
            </div>
            <button onClick={handleAddToCart}>add to cart</button>
            
        </div>
    )
}