import p1 from "../../../../assets/Menu/p1.png"

const Checkout = () => {
    return (
        <div className="checkout flex max-w-screen-lg mx-auto ">
            <div className="w-3/4 checkoutleftside">
                <from>
                    <div className=" space-y-3">
                        <h1>Checkout Details</h1>
                        <p>Enter your personal details to complete your purchase.</p>
                        <p>Gender</p>
                        <div className="flex ">
                            <h5>Phone</h5>
                            <input type="text" placeholder="Type Number" required className="border input-bordered w-full max-w-xs ml-[69px] " />
                        </div>
                        <div className="flex ">
                            <h5>Main Address</h5>
                            <input type="text" placeholder="Type Address" required className="border  input-bordered w-full max-w-xs ml-3 mb-5 " />
                        </div>
                    </div>
                    <hr className="mt-[34px] w-[80%] mb-[34px]" />
                    <p className="mb-4">Payment Methods</p>
                    <div>
                        <div className="flex ">
                            <h5>Card Number</h5>
                            <div className="flex">
                                <input type="text" placeholder="Type Card number" className="border  input-bordered w-full max-w-xs ml-3 mb-5 " />
                            </div>
                        </div>
                        <h5 className="mb-5">Or</h5>
                        <div className="flex ">
                            <button type="submit" className="border py-3 px-5 rounded-lg text-black font-semibold bg-gray-400 hover:text-white hover:bg-black">Cash on Delived</button>
                        </div>
                    </div>
                </from>
            </div>
            <div className="checkoutrightside">
                <p className="mb-12">Free delivery and free returns.</p>
                <div className="w-[250px] h-[350px] border cards-section mb-2 rounded-xl">
                    <div className="flex justify-center w-full   bg-[#796a6a]  rounded-lg"><img className="h-[180px]" src={p1} alt="" /></div>
                    <div className="p-5">
                        <div className="flex justify-between">
                            <h2>Mochacino Latte</h2>
                        </div>
                        <hr className="mt-2 mb-2" />
                        <div className="flex">
                            <p>Xl</p>
                            <p className="ml-5">4.5 | 3098 Sold</p>
                        </div>
                    </div>
                    <div className="flex justify-center"><button className=" hover:bg-black hover:text-white bg-gray-400 font-bold  border py-2 px-8 rounded-xl w-full">$10.63</button></div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;