import "./styles/App.css"

import { Link,Outlet } from "react-router-dom";

const App = () => {
//nav bar and outlet
  return (
    <>
      <Link to="homepage">Home Page</Link>
      <Link to="shoppage">Shop Page</Link>
      
      <h2>Page clicked</h2>
      <Outlet />
    </>
  );
};

export default App;

