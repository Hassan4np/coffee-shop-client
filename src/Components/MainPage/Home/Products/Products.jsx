
import { Link } from "react-router-dom";
import p1 from "../../../../assets/Menu/p1.png"
const Products = () => {
    return (
        <div className="Products flex justify-between gap-[100px] ">
            <div className="w-1/4 border rounded-xl py-3 px-5">
                <div className="flex  justify-between">
                    <h1>Filter</h1>
                    <button>Reset</button>
                </div>
                <hr className="mt-3 mb-3" />
                <h1>Price</h1>
                <hr className="mt-3 mb-3" />
                <h1>Drink</h1>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text">Ice coffee</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text">Coffee</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text">Froute</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label  cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text text-start">Tea</span>
                    </label>
                </div>
                <hr className="mt-3 mb-3" />
                <div className="form-control">
                    <label className="label  cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text text-start">Noodles</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label  cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text text-start">Barger</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label  cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text text-start">Pizza</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label  cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text text-start">Porota</span>
                    </label>
                </div>
                <button className="py-3 px-4">See All</button>

            </div>
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Link to='/details' ><div className="w-[250px] h-[320px] border cards-section mb-2">
                    <div className="flex justify-center w-full   bg-[#796a6a]  rounded-lg"><img className="h-[180px]" src={p1} alt="" /></div>
                    <div className="p-5">
                        <div className="flex justify-between">
                            <h2>Espresso Ice Coffee</h2>
                            <h5>$10.00</h5>
                        </div>
                        <p>Ice Coffee</p>
                        <h6>4.5 | 3098 Sold</h6>
                    </div>
                </div></Link>
                <div className="w-[250px] h-[320px] border cards-section mb-2">
                    <div className="flex justify-center w-full   bg-[#796a6a]  rounded-lg"><img className="h-[180px]" src={p1} alt="" /></div>
                    <div className="p-5">
                        <div className="flex justify-between">
                            <h2>Mochacino Latte</h2>
                            <h5>$10.00</h5>
                        </div>
                        <p>Ice Coffee</p>
                        <h6>4.5 | 3098 Sold</h6>
                    </div>
                </div>
                <div className="w-[250px] h-[320px] border cards-section mb-2">
                    <div className="flex justify-center w-full   bg-[#796a6a]  rounded-lg"><img className="h-[180px]" src={p1} alt="" /></div>
                    <div className="p-5">
                        <div className="flex justify-between">
                            <h2>Cortado Ice Coffee</h2>
                            <h5>$10.00</h5>
                        </div>
                        <p>Ice Coffee</p>
                        <h6>4.5 | 3098 Sold</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;