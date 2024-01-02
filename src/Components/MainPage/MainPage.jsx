import { Outlet } from "react-router-dom";
import Navbar from "./Global/Navbar";


const MainPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainPage;