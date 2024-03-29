// import React from 'react'

import { FaBuildingColumns } from "react-icons/fa6";

const Structure = () => {
  return (
    <div className="w-full h-[100%] py-[50px] flex items-center justify-center font-pop overflow-hidden bg-black">
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-4">
            <h4 className="text-white text-[20px] md:text-[30px] lg:text-[35px] font-bold md:w-[60%] text-center md:text-left"><span className="flex items-center justify-center md:justify-start mb-[10px]"><FaBuildingColumns /></span>We would like to help you get <span className="text-orange-500">results</span> within our area of expertise.</h4>

            <a href="https://bit.ly/DanWilliamsConsult" className="w-[200px] md:w-[250px] h-[45px] rounded-md border-none animate-pulse bg-white text-black font-bold decoration-transparent text-center flex items-center justify-center">
                Contact Us Now
            </a>
        </div>
    </div>
  )
}

export default Structure