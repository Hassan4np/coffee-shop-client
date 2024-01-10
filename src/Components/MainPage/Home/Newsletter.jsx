
import res from "../../../assets/Menu/Rectangle 4137.png"
const Newsletter = () => {
    return (
        <div className="w-full h-[204px] rounded-2xl Newsletter z-10 relative px-10 py-7" style={{ backgroundImage: `url('${res}')` }}>
            <h1 className="py-2">Newsletter</h1>
            <p className="mb-12">Subscribe and get 20% off your first purchase</p>
            <div className="w-full relative">
                <input className="w-full  h-10 rounded-xl px-4" type="text" placeholder="Your email"  />
                <button className="right-2 absolute">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;