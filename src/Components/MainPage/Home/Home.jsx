import Bannar from "../Global/Bannar";
import Subbannar from "../Global/Subbannar";
import CoffeeBannar from "./CoffeeBannar";
import News from "./News";
import OurProducts from "./OurProducts";
import QuestionSection from "./QuestionSection";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Subbannar></Subbannar>
            <OurProducts></OurProducts>
            <CoffeeBannar></CoffeeBannar>
            <QuestionSection></QuestionSection>
            <News></News>
           
        </div>
    );
};

export default Home;