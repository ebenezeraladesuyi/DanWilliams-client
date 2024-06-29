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
      <div className="w-full h-[100%] md:h-[40vh pb-[50px] flex flex-col items-center justify-center font-pop overflow-hidden shadow-md bg-blac text-whit">
  
        <h3 className="w-full text-[20px] md:text-[30px] font-bold text-center animate-bounc h-[45vh] flex flex-col gap-2 justify-center items-center shadow-md mb-[40px] bg-black text-[#eedfb0] bg-hero-bg3 bg-center bg-cover relative">

            <h5 className="relative z-30 animate-pulse">WHAT WE DO </h5>

            <h6 className="text-[12px] md:text-[15px] font-bold text-center w-[85%] md:w-[60%] lg:w-[40%] text-white relative z-30">
                We have standby professionals that are ready to jump on your work and give you desired result within our areas of service.
            </h6>

            <div className="absolute bg-black w-full h-full top-0 right-0 opacity-80"></div>
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
                            We specialize in crafting brand identity guidelines that are not only visually compelling but also strategically aligned with your business goals. Whether you're launching a new venture or revitalizing an existing brand, our expertise ensures your identity guidelines exude professionalism and innovation. 
                            <br />By meticulously defining elements such as logo usage, color palettes, typography, and visual style, we create a cohesive brand identity that resonates with your target audience. Our approach blends creativity with industry best practices, delivering guidelines that not only enhance brand recognition but also inspire trust and credibility. 
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
                            We specialize in transforming your written business plan into a meticulously designed and visually compelling document. Our expertise lies in enhancing the presentation of your ideas, ensuring they not only convey clarity and coherence but also captivate with a professional aesthetic. By integrating impactful graphics, intuitive layouts, and strategic use of visuals, we elevate your business plan to resonate powerfully with stakeholders. This approach not only enhances readability but also underscores your commitment to professionalism and attention to detail, setting a strong impression that aligns with your business's ambitions and goals.
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
                            {/* <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5> */}

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
                            {/* <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5> */}

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
                        
                        <p>
                            {/* <h5 className="font-bold">We are available to help get Tax Identification Number for:</h5> */}

                            <li>Providing guidance on business planning and goal setting</li>
                            <li>Developing and implementing growth strategies and expansion plans</li>
                            <li>Acting as a trusted advisor in decision-making processes</li>
                            <li>Advising on mergers, acquisitions, and strategic partnerships</li>
                            {/* <li>Educational</li>
                            <li>Entertainment</li>
                            <li>Portfolio</li>
                            <li>Event</li>
                            <li>Business</li> */}
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