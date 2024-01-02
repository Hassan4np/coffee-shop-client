import { FaShoppingBag } from "react-icons/fa";
import "./Home.scss"
import p1 from "../../../assets/Menu/p1.png"
import { Link } from "react-router-dom";
const OurProducts = () => {
    return (
        <div className="Products mt-10 mb-10">
            <h1>Our Products</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                <Link>
                    <div className="mb-7 w-[164px] h-[233px] bg-[#F4F4F4] rounded-2xl">
                        <div className=" space-y-1">
                            <div className="w-[164px] h-[187px] relative ">
                                <FaShoppingBag className="text-lg absolute top-4 right-4  " />
                                <img className="px-4 py-3" src={p1} alt="" />
                            </div>
                            <div className="flex px-1 ">
                                <h5 className="mr-4">Espresso Ice Coffee</h5>
                                <h6>$10.20</h6>
                            </div>
                            <p className="px-1">Category: <span className="font-medium">Ice Coffee</span></p>
                        </div>
                    </div>
                </Link>
                <div className="mb-7 w-[164px] h-[233px] bg-[#F4F4F4] rounded-2xl">
                    <div className=" space-y-1">
                        <div className="w-[164px] h-[187px] relative ">
                            <FaShoppingBag className="text-lg absolute top-4 right-4  " />
                            <img className="px-4 py-3" src={p1} alt="" />
                        </div>
                        <div className="flex px-1 ">
                            <h5 className="mr-4">Espresso Ice Coffee</h5>
                            <h6>$10.20</h6>
                        </div>
                        <p className="px-1">Category: <span className="font-medium">Ice Coffee</span></p>
                    </div>
                </div>
                <div className="mb-7 w-[164px] h-[233px] bg-[#F4F4F4] rounded-2xl">
                    <div className=" space-y-1">
                        <div className="w-[164px] h-[187px] relative ">
                            <FaShoppingBag className="text-lg absolute top-4 right-4  " />
                            <img className="px-4 py-3" src={p1} alt="" />
                        </div>
                        <div className="flex px-1 ">
                            <h5 className="mr-4">Espresso Ice Coffee</h5>
                            <h6>$10.20</h6>
                        </div>
                        <p className="px-1">Category: <span className="font-medium">Ice Coffee</span></p>
                    </div>
                </div>
                <div className="mb-7 w-[164px] h-[233px] bg-[#F4F4F4] rounded-2xl">
                    <div className=" space-y-1">
                        <div className="w-[164px] h-[187px] relative ">
                            <FaShoppingBag className="text-lg absolute top-4 right-4  " />
                            <img className="px-4 py-3" src={p1} alt="" />
                        </div>
                        <div className="flex px-1 ">
                            <h5 className="mr-4">Espresso Ice Coffee</h5>
                            <h6>$10.20</h6>
                        </div>
                        <p className="px-1">Category: <span className="font-medium">Ice Coffee</span></p>
                    </div>
                </div>
                <div className="mb-7 w-[164px] h-[233px] bg-[#F4F4F4] rounded-2xl">
                    <div className=" space-y-1">
                        <div className="w-[164px] h-[187px] relative ">
                            <FaShoppingBag className="text-lg absolute top-4 right-4  " />
                            <img className="px-4 py-3" src={p1} alt="" />
                        </div>
                        <div className="flex px-1 ">
                            <h5 className="mr-4">Espresso Ice Coffee</h5>
                            <h6>$10.20</h6>
                        </div>
                        <p className="px-1">Category: <span className="font-medium">Ice Coffee</span></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center "><button>View All</button>
            </div>

        </div>
    );
};

export default OurProducts;