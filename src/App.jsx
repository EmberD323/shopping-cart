import NavBar from "./components/NavBar";
import "./styles/App.css"

import { Link,Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [cartNumber,setCartNumber] = useState(0);
//nav bar and outlet
  return (
    <div className="content">
      <NavBar cartNumber={cartNumber} setCartNumber={setCartNumber}/>
      <Outlet context={[cartNumber,setCartNumber]}/>
      
    </div>
  );
};

export default App;

