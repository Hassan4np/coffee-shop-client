import Bannar from "../Global/Bannar";
import Subbannar from "../Global/Subbannar";
import CoffeeBannar from "./CoffeeBannar";
import Footer from "./Footer";
import News from "./News";
import Newsletter from "./Newsletter";
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
            < Newsletter></Newsletter>
            <Footer></Footer>

        </div>
    );
};

export default Home;