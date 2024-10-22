import App from '../App.jsx';
import ShopPage from '../components/Shoppage.jsx';
import HomePage from '../components/Homepage.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    children:[
      { index: true, element: <HomePage /> },
      {path: "homepage",element: <HomePage/>},
      {path: "shoppage",element: <ShopPage />},
      
    ]
  },
];
export default routes;