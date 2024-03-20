// import React from 'react'

import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import logo from "../../assets/images/DWC-Logo2.png"
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center font-pop bg-black py-[40px] text-white '>
      <div className="w-[90%] flex flex-col md:flex-row md:justify-between gap-5 md:gap-6 lg:gap-8">

        <div className=" flex flex-col gap-3 mb-[15px] md:mb-0 md:w-[40%]">

          <img className="w-[60px]" src={logo} alt="" />

          <hr className="border-[2px] w-[50px] border-[#eedfb0]" />

          <h6 className="text-[12px] md:text-[14px]">
            We are a trusted company formation agency in Nigeria. With over five (5) years of experience working with local and international clients, and a combined wealth of specialist outcome and result mixed with professionalism.
          </h6>

          <div className="text-[12px] font-bol flex flex-col gap-2">

            <div className="flex items-center gap-2">
              <div className="text-[20px] text-[#eedfb0]">
                <CiLocationOn />
              </div>

              <div>
                <h5>Nova Road 3, Adebayo, Ado-Ekiti, Ekiti</h5>
                <h5>Irawoosan Street, Ketu Alapere, Lagos.</h5>
              </div>
            </div>

            <h5 className="flex items-center gap-2"><span className="text-[17px] text-[#eedfb0]"><LuPhoneCall /></span> 08148905370 ; 09056343625</h5>

            <h5 className="flex items-center gap-2"><span className="text-[17px] text-[#eedfb0]"><MdOutlineAttachEmail /></span> danwilliamsconsult@gmail.com</h5>
            
          </div>

        </div>

        <div className="flex flex-col gap-3 mb-[15px] md:mb-0 md:w-[30%]">
          <h5 className="text-[#eedfb0] font-bold text-[14px] md:text-[16px]">Working Hours</h5>

          <hr className="border-[2px] w-[50px] border-[#eedfb0]"  />

          <div className="text-[12px]">
            <h6 className="py-2 flex justify-between items-center">Monday <span>9:00am - 5:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Tuesday <span>9:00am - 5:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Wednesday <span>9:00am - 5:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Thursday <span>9:00am - 5:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Friday <span>9:00am - 5:00pm</span></h6>
          </div>

          <h6 className="text-[12px]">
            You can call us or send us an email every other day.
          </h6>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-[#eedfb0] font-bold text-[14px] md:text-[16px]">Follow Us on Social Media</h5>

          <hr className="border-[2px] w-[50px] border-[#eedfb0]" />

          <div className="flex gap-2 items-center text-[22px]">
            <a className="text-white" href="https://www.facebook.com/DanwilliamsConsult?mibextid=ZbWKwL"><FaFacebookSquare /></a>
            <a className="text-white"  href="https://www.instagram.com/invites/contact/?i=ug7bk1p06c1x&utm_content=lxfpfn8"><FaInstagramSquare /></a>
            <a className="text-white"  href="https://x.com/Official_DWCway?t=8e5y_rP7cnBoYtkZO3rg-w&s=09"><FaSquareXTwitter /></a>
            <a className="text-white"  href="https://bit.ly/DanWilliamsConsult"><FaWhatsappSquare /></a>
          </div>

        </div>

      </div>

      <div className="w-[90%] py-">
        <h5 className="text-[10px] md:text-[14px] text-center lg:text-[16px] mt-[30px]">Copyright &#169; 2024 DanWilliams Consult. All Right Reserved.</h5>
      </div>

    </div>
  )
}

export default Footer