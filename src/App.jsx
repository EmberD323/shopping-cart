import NavBar from "./components/NavBar";
import "./styles/App.css"

import { Link,Outlet } from "react-router-dom";

const App = () => {
//nav bar and outlet
  return (
    <>
      <NavBar/>
      
      
      <h2>Page clicked</h2>
      <Outlet />
    </>
  );
};

export default App;

