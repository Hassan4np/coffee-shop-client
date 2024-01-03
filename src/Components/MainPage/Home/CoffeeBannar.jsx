
import res from "../../../assets/Bannar/coffee.jpg"
const CoffeeBannar = () => {
    return (
        <div className="h-[238px] w-full bg-cover rounded-2xl coffeebannar mb-10 " style={{ backgroundImage: `url('${res}')` }}>
            <div className="w-[340px] h-[154px] ml-[57px] py-10">
                <h1>Request an order for your private party or event?</h1>
                <p>We are open to ordering party events such as weddings, celebrations, or other events</p>
                <button>Booking Now</button>
            </div>
            
        </div>
    );
};

export default CoffeeBannar;