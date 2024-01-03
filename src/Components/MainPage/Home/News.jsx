import p1 from "../../../assets/Menu/Frame  (1).png"
import p2 from "../../../assets/Menu/Frem(2).png"
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
const News = () => {
    return (
        <div className="news mb-10">
            <h1>Our Latest News</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="w-[352px] h-[136px] border rounded-xl mb-2">
                    <div className="flex  ">
                        <img className="w-[172px] h-[136px] mr-4" src={p1} alt="" />
                        <div className="p-2">
                            <h2 className="mb-1">Indonesian Coffee Exports Reach IDR 16.44 Trillion</h2>
                            <div className="flex justify-between pb-4">
                                <p>Suara.com</p>
                                <p>18 Jul</p>
                            </div>
                            <hr className="mb-7" />
                            <button>Read More</button>
                        </div>
                    </div>

                </div>
                <div className="w-[352px] h-[136px] border rounded-xl mb-2">
                    <div className="flex  ">
                        <img className="w-[172px] h-[136px] mr-4" src={p1} alt="" />
                        <div  className="p-2">
                            <h2 className="mb-1">Indonesian Coffee Exports Reach IDR 16.44 Trillion</h2>
                            <div className="flex justify-between pb-4">
                                <p>Suara.com</p>
                                <p>18 Jul</p>
                            </div>
                            <hr className="mb-7" />
                            <button>Read More</button>
                        </div>
                    </div>

                </div>
                <div className="w-[352px] h-[136px] border rounded-xl mb-2">
                    <div className="flex  ">
                        <img className="w-[172px] h-[136px] mr-4" src={p1} alt="" />
                        <div  className="p-2">
                            <h2 className="mb-1">Indonesian Coffee Exports Reach IDR 16.44 Trillion</h2>
                            <div className="flex justify-between pb-4">
                                <p>Suara.com</p>
                                <p>18 Jul</p>
                            </div>
                            <hr className="mb-7" />
                            <button>Read More</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-end mr-20 mt-5">
               <div><button><FaArrowLeftLong className="text-base " /></button>
                <button className="ml-2"><FaArrowRight className="text-base" /></button></div>
            </div>

        </div>
    );
};

export default News;