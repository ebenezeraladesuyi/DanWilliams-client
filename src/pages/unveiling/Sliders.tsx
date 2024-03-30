// import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import un1 from "../../assets/UnveilingSummit/Unveiling-Logo.png";
import un2 from "../../assets/UnveilingSummit/Unveiling 2019.png";
import un3 from "../../assets/UnveilingSummit/Anticipate-2.png";
import un4 from "../../assets/UnveilingSummit/Unveiling-2019-2.png";
import un5 from "../../assets/UnveilingSummit/Unveiling-2019-3.png";
import UnveilingImages from "../../components/static/UnveilingImages";


const Sliders = () => {
    

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
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
                    slidestoShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }


    return (
      <div className="w-full md:h-[100vh flex flex-col justify-cente items-center font-mont py-[40px] pb-[20px] relative overflow-hidden bg-[#eedfb0]">
        
      <hr className="border-[2px] border-[#000000] w-[50%] my-[20px mb-[20px] " />

        <div className="w-[90%]">
            <h5 className="text-[15px] font-bold text-center md:text-left md:text-[20px] lg:text-[25px] mb-[20px] animate-pulse">UNVEILING SUMMIT <span className="text-[12px] md:text-[16px] lg:text-[20px]">FIRST EDITION (2019)</span> </h5>

            <div>
                <Slider {...settings}>

                    <UnveilingImages 
                        image={un1}
                    />
                    <UnveilingImages 
                        image={un2}
                    />
                    <UnveilingImages 
                        image={un3}
                    />
                    <UnveilingImages 
                        image={un4}
                    />
                    <UnveilingImages 
                        image={un5}
                    />

                </Slider>
            </div>
        </div>

      </div>
    )
  }
  
  export default Sliders