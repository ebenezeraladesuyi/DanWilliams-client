// import React from 'react'

import brand from "../../assets/offer/Books.jpg";
import { SiLinktree } from "react-icons/si";
import { FaWhatsapp, FaTelegram  } from "react-icons/fa";

const Books = () => {
  return (
    <div className="w-full h-[100%] md:h-[40vh py-[50px] flex flex-col items-center justify-center font-pop overflow-hidden shadow-m bg-[#eedfb0]">
        <div className="w-[90%] flex flex-col   gap-5">

            <h3 className="text-[20px] md:text-[30px] font-bold text-center animate-bounce">GET MY KNOWLEDGE MATERIALS</h3>

            <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-4">
                <div className="w-[80%] md:w-[30%]">
                    <img className="w-full" src={brand} alt="" />
                </div>

                <div className="w-full md:w-[57%] text-[11px] md:text-[14px] lg:text-[16px] flex flex-col gap-3 text-justif justify-center items-start">
                    <h5 className="font-bold text-[12px] md:text-[15px] lg:text-[18px]"><span className="text-white font-bold">1.</span> IN A TIME LIKE THIS</h5>

                    <h5 className="font-bold text-[12px] md:text-[15px] lg:text-[18px]"><span className="text-white font-bold">2.</span> PERSONAL EFFECTIVENESS IN THE WORLPLACE</h5>

                    <h5 className="font-bold text-[12px] md:text-[15px] lg:text-[18px]"><span className="text-white font-bold">3.</span> PERSONAL DEVELOPMENT (A LIGHT FOR LEADERS)</h5>

                    <h5 className="font-bold text-[12px] md:text-[15px] lg:text-[18px]"><span className="text-white font-bold">4.</span> CAC REGISTRATION BASICS</h5>

                    <h5 className="font-bold text-[12px] md:text-[15px] lg:text-[18px]"><span className="text-white font-bold">5.</span> BUSINESS BRANDING</h5>

                    <h5 className="font-bold text-[12px] md:text-[15px] lg:text-[18px]"><span className="text-white font-bold">6.</span> BECOMING A SUCCESSFUL STUDENT ENTREPRENEUR</h5>
                    
                    <a className="p-2 px-6 bg-black text-white rounded-[20px] mt-[10px]" href="https://selar.com/DanWilliamsConsult">Order Our Books</a>

                    <div className="mt-[25px] text-[12px] md:text-[15px] lg:text-[18px]">
                        <h5 className="font-bold text-[14px] md:text-[17px]">Connect with us by clicking on the icon</h5>

                        <div className="flex flex-col md:flex-row gap-3 md:items-center mt-[10px]">
                            <h5 className="flex items-center gap-1">Linktr.ee <a className="p-2 border-black border-[1px] rounded-full text-black" href="https://linktr.ee/danieloluwayiose"><SiLinktree /></a></h5> 

                            <h5 className="flex items-center gap-1">Whatsapp Community <a className="p-2 border-black border-[1px] rounded-full text-black" href="https://chat.whatsapp.com/Gs9F8ckFQcbINcMzpgJ6AH"><FaWhatsapp /></a></h5> 

                            <h5 className="flex items-center gap-1">Telegram <a className="p-2 border-black border-[1px] rounded-full text-black" href="https://t.me/danwilliamsconsult"><FaTelegram /></a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books