// import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import un6 from "../../assets/UnveilingSummit/Unveiling-2023.png";
import un7 from "../../assets/UnveilingSummit/15.png";
import un8 from "../../assets/UnveilingSummit/2.png";
import un9 from "../../assets/UnveilingSummit/5.png";
import un10 from "../../assets/UnveilingSummit/4.png";
import un11 from "../../assets/UnveilingSummit/12.png";
import un12 from "../../assets/UnveilingSummit/28.png";
import un13 from "../../assets/UnveilingSummit/25.png";
import un14 from "../../assets/UnveilingSummit/24.png";
import un15 from "../../assets/UnveilingSummit/10.png";
import UnveilingImg from "../../components/static/UnveilingImg";


const Sliders2 = () => {
    

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        // rtl: true,
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
      <div className="w-full md:h-[100vh flex flex-col justify-cente items-center font-mont py-[40px] relative overflow-hidden bg-[#eedfb0]">
        
      <hr className="border-[2px] border-[#000000] w-[50%] my-[20px mb-[40px] " />

        <div className="w-[90%]">
            <h5 className="text-[15px] font-bold text-center md:text-left md:text-[20px] lg:text-[25px] mb-[20px] animate-pulse">UNVEILING SUMMIT <span className="text-[12px] md:text-[16px] lg:text-[20px]">SECOND EDITION (2023)</span> </h5>

            <div>
                <Slider {...settings}>

                    <UnveilingImg 
                        image={un6}
                    />
                    <UnveilingImg 
                        image={un7}
                    />
                    <UnveilingImg 
                        image={un8}
                    />
                    <UnveilingImg 
                        image={un9}
                    />
                    <UnveilingImg 
                        image={un10}
                    />

                    <UnveilingImg 
                        image={un11}
                    />
                    <UnveilingImg 
                        image={un12}
                    />
                    <UnveilingImg 
                        image={un13}
                    />
                    <UnveilingImg 
                        image={un14}
                    />
                    <UnveilingImg 
                        image={un15}
                    />

                </Slider>
            </div>
        </div>
        
    <hr className="border-[2px] border-[#000000] w-[50%] mt-[20px] mb-[0px] " />

      </div>
    )
  }
  
  export default Sliders2