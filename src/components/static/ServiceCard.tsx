/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'



interface iServiceCard {
    icon: any;
    title: string,
    details : string,
}

const ServiceCard:React.FC<iServiceCard> = ({icon, title, details}) => {
  return (
    <div className="w-[250px] md:w-[210px] h-[200px] lg:w-[290px] lg:h-[220px] flex items-cente justify-between hover:text-white hover:bg-black items-center p-2 rounded-md transition-all duration-1000 ease-in-out">

        <div className="text-[40px] md:text-[30px] lg:text-[50px]">
            {/* <BiSpreadsheet /> */}
            {icon}
        </div>

        <div className="flex flex-col gap-3 w-[75%] cursor-wait ">
            <h5 className="text-[15px] lg:text-[18px] font-bold">
                {/* COMPANY REGISTRATION */}
                {title}
            </h5>

            <hr className="border-[2px] border-[#eedfb0]" />

            <h5 className="text-[11px] lg:text-[14px]">
                {/* We assist Nigerian and foreign clients to incorporate thier proposed and ensure compliance with Government policies. */}
                {details}
            </h5>
        </div>

    </div>
  )
}

export default ServiceCard