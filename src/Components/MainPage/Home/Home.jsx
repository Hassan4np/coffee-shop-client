import Bannar from "../Global/Bannar";
import Subbannar from "../Global/Subbannar";
import CoffeeBannar from "./CoffeeBannar";
import OurProducts from "./OurProducts";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Subbannar></Subbannar>
            <OurProducts></OurProducts>
            <CoffeeBannar></CoffeeBannar>
           
        </div>
    );
};

export default Home;