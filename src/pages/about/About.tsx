// import React from 'react'

import Values from "../Home/Values"
import Books from "./Books"
import Strategist from "./Strategist"

const About = () => {
  return (
    <div className="w-full md:h-[100vh flex flex-col justify-cente items-center font-mont pb-[40px relative overflow-hidden">
        
        <div className="w-full h-[300px] bg-blac p-10 rounded-b-[150px] rounded-bl-[150px] flex items-center justify-center bg-about-bg bg-cente bg-cover bg-opacity-30 relative overflow-hidden">
        <div className="absolute bg-black w-full h-full opacity-50"></div>
                <h5 className="font-bold text-white text-[25px] md:tex-[35px] lg:text-[45px] relative z-20">
                    About Us
                </h5>
        </div>

        <div className="w-[90%] mt-[30px] flex flex-col justify-center items-center gap-6 mb-[20px]">
            {/* <div>
                <img src="" alt="" />
            </div> */}

            <div className="flex flex-col gap-3 w-full justify-ce md:text-center text-justify text-[12px] md:text-[14px] lg:text-[16px] ">
                <h5 className="text-[20px] md:text-[30px] font-bold text-center animate-bounce">WHO ARE WE</h5>

                <p className="">
                    <b>Danwilliams Consult</b> is a social-preneur firm, <b>registered with the Corporate Affairs Commission (BN3819103)</b>, and with a working vision to drive societal change through business peculiarities, professionalism and efficiency. We provide unique services that cut across Business Formation, Branding & Printing, and  Professional Advisory.
                </p>

                <p>
                    Danwilliams Consult is one of the most trusted comprehensive business formation agencies in Nigeria. We are also the one stop firm for individuals and organizations who seek to get quality and excellent delivery across our service areas.
                </p>

                <p>
                    With over 5 years of providing result-driven services to our clients; and a combined wealth of team experience of more than 10 years from different disciplines - entrepreneurship, business development, accounting and tax, branding & printing, Danwilliams Consult is your one-stop agency for Corporate Affairs Commission (CAC),  Pre-Incorporation, and Post-Incorporation, Branding & Printing, and Professional Advisory matters.
                </p>

            </div>

            <div className="flex flex-col gap-3 w-full justify-ce md:text-center text-justify text-[12px] md:text-[14px] lg:text-[16px] ">
                <h5 className="text-[20px] md:text-[30px] font-bold text-center animate-bounce">HOW WE OPERATE</h5>
                
                <li>
                    We develop a strategic approach in dealing with our clients to ensure maximum satisfaction.
                </li>

                <li>
                    We ensure top notch leadership and management in dealing with our clients. 
                </li>

                <li>
                    We respond promptly to customers needs and request while we welcome criticism as a growth metric for our organization.
                </li>
            </div>
        </div>

        <Values />

        <Strategist />

        <Books />
    </div>
  )
}

export default About