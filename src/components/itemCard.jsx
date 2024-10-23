import { useState,useEffect } from "react";



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
        setNumberofItems(numberOfItems+1);
    }
    function handleNumberChange(e){
        setNumberofItems(Number(e.target.value))

    }
    function handleAddToCart(){
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
            <div className="numberOfItems">
                <button onClick={handleNumberDecrease}>-</button>
                <input type="number" value={numberOfItems} onChange={handleNumberChange}/>
                <button onClick={handleNumberIncrease}>+</button>
            </div>
            <button onClick={handleAddToCart} className="addToCart">Add to cart</button>
            
        </div>
    )
}