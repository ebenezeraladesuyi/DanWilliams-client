// import React from 'react'


import { motion } from "framer-motion";
import img1 from "../../assets/images/biz2.jpg";
import img2 from "../../assets/images/biz4.jpg";
import ServiceCard from "../../components/static/ServiceCard";
import { BiSpreadsheet } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";

const Services = () => {
  return (
    <section className="w-full h-[100%] py-[50px] flex flex-col items-center justify-center">

        <h5 className="text-center text-[20px] md:text-[25px] font-bold mb-[10px] animate-bounce">WHAT WE OFFER</h5>

        <div className="w-[90%] flex flex-col md:flex-row  justify-between ">

            <motion.div className="hidden lg:flex lg:relative w-[37%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
                <img className="w-[80%] border-l-[6px] rounded-md border-orange-500 border-t-[6px] absolute top-0 left-0 z-20 animate-bounc" src={img1} alt="" />

                <img className="w-[80%] absolute left-[100px] top-[180px] border-r-[6px] border-b-[6px] rounded-md border-orange-500 animate-bounc" src={img2} alt="" />
            </motion.div>

            <div className="flex flex-wrap items-center justify-center md:justify-between lg:w-[55%] w-full gap-1 lg:gap-4">
                <ServiceCard 
                    icon={<BiSpreadsheet />}
                    title="COMPANY REGISTRATION"
                    details="We assist Nigerian and foreign clients to incorporate thier proposed and ensure compliance with Government policies."
                />
                
                <ServiceCard 
                    icon={<BsBank />}
                    title="BANKING SUPPORT"
                    details="We help to setup accounts that can be accessed anywhere in the world, and provide the required banking support services for now Nigerian companies."
                />

                <ServiceCard 
                    icon={<LuWallet />}
                    title="TAX & ACCOUNT SERVICES"
                    details="We provide outsourced accounting, tax and audit services to small, medium and big companied in the most efficient and professional way."
                />

                {/* <ServiceCard 
                    icon={<BiSpreadsheet />}
                    title="COMPANY REGISTRATION"
                    details="We assist Nigerian and foreign clients to incorporate thier proposed and ensure compliance with Government policies."
                /> */}
            </div>
        </div>

    </section>
  )
}

export default Services;