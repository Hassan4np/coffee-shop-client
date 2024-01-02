import bannar from "../../../assets/Bannar/image 1.png"
import res from "../../../assets/Bannar/Resturent.jpg"

const Bannar = () => {
    return (
        <div className="w-full h-[786px] z-10 bg-cover flex  p-16 items-center text-white  " style={{ backgroundImage: `url('${res}')` }} >
            <div className="">
                <h1>LIFE IS NOT BETTER</h1>
                <h2>WITHOUT COFFEE</h2>
                <button>Order now</button>
            </div>

        </div>
    );
};

export default Bannar;