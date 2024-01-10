import Rating from "react-rating";
import p1 from "../../../../assets/Menu/p1.png"
import ProgressBar from "@ramonak/react-progress-bar";
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'flowbite-react';

import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";


import p2 from "../../../../assets/Menu/shop.png"

const ProductsDetails = () => {
    return (
        <div className="flex details">
            <div className=" mr-[40px] imgdetails ">
                <div className="w-[316px] h-[310px] border flex justify-center items-center bg-[#F4F4F4] rounded-xl" >
                    <img src={p1} className="w-[217px] h-[234px] py-[38px] px-[46px]" alt="" />
                    {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                        </Carousel>
                    </div> */}


                </div>
                <div className="mt-6 border p-5 rounded-xl ">
                    <div className="flex justify-around">
                        <div className="flex ">
                            <img className=" mr-1 w-6 h-6 mt-2" src={p2} alt="" />
                            <h5>Damiun Coffee Shop</h5>
                        </div>
                        <button>View on Maps </button>
                    </div>
                    <hr className="mt-5 mb-5" />
                    <h4 className="ratingreview">Rating & Reviews</h4>
                    <div className="flex mt-5">
                        <div className="mr-2 w-[50%] ratingname ">
                            <h1>3.5</h1>
                            <Rating
                                className="text-yellow-500 mr-4 text-[14px]"
                                placeholderRating={3.5}
                                emptySymbol={<IoIosStarOutline />}
                                placeholderSymbol={<IoIosStar />}
                                fullSymbol={<IoIosStarHalf />}
                            />
                            <p>108 Ratings</p>
                        </div>
                        <div className=" w-[100%] flex ">
                            <h6 className="w-[10%] text-[16px] font-medium">5</h6>
                            <ProgressBar className="mb-2 mt-2 w-[90%]" bgColor='green' height='10px' width='80%' completed={3.5} maxCompleted={5} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="flex-1 detailssection">
                <div>
                    <h1>Espresso Ice Coffee</h1>
                    <div className="flex ">
                        <Rating
                            className="text-yellow-500 mr-4 text-xl"
                            placeholderRating={3.5}
                            emptySymbol={<IoIosStarOutline />}
                            placeholderSymbol={<IoIosStar />}
                            fullSymbol={<IoIosStarHalf />}
                        />
                        <p className="rating">4.5 <span> | 2000 Reviews | 5034 Sold</span> </p>
                    </div>
                    <div className="flex ">
                        <h2>$10.00 <span >$15.00</span></h2>

                    </div>
                    <hr className="mb-4 w-[80%]" />
                    <h4>Size</h4>

                    <div className="sizebutton">
                        <button>S</button>
                        <button className="ml-2">M</button>
                        <button className="ml-2">L</button>
                        <button className="ml-2">XL</button>
                    </div>
                    <h4>Service</h4>
                    <div className="servicebutton">
                        <button>Sent with Courier</button>
                        <button className="ml-2">Drive Thru</button>
                        <button className="ml-2">In Place</button>
                    </div>
                </div>
                <div className="flex allcart">
                    <div className="quentitybutton flex space-x-5 mr-5">
                        <button>-</button>
                        <h6>1</h6>
                        <button>+</button>
                    </div>
                    <button className="cartbutton">+ Add to Cart</button>
                </div>
                <h4 className="mb-2">Descriptions</h4>
                <p className="description 4 w-[80%]">Refreshing iced coffee espresso, the perfect blend of smooth espresso and chilled goodness. Enjoy a rich and invigorating coffee experience, served over ice for a delightful summer treat. Satisfy your cravings and stay cool with every sip. Limited time offer, get yours now!</p>
                <h4>Product Details</h4>
                <div className="lilist">

                    <li>Water</li>
                    <li>Suger</li>
                    <li>Beans</li>
                    <li>Ice</li>
                </div>

            </div>
        </div>
    );
};

export default ProductsDetails;