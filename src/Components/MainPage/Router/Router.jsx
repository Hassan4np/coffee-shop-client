import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Home/Home";
import Error from "../Global/Error";



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
    ]
  },
]);


export { Mybrowser }