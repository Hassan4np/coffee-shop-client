import res from "../../../assets/Bannar/Rectangle 4137.png"
import logo from "../../../assets/logo/damiun coffee shop 1.png"

const Subbannar = () => {
    return (
        <div  className="h-[154px] w-full rounded-3xl subbannar " style={{ backgroundImage: `url('${res}')` }}>
            <div className="flex text-white px-8  md:px-[70px] py-7">
              <div className=" grid sm:mr-3 lg:mr-20 h-20:"><img src={logo} alt="" className=" w-32 h-32 lg:w-20 lg:h-20" /></div>
               <div className="ml-2 flex justify-center items-center"> <p>At Damiun Coffee Shop, we take immense pride in crafting each cup of coffee with passion and precision. Our skilled baristas curate a diverse selection of specialty coffees sourced from the finest beans across the globe, ensuring every sip transports you to a world of unparalleled taste and bliss.</p></div>
            </div>
        
            
        </div>
    );
};

export default Subbannar;