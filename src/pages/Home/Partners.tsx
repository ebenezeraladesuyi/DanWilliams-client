// import React from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/1.svg"
import img2 from "../../assets/images/GAC-logo.png"
import img3 from "../../assets/images/3.svg"
import img4 from "../../assets/images/4.svg"
// import img5 from "../../assets/images/5.svg"
import img6 from "../../assets/images/6.svg"
import img7 from "../../assets/images/vola2.png"
import img8 from "../../assets/images/8.svg"
import PartnersCard from "../../components/static/PartnersCard";

const Partners = () => {
    
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 3,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }


  return (
    <div className="w-full h-[40vh] py-[50px] flex flex-col items-center justify-center bg-blac font-pop shadow-md overflow-hidden">
        <div className="w-[90%] h-[80%] flex flex-col justify-center items-center">

            <h5 className="text-[17px] font-bold animate-bounce md:text-[25px] mb-[30px]">OUR PARTNERS</h5>

            <div className="w-full h-full text-white ">
                <Slider {...settings}>

                    <PartnersCard 
                        imag={img1}
                    />
                    <PartnersCard 
                        imag={img2}
                    />
                    <PartnersCard 
                        imag={img3}
                    />
                    <PartnersCard 
                        imag={img4}
                    />
                    {/* <PartnersCard 
                        imag={img5}
                    /> */}
                    <PartnersCard 
                        imag={img6}
                    />
                    <PartnersCard 
                        imag={img7}
                    />
                    <PartnersCard 
                        imag={img8}
                    />


                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Partners