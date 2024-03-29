// import React from 'react'

import trans from "../../assets/images/Trans.jpg";

const Monthly = () => {
  return (
    <div className="w-full h-[100%] md:h-[40vh py-[50px] flex flex-col items-center justify-center font-pop overflow-hidden shadow-md">

    <h4 className="block text-center md:hidden font-bold animate-bounce mb-[0px] text-[19px] md:text-[25px] W-[90%] text-[#eedfb0]">JOIN OUR MONTHLY <span className="text-[#000000] hidden">TRANSFORMATION 1/2 HOUR WITH DANWILLIAMS</span></h4>

        <div className="w-[90%] flex flex-col-reverse md:flex-row md:justify-between lg:items-center gap-5">
            <div className="text-center md:text-left flex flex-col gap-2">
                <h3 className="text-[15px] md:text-[17px] lg:text-[25px] font-bold ">TRANSFORMATION 1/2 HOUR WITH DANWILLIAMS</h3>

                <h5 className="hidden md:block text-[14px] lg:text-[18px] md:font-bold">MONTHLY <span>LIVE ON TELEGRAM</span></h5>

                <h5 className="text-[13px] lg:text-[18px]"><span className="font-bold text-orange-400">DATE:</span> Every 3rd Sunday of the Month</h5>
                <h5 className="text-[13px] lg:text-[18px] "><span className="font-bold text-orange-400">TIME:</span> 8:00PM</h5>
                <h5 className="text-[13px] lg:text-[18px] "><span className="font-bold text-orange-400">VENUE:</span>  TELEGRAM</h5>
                
                <h5 className="flex md:items-center flex-col md:flex-row gap-2 text-[13px] md:text-[15px] lg:text-[18px] ">
                    <a className="p-2 md:px-6 bg-black text-[#eedfb0] rounded-[15px]" href="https://t.me/danwilliamsconsult">Join our Telegram waiting room</a>
                </h5>

                <h5 className="mt-[20px] md:mt-[40px] md:items-start  flex flex-col md:flex-ro gap-2 md:gap-4 text-[13px] md:text-[15px] lg:text-[16px] border-[1px] md:border-none rounded-md p-2 md:p-0 border-[#000000] font-bold">Want to be part of our triving Whatsapp Community? <a className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse" href="https://chat.whatsapp.com/Gs9F8ckFQcbINcMzpgJ6AH">Join Our Whatsapp Community</a></h5>
            </div>

            <div className="w-full md:w-[40%]">
                <img className="w-full" src={trans} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Monthly