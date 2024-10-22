import { useEffect, useState } from "react";
import "../styles/Homepage.css";


export default function HomePage (){
    const [imageURL, setImageURL] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://picsum.photos/550/550",{
            mode:"cors"
        })
        .then((response)=>setImageURL(response.url))
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false));
       },[])
    
    if(error) return <p>Error</p>
    if(loading) return <p>Loading</p>
    // /- renders slowly use fetch instead
    return (
        <>
        <div className="imageContainer">
            <img src={imageURL} alt="Dummy image"/> 
            <img src={imageURL} alt="Dummy image"/> 
            <img src={imageURL} alt="Dummy image"/> 
            <img src={imageURL} alt="Dummy image"/> 
            <div className="brand">Brand Name</div>
        </div>
        
        </>
    )
}


