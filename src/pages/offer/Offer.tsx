// import React from 'react'

import cac from "../../assets/offer/DWC.jpg";
import tax from "../../assets/offer/Tax1.jpg";
import corp from "../../assets/offer/1.jpg";
import biz from "../../assets/offer/Business-Plan.jpg";
import brand from "../../assets/offer/Branding.jpg";
import web from "../../assets/offer/Web-Design.jpg";
import prof from "../../assets/offer/My-leadeership-journey.jpg";

const Offer = () => {
    return (
      <div className="w-full h-[100%] md:h-[40vh py-[50px] flex flex-col items-center justify-center font-pop overflow-hidden shadow-md">
  
        <h3 className="w-full text-[20px] md:text-[30px] font-bold text-center animate-bounc h-[35vh] flex flex-col gap-2 justify-center items-center shadow-md mb-[40px]">WHAT WE DO 

            <h6 className="text-[12px] md:text-[15px] font-bold text-center md:w-[70%] lg:w-[60%]">
                We have standby professionals that are ready to jump on your work and give you desired result within our areas of service.
            </h6>
        </h3>

          <div className="w-[90%] flex flex-col items-center   gap-4">


             {/* 1 */}

            <div className="flex flex-col gap-4 items-center">

                <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
                    <div className="w-[70%] md:w-[25%] h-[400px">
                        <img className="w-full h-full" src={cac} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[57%] text-[12px] md:text-[14px] text-justify flex flex-col gap-2">
                        <h6 className="text-[15px] md:text-[18px] font-bold text-center md:text-left">CAC REGISTRATION</h6>

                        <p>
                            We assist Nigerian and foreign clients to setup and register their proposed companies and organisations with the Corporate Affairs Commission; and also offer post-incorporation services.
                        </p>

                        <p>
                            <h5 className="font-bold">PRE-INCORPORATION SERVICES</h5>

                            <li>Business Name (Ventures, Sole Proprietor, Enterprise)</li>
                            <li>Company Name (Limited, Unlimited, Partnership, Group of Companies)</li>
                            <li>Incorporated Trustees (NGO, Church, Association, Club, Mosque)</li>
                        </p>

                        <p>
                            <h5 className="font-bold">POST-INCORPORATION SERVICES</h5>

                            <li>Annual Return Filing</li>
                            <li>Change/Edit of Proprietor</li>
                            <li>All other Post – Incorporation activities</li>
                        </p>
                    </div>
                </div>

                <a href="https://bit.ly/DanWilliamsConsult"  className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse flex justify-center items-center">
                    Let's Talk More
                </a>

            </div>

            <hr className="w-[50%] border-[2px] border-[#eedfb0] mt-[15px] mb-[15px]" />


              {/* 2 */}
  
            <div className="flex flex-col gap-4 items-center">

                <div className="flex flex-col md:flex-row-reverse md:justify-between items-center gap-3">
                    <div className="w-[70%] md:w-[25%] h-[400px">
                        <img className="w-full h-full" src={tax} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[57%] text-[12px] md:text-[14px] text-justify flex flex-col gap-2">
                        <h6 className="text-[15px] md:text-[18px] font-bold text-center md:text-left">TAX & ACCOUNT SERVICES</h6>

                        <p>
                            We provide outsourced Tax and Accounting Services for Businesses and Organizations. These includes, getting Tax Certificate (FIRS, JTB), Book Keeping, and Annual Returns Fillings.
                        </p>

                        <p>
                            <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5>

                            <li>Business Name </li>
                            <li>Company Limited</li>
                            <li>Church</li>
                            <li>NGO</li>
                            <li>Association</li>
                            <li>Individual</li>
                        </p>

                        {/* <p>
                            <h5 className="font-bold">POST-INCORPORATION SERVICES</h5>

                            <li>Annual Return Filing</li>
                            <li>Change/Edit of Proprietor</li>
                            <li>All other Post – Incorporation activities</li>
                        </p> */}
                    </div>
                </div>

                <a href="https://bit.ly/DanWilliamsConsult"  className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse flex justify-center items-center">
                    Let's Talk More
                </a>

            </div>

            <hr className="w-[50%] border-[2px] border-[#eedfb0] mt-[15px] mb-[15px]" />


            {/* 3 */}
  
            <div className="flex flex-col gap-4 items-center">

                <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
                    <div className="w-[80%] md:w-[35%] h-[400px">
                        <img className="w-full h-full" src={corp} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[57%] text-[12px] md:text-[14px] text-justify flex flex-col gap-2">
                        <h6 className="text-[15px] md:text-[18px] font-bold text-center md:text-left">CORPORATE IDENTITY DESIGN</h6>

                        <p>
                            We create appealing and winning brand identity guidelines that will immediately give your new or existing businesses the refreshing and professional look that big corporations are known for.
                        </p>

                        {/* <p>
                            <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5>

                            <li>Business Name </li>
                            <li>Company Limited</li>
                            <li>Church</li>
                            <li>NGO</li>
                            <li>Association</li>
                            <li>Individual</li>
                        </p> */}

                        {/* <p>
                            <h5 className="font-bold">POST-INCORPORATION SERVICES</h5>

                            <li>Annual Return Filing</li>
                            <li>Change/Edit of Proprietor</li>
                            <li>All other Post – Incorporation activities</li>
                        </p> */}
                    </div>
                </div>

                <a href="https://bit.ly/DanWilliamsConsult"  className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse flex justify-center items-center">
                    Let's Talk More
                </a>

            </div>

            <hr className="w-[50%] border-[2px] border-[#eedfb0] mt-[15px] mb-[15px]" />


            {/* 4 */}
  
            <div className="flex flex-col gap-4 items-center">

                <div className="flex flex-col md:flex-row-reverse md:justify-between items-center gap-3">
                    <div className="w-[80%] md:w-[35%] h-[400px">
                        <img className="w-full h-full" src={biz} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[57%] text-[12px] md:text-[14px] text-justify flex flex-col gap-2">
                        <h6 className="text-[15px] md:text-[18px] font-bold text-center md:text-left">BUSINESS PLAN DESIGN</h6>

                        <p>
                            We turn your written business plan into a well designed and graphically appealing plan, that gives your plan a professional look.
                        </p>

                        {/* <p>
                            <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5>

                            <li>Business Name </li>
                            <li>Company Limited</li>
                            <li>Church</li>
                            <li>NGO</li>
                            <li>Association</li>
                            <li>Individual</li>
                        </p> */}

                        {/* <p>
                            <h5 className="font-bold">POST-INCORPORATION SERVICES</h5>

                            <li>Annual Return Filing</li>
                            <li>Change/Edit of Proprietor</li>
                            <li>All other Post – Incorporation activities</li>
                        </p> */}
                    </div>
                </div>

                <a href="https://bit.ly/DanWilliamsConsult"  className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse flex justify-center items-center">
                    Let's Talk More
                </a>

            </div>

            <hr className="w-[50%] border-[2px] border-[#eedfb0] mt-[15px] mb-[15px]" />


            {/* 5 */}
  
            <div className="flex flex-col gap-4 items-center">

                <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
                    <div className="w-[80%] md:w-[35%] h-[400px">
                        <img className="w-full h-full" src={brand} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[57%] text-[12px] md:text-[14px] text-justify flex flex-col gap-2">
                        <h6 className="text-[15px] md:text-[18px] font-bold text-center md:text-left">BRANDING & PRINTING</h6>

                        <p>
                            We provide branding and printing services of all categories. We provide fast, reliable, and high quality graphic design and printing solutions that can help you meet your deadlines, exceed your expectations.
                        </p>

                        <p>
                            <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5>

                            <li>Logo Design </li>
                            <li>E-flier Design</li>
                            <li>Roll up Banner</li>
                            <li>Letterhead Paper</li>
                            <li>Souvenirs and Gift Items</li>
                            <li>Table Calendar</li>
                            <li>Files and Memo Pads</li>
                            <li>Receipt/Invoice</li>
                            <li>Company Stamp or Seal</li>
                            <li>Clothes Customization</li>
                            <li>Office Branding</li>
                            <li>General Printing</li>
                        </p>

                        {/* <p>
                            <h5 className="font-bold">POST-INCORPORATION SERVICES</h5>

                            <li>Annual Return Filing</li>
                            <li>Change/Edit of Proprietor</li>
                            <li>All other Post – Incorporation activities</li>
                        </p> */}
                    </div>
                </div>

                <a href="https://bit.ly/DanWilliamsConsult"  className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse flex justify-center items-center">
                    Let's Talk More
                </a>

            </div>

            <hr className="w-[50%] border-[2px] border-[#eedfb0] mt-[15px] mb-[15px]" />


            {/* 6 */}
  
            <div className="flex flex-col gap-4 items-center">

                <div className="flex flex-col md:flex-row-reverse md:justify-between items-center gap-3">
                    <div className="w-[80%] md:w-[35%] h-[400px">
                        <img className="w-full h-full" src={web} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[57%] text-[12px] md:text-[14px] text-justify flex flex-col gap-2">
                        <h6 className="text-[15px] md:text-[18px] font-bold text-center md:text-left">WEBSITE DESIGN</h6>

                        <p>
                            We design websites that resonates and brings your brand to life online. We help transform your website into a magnet for engagement and success with our expert design solutions.
                        </p>

                        <p>
                            <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5>

                            <li>Blog</li>
                            <li>Corporate</li>
                            <li>Not-Governmental Organization</li>
                            <li>E-Commerce</li>
                            <li>Educational</li>
                            <li>Entertainment</li>
                            <li>Portfolio</li>
                            <li>Event</li>
                            <li>Business</li>
                        </p>

                        {/* <p>
                            <h5 className="font-bold">POST-INCORPORATION SERVICES</h5>

                            <li>Annual Return Filing</li>
                            <li>Change/Edit of Proprietor</li>
                            <li>All other Post – Incorporation activities</li>
                        </p> */}
                    </div>
                </div>

                <a href="https://bit.ly/DanWilliamsConsult"  className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse flex justify-center items-center">
                    Let's Talk More
                </a>

            </div>

            <hr className="w-[50%] border-[2px] border-[#eedfb0] mt-[15px] mb-[15px]" />


            {/* 7 */}
  
            <div className="flex flex-col gap-4 items-center">

                <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
                    <div className="w-[80%] md:w-[35%] h-[400px">
                        <img className="w-full h-full" src={prof} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[57%] text-[12px] md:text-[14px] text-justify flex flex-col gap-2">
                        <h6 className="text-[15px] md:text-[18px] font-bold text-center md:text-left">PROFESSIONAL ADVISORY</h6>

                        <p>
                            We provide professional advice that cuts across high performance, marketing and customer engagement. Our professional advisory service allows your employees to gain new skills, refine existing ones and stay up-to-date with the latest industry trends, ultimately strengthening your organization’s overall performance.
                        </p>

                    </div>
                </div>

                <a href="https://bit.ly/DanWilliamsConsult"  className="p-2 md:px-6  bg-black text-[#eedfb0] rounded-[15px] animate-pulse flex justify-center items-center">
                    Let's Talk More
                </a>

            </div>

            <hr className="w-[50%] border-[2px] border-[#eedfb0] mt-[15px] mb-[15px]" />
  
          </div>
      </div>
    )
  }
  
  export default Offer