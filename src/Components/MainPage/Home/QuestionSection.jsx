
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const QuestionSection = () => {
    return (
        <div className='mb-10'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-[253px] h-[351px] swiper border  rounded-xl'>
                        <div className='px-4 py-7'>
                        <div className='h-[217px] '><h1>“We highly recommend ordering Damiun Coffee Shop for your event, we have tried it and we are satisfied.”</h1></div>
                            <div className='flex'>
                                <div className="avatar mr-3">
                                    <div className="w-10 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <h6>Anandya Mustika</h6>
                                    <p>Sr. Manager at Digital Agency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[253px] h-[351px] swiper border  rounded-xl'>
                        <div className='px-4 py-7'>
                        <div className='h-[217px] '><h1>“We highly recommend ordering Damiun Coffee Shop for your event, we have tried it and we are satisfied.”</h1></div>
                            <div className='flex'>
                                <div className="avatar mr-3">
                                    <div className="w-10 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <h6>Anandya Mustika</h6>
                                    <p>Sr. Manager at Digital Agency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[253px] h-[351px] swiper border  rounded-xl'>
                        <div className='px-4 py-7'>
                        <div className='h-[217px] '><h1>“We highly recommend ordering Damiun Coffee Shop for your event, we have tried it and we are satisfied.”</h1></div>
                            <div className='flex'>
                                <div className="avatar mr-3">
                                    <div className="w-10 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <h6>Anandya Mustika</h6>
                                    <p>Sr. Manager at Digital Agency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[253px] h-[351px] swiper border  rounded-xl'>
                        <div className='px-4 py-7'>
                        <div className='h-[217px] '><h1>“We highly recommend ordering Damiun Coffee Shop for your event, we have tried it and we are satisfied.”</h1></div>
                            <div className='flex'>
                                <div className="avatar mr-3">
                                    <div className="w-10 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <h6>Anandya Mustika</h6>
                                    <p>Sr. Manager at Digital Agency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
              
            </Swiper>
        </div>
    );
};

export default QuestionSection;