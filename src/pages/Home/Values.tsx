// import React from 'react'

import core from "../../assets/images/CoreValue.png";

const Values = () => {
  return (
    <div  className="w-full h-[100vh] md:h-[80vh] lg:h-[100vh py-[50px] flex flex-col items-center justify-center bg-[rgb(238,223,176)] font-pop ">

        <h4 className="text-[17px] font-bold animate-bounce md:text-[25px] mb-[15px]">OUR CORE VALUES</h4>
        
        <div className="w-[90%] h-full flex justify-center flex-col md:flex-row  md:justify-between md:relative gap-4">

            <div className="w-full md:w-[60%] shadow-md p-6 bg-white h-[80%] flex justify-center items-center rounded-md ">
                <img src={core} alt="" />
            </div>

            <div className="md:absolut right-[190px] top-[60px] bg-black w-full md:w-[37%]  h-[350px] md:h-[80%] rounded-md p-[20px] text-white text-[11px] md:text-[14px] flex flex-col gap-1 justify-center">
                <h6 className=""><span className="text-[#eedfb0] text-[13px] md:text-[15px] font-bold">- CREATIVITY:</span> We deliver the best of creative outcomes, waowing our clients endlessly.</h6>
                <h6 className=""><span className="text-[#eedfb0] text-[13px] md:text-[15px] font-bold">- EXCELLENCE:</span> We deliver the best of creative outcomes, waowing our clients endlessly.</h6>
                <h6 className=""><span className="text-[#eedfb0] text-[13px] md:text-[15px] font-bold">- CUSTOMER CENTRIC:</span> We deliver the best of creative outcomes, waowing our clients endlessly.</h6>
                <h6 className=""><span className="text-[#eedfb0] text-[13px] md:text-[15px] font-bold">- COLLABORATION:</span> We deliver the best of creative outcomes, waowing our clients endlessly.</h6>
            </div>

        </div>
    </div>
  )
}

export default Values