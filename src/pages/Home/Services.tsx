// import React from 'react'


import { motion } from "framer-motion";
import img1 from "../../assets/images/biz2.jpg";
import img2 from "../../assets/images/biz4.jpg";
import ServiceCard from "../../components/static/ServiceCard";
import { BiSpreadsheet } from "react-icons/bi";
// import { BsBank } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { TbBrandAdobe } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";


const Services = () => {
  return (
    <section id="offer" className="w-full h-[100%] py-[50px] flex flex-col items-center justify-center font-pop overflow-hidden">

        <h5 className="text-center text-[20px] md:text-[25px] font-bold mb-[10px] animate-bounce">WHAT WE OFFER</h5>

        <div className="w-[90%] flex flex-col md:flex-row  justify-between md:justif">

            <motion.div className="hidden lg:flex lg:relative w-[37%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
                <img className="w-[80%] border-l-[6px] rounded-md border-[#eedfb0] border-t-[6px] absolute top-0 left-0 z-20 animate-bounc" src={img1} alt="" />

                <img className="w-[80%] absolute left-[100px] top-[180px] border-r-[6px] border-b-[6px] rounded-md border-[#eedfb0] animate-bounc" src={img2} alt="" />
            </motion.div>

            <div className="flex flex-wrap items-center justify-center md:justify-between lg:w-[55%] w-full gap-1 lg:gap-4">
                <ServiceCard 
                    icon={<BiSpreadsheet />}
                    title="COMPANY REGISTRATION"
                    details="We assist Nigerian and foreign clients to incorporate thier proposed and ensure compliance with Government policies."
                />
                
                <ServiceCard 
                    icon={<TbBrandAdobe />}
                    title="BRANDING & PRINTING"
                    details="We provide branding and printing services of all categories. We provide fast, reliable, and high quality graphic design and printing solutions that can help you meet your deadlines and exceed your expectations."
                />

                <ServiceCard 
                    icon={<LuWallet />}
                    title="TAX & ACCOUNT SERVICES"
                    details="We provide outsourced Tax and Accounting Services for Businesses and Organizations. These includes, getting Tax Certificate (FIRS, JTB), Book Keeping, and Annual Returns Fillings."
                />

                <ServiceCard 
                    icon={<RiCustomerService2Line />}
                    title="PROFESSIONAL ADVISORY"
                    details="We provide professional advice that cuts across high performance, marketing and customer engagement. Our professional advisory service allows your employees to gain new skills, refine existing ones and stay up-to-date with the latest industry trends, ultimately strengthening your organization’s overall performance."
                />
            </div>
        </div>
        

            <button className="mt-[30px] p-2 px-4 bg-[#000000] text-white border-none hover:bg-[#eedfb0] hover:text-[#000000] font-bold transition-all duration-300 ease-in-out ">
                Click To See More Of Our Services
            </button>

    </section>
  )
}

export default Services;