// import React from 'react'

import logo from "../../assets/UnveilingSummit/Unveiling-Logo.png";
// import img1 from "../../assets/UnveilingSummit/8.png";
// import img1 from "../../assets/UnveilingSummit/13.png";
// import img2 from "../../assets/UnveilingSummit/10.png";
import { FaInstagramSquare } from "react-icons/fa";

const Unveiling = () => {
  return (
    <div className="w-full h-[100%] py-[50px] flex items-center justify-center font-pop overflow-hidden bg-[rgb(238,223,176) md:bg-bg1 bg-bg2 bg-center bg-cover bg-opacity-50 backdrop-blur-m relative">

        <div className="absolute bg-black w-full h-full opacity-40"></div>

        <div className="w-[90%] flex flex-col md:flex-row md:justify-between justify- items-center relative z-30">

            <div className="w-full md:w-[45%] lg:w-[30%] bg-white bg-opacity-80 p-5 rounded-md">
                <img className="w-full" src={logo} alt="" />

                <h6 className="w-full text-[12px] text-justify md:text-[15px] font-bold mt-[20px]">
                    Unveiling Summit is geared towards “Building men to a level of confidence which enhance relevance earthly and beyond, and with a mission of creating an atmosphere where people get inspired, connected and ignited”.
                </h6>

                {/* <button className="w-[200px md:w-[270px w-full h-[45px] text-[12px] md:text-[13px] border-none mt-[20px] font-bold text-white bg-black hover:text-[rgb(238,223,176)] transition-all duration-300 ease-in-out">
                    Register For The Next Unveiling Summit
                </button> */}

                <h5 className="text-[13px] md:text-[15px] font-bold flex gap-3 items-center mt-[15px] w-full justify-center ">Follow us on <a href="https://www.instagram.com/invites/contact/?i=7wv9rqoqrlqr&utm_content=rkichl4" className="cursor-pointer text-black text-[18px] border-black border-[1px]  p-2 rounded-full"><FaInstagramSquare /></a></h5>
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-[67%] gap-3">
                {/* <img className="w-full md:w-[48%]" src={img1} alt="" />

                <img className="w-full md:w-[48%]" src={img2} alt="" /> */}
            </div>

        </div>
    </div>
  )
}

export default Unveiling