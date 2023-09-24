import React from 'react'
import { Carousel } from 'antd';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

function Home() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <>
            <div className=" p-2">
                <Carousel autoplay autoplaySpeed={2000}>
                    <div>
                        <img style={{borderRadius: '8px'}} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/89c26b04d640c7a9.jpg?q=20" alt="" />
                    </div>
                    <div>
                        <img style={{borderRadius: '8px'}} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7961400ee1bd2961.jpg?q=20" alt="" />
                    </div>
                    <div>
                        <img style={{borderRadius: '8px'}} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0819129bd1a3c342.jpg?q=20" alt="" />
                    </div>
                    <div>
                        <img style={{borderRadius: '8px'}} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4529fd434a85c683.jpg?q=20" alt="" />
                    </div>
                </Carousel>
            </div>
            <div className="w-full h-[0.5px] bg-gray-400 my-2 mb-3"></div>
            <div className='max-w-full px-9'> 
                <Slider {...settings}>
                    <div className=''>
                        <Link to="/product">
                            <div className=" p-3 bg-white rounded-sm border-2">
                                <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                    <img className=' w-56 h-60 object-contain m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/q/v/u/-original-imagzzsghxbzhzph.jpeg?q=70" alt="" />
                                </div>
                                <div className=" text-center mt-3">
                                    <p className=' text-xl font-semibold'>Best of Trimmers</p>
                                    <p className=' text-lg'>From ₹399</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className=" p-3 bg-white rounded-sm border-2">
                            <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                <img className=' w-56 h-60 object-contain m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/300/300/xif0q/computer/n/i/u/-original-imagpa5fbvqzk2xn.jpeg?q=90" alt="" />
                            </div>
                            <div className=" text-center mt-3">
                                <p className=' text-xl font-semibold'>Top Laptop Deals</p>
                                <p className=' text-lg'>From ₹22999</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" p-3 bg-white rounded-sm border-2">
                            <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                <img className=' w-56 h-60 object-contain  m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/612/612/l26hdow0/smartwatch/j/r/o/1-4-sm-r870nzkainu-android-samsung-yes-original-imagdhf2ahk7nvmf.jpeg?q=70" alt="" />
                            </div>
                            <div className=" text-center mt-3">
                                <p className=' text-xl font-semibold'>Top Smart Watches</p>
                                <p className=' text-lg'>From ₹1499</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" p-3 bg-white rounded-sm border-2">
                            <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                <img className='w-56 h-60 object-contain  m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/612/612/l1zc6fk0/speaker/home-theatre/l/y/g/v7171-vox-original-imagdfey4y3ymgj3.jpeg?q=70" alt="" />
                            </div>
                            <div className=" text-center mt-3">
                                <p className=' text-xl font-semibold'>Home Theaters</p>
                                <p className=' text-lg'>From ₹999</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" p-3 bg-white rounded-sm border-2">
                            <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                <img className='w-56 h-60 object-contain  m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/612/612/kwb07m80/kit/b/3/p/dsc-economy-full-size-ideal-for-15-21-years-complete-dsc-original-imag9yrqywzkuyuf.jpeg?q=70" alt="" />
                            </div>
                            <div className=" text-center mt-3">
                                <p className=' text-xl font-semibold'>Sports Items</p>
                                <p className=' text-lg'>From ₹599</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" p-3 bg-white rounded-sm border-2">
                            <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                <img className='w-56 h-60 object-contain  m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/612/612/l5h2xe80/watch/z/a/o/1-pe000008f-peter-england-men-original-imagg59g6rhfdn8h.jpeg?q=70" alt="" />
                            </div>
                            <div className=" text-center mt-3">
                                <p className=' text-xl font-semibold'>Best of Watches</p>
                                <p className=' text-lg'>From ₹999</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" p-3 bg-white rounded-sm border-2">
                            <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                <img className='w-56 h-60 object-contain  m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/i/2/10-wind-04cdgrey-10-asian-dark-grey-original-imags2fhrjaapvyf.jpeg?q=70" alt="" />
                            </div>
                            <div className=" text-center mt-3">
                                <p className=' text-xl font-semibold'>Best Deals in Shoes</p>
                                <p className=' text-lg'>From ₹499</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" p-3 bg-white rounded-sm border-2">
                            <div className=" w-full bg-slate-300 bg-blend-multiply p-2 rounded">
                                <img className='w-56 h-60 object-contain m-auto mix-blend-multiply' src="https://rukminim2.flixcart.com/image/612/612/ksqeky80/headphone/3/l/n/rma2011-realme-original-imag68fqfqbydmrx.jpeg?q=70" alt="" />
                            </div>
                            <div className=" text-center mt-3">
                                <p className=' text-xl font-semibold'>Earphones</p>
                                <p className=' text-lg'>From ₹999</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className=" px-8 my-14">
                <div className=" flex gap-9 justify-between">
                    <div className=" w-[400px] min-h-[420px] p-6 bg-white rounded-lg relative">
                        <p className=' text-xl font-bold'>Computer Accessories | Starting From ₹499</p>
                        <div className=" flex justify-between mt-7">
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/GW/Sep/01_SET1_pc_186x116._SY116_CB577849250_.jpg" alt="" />
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/GW/Sep/03_SET1_pc_186x116._SY116_CB577849250_.jpg" alt="" />
                        </div>
                        <div className=" flex justify-between mt-7">
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/GW/Sep/04_SET1_pc_186x116._SY116_CB577849250_.jpg" alt="" />
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/GW/Sep/02_SET1_pc_186x116._SY116_CB577849250_.jpg" alt="" />
                        </div>
                        <p className=' text-blue-500  text-lg absolute bottom-6'>Explor All</p>
                    </div>
                    <div className=" w-[400px] min-h-[420px] p-6 bg-white rounded-lg relative">
                        <p className=' text-xl font-bold'>Appliances for your home | Up to 55% off</p>
                        <div className=" flex justify-between mt-7">
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                        </div>
                        <div className=" flex justify-between mt-7">
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                            <img className=' w-40' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                        </div>
                        <p className=' text-blue-500  text-lg absolute bottom-6'>Explor All</p>
                    </div>
                    <div className=" w-[400px] min-h-[420px] p-6 bg-white rounded-lg relative">
                        <p className=' text-xl font-bold'>Computer Accessories | Starting From ₹499</p>
                        <div className=" flex justify-between mt-7">
                            <img className=' w-40' src="https://m.media-amazon.com/images/I/61Gmun5Y0RL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                            <img className=' w-40' src="https://m.media-amazon.com/images/I/51XuNS7R-lL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                        </div>
                        <div className=" flex justify-between mt-7">
                            <img className=' w-40' src="https://m.media-amazon.com/images/I/614wNrAOwRL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                            <img className=' w-40' src="https://m.media-amazon.com/images/I/81IexT7ufaL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                        </div>
                        <p className=' text-blue-500  text-lg absolute bottom-6'>Explor All</p>
                    </div>
                </div>
            </div>
            <div className=" px-8 my-14">
                <div className=" flex gap-9 justify-between">
                    <div className=" w-[400px] min-h-[420px] p-6 bg-white rounded-lg relative">
                        <p className=' text-xl font-bold'>Under ₹699 | Amazon brands & more</p>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GW_Sept/Desktop/mencombo_low_1_2._SY304_CB596203571_.jpg" alt="" />
                        <p className=' text-blue-500  text-lg absolute bottom-6'>Explor All</p>
                    </div>
                    <div className=" w-[400px] min-h-[420px] p-6 bg-white rounded-lg relative">
                        <p className=' text-xl font-bold'>Starting ₹99 | Start your fitness journey</p>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg" alt="" />
                        <p className=' text-blue-500  text-lg absolute bottom-6'>Explor All</p>
                    </div>
                    <div className=" w-[400px] min-h-[420px] p-6 bg-white rounded-lg relative">
                        <p className=' text-xl font-bold'>Bluetooth Calling Smartwatch starts at ₹1,999</p>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg" alt="" />
                        <p className=' text-blue-500  text-lg absolute bottom-6'>Explor All</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home