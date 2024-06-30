/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'



interface iServiceCard {
    icon: any;
    title: string,
    details : string,
}

const ServiceCard:React.FC<iServiceCard> = ({icon, title, details}) => {
  return (
    <div className="w-[270px] md:w-[210px] h-[250px] lg:w-[300px] lg:h-[290px] flex items-cente justify-between hover:text-white hover:bg-black items-center p-2 rounded-md transition-all duration-1000 ease-in-out">

        <div className="text-[30px] md:text-[20px] lg:text-[40px] border-[1px] p-2 rounded-md border-black">
            {/* <BiSpreadsheet /> */}
            {icon}
        </div>

        <div className="flex flex-col gap-3 w-[75%] cursor-wait ">
            <h5 className="text-[15px] lg:text-[18px] font-bold">
                {/* COMPANY REGISTRATION */}
                {title}
            </h5>

            <hr className="border-[2px] border-[#eedfb0]" />

            <h5 className="text-[10px] lg:text-[12px]">
                {/* We assist Nigerian and foreign clients to incorporate thier proposed and ensure compliance with Government policies. */}
                {details}
            </h5>
        </div>

    </div>
  )
}

export default ServiceCard