import { FaShoppingBag } from "react-icons/fa";
import "./Home.scss"
import p1 from "../../../assets/Menu/p1.png"
import { Link } from "react-router-dom";
import useAllProducts from "../Hook/useAllProducts";
const OurProducts = () => {
    const [data,isLoading,refetch] = useAllProducts();
    if(isLoading){
        return <h1 className="text-5xl">Loading...</h1>
    }
    console.log(data)
    return (
        <div className="Products mt-10 mb-10">
            <h1>Our Products</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data?.map(item => <Link key={item._id} to={`/details/${item?._id}`}>
                    <div className="w-[250px] h-[320px] border cards-section mb-2">
                        <div className="flex justify-center w-full   bg-[#796a6a]  rounded-lg"><img className="h-[180px]" src={item?.img[0]} alt="" /></div>
                        <div className="p-5">
                            <div className="flex justify-between">
                                <h2>{item?.name}</h2>
                                <h5>${item?.price}</h5>
                            </div>
                            <p>Ice Coffee</p>
                            <h6>{item?.rating} | 3098 Sold</h6>
                        </div>
                    </div></Link>)}
              
            </div>
     
            <div className="flex justify-center mt-10 "><button>View All</button>
            </div>

        </div>
    );
};

export default OurProducts;