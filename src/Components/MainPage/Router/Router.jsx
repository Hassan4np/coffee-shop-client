import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Home/Home";
import Error from "../Global/Error";
import Products from "../Home/Products/Products";
import ProductsDetails from "../Home/Products/ProductsDetails";



const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <Error></Error> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/details',
        element:<ProductsDetails></ProductsDetails>
      }
    ]
  },
]);


export { Mybrowser }