
import res from "../../../assets/Bannar/Resturent.jpg"
import "./Global.scss"

const Bannar = () => {
    return (
        <div className="w-full h-[375px] z-10 bg-cover flex  p-16 items-center text-white mb-6  " style={{ backgroundImage: `url('${res}')` }} >
            <div className="bannar space-y-4">
                <h1>LIFE IS NOT BETTER</h1>
                <h2>WITHOUT COFFEE</h2>
                <button >Order now</button>
            </div>

        </div>
    );
};

export default Bannar;