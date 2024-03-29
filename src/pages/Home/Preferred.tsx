// import React from 'react'

import lady from "../../assets/images/lady2.jpg";
import PreferredCard from "../../components/static/PreferredCard";

const Preferred = () => {
  return (
    <div className="w-full h-[100%] py-[50px] flex flex-col items-center justify-center font-pop overflow-hidden">

    <h4 className="block text-center lg:hidden font-bold animate-bounce mb-[20px] text-[19px] md:text-[25px]"><span className="text-[#eedfb0]">WHY WE ARE</span> PREFERRED</h4>

        <div className="w-[90%] flex flex-col-reverse lg:flex-row md:justify-between gap-5">

            <div className="w-full lg:w-[55%]">
                <h4 className="font-bold hidden lg:block text-[30px] animate-bounce mb-[20px]"><span className="text-[#eedfb0]">WHY WE ARE</span> PREFERRED</h4>

                <div className="flex flex-col gap-3 ">
                    <PreferredCard 
                        num="01"
                        title="RANGE OF SERVICES"
                        details="We offer a wider range of services to ensure you get the same professional experience across board when you are starting, projecting or scaling a business – Market Intelligence, CAC Registration, Tax Services, Google My Business, Website Design, Corporate Identity Design, Branding & Printing and Professional Advisory."
                    />
                    
                    <PreferredCard 
                        num="02"
                        title="WEALTH OF SERVICES"
                        details="Danwilliams Consult has worked with every type of client of diverse localities and with diverse products and services from different sector. By engaging Danwilliams Consult, you are banking on our wealth of experience in different sectors and technical know-how in helping you get result in no distant time."
                    />
                    
                    <PreferredCard 
                        num="03"
                        title="CUSTOM TAILORED APPROACH"
                        details="From dealing with several clients, we understand that every client’s desire slightly differ. Hence, our consultants do not adopt the one cap fits all approach. We have made it a point of duty to listen to our clients and provide a service that speaks to the very essence of our engagement always."
                    />
                    
                    <PreferredCard 
                        num="04"
                        title="REMOTE SERVICES"
                        details="Irrespective of your location, most of our engagements can be completed without you having to travel down to Nigeria or our physical office. With the help of technology, Danwilliams Consult will save you travel time and expenses, so you can focus on other issues of interests."
                    />
                </div>
            </div>

            <div className="lg:w-[40%] w-full relative">
                <img className="w-[100%] lg:hidden lg:absolut left-[10%] rounded-md shadow-md top-[40px" src={lady} alt="" />

                <div className="w-[90%] h-full bg-lady-bg bg-cover bg-center rounded-md shadow-lg"></div>
            </div>

        </div>
    </div>
  )
}

export default Preferred