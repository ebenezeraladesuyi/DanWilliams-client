// import React from 'react'
import anti from "../../assets/UnveilingSummit/Anticipate.png";
import { FaInstagramSquare } from "react-icons/fa";
import Countdown from "../../components/static/Countdown";
import Sliders from "./Sliders";
import Sliders2 from "./Sliders2";

const Unveilling = () => {

    const targetDate = new Date('2024-07-01T10:00:00');

    // const [scroll, setScroll] = React.useState(false);

    // const showScroll = () => {
    //     setScroll(!scroll)
    // }

    

//     <div className="w-full flex gap-3 items-center justify-center">
//     <Countdown targetDate={targetDate} />
// </div>

  return (
    <div className="w-full md:h-[100vh flex flex-col justify-cente items-center font-mont pb-[40px relative overflow-hidden">
        
        <div className="w-full h-[300px bg-blac pt-[100px] pb-[40px] flex items-center justify-center bg-bg3 bg-cente bg-cover bg-opacity-30 relative overflow-hidden">
            <div className="absolute bg-black w-full h-full top-0 opacity-60"></div>

            <div className="relative z-20 w-[90%] flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4">
                <div className="w-[90%] md:w-[35%]">
                    <img className="w-full" src={anti} alt="" />
                </div>

                <div className="text-white w-full md:w-[55%]">
                    <h4 className="text-[17px] md:text-[22px] lg:text-[25px] font-bold text-center md:text-left">Anticipate <br/><span className="text-[20px] md:text-[26px] lg:text-[38px]">UNVEILING SUMMIT 2024</span></h4>
                    <h6 className="text-[12px] md:text-[15px] text-center md:text-left mb-[20px]">(ONLINE & ONSITE)</h6>

                    <h5 className="text-[13px] md:text-[15px] lg:text-[18px] text-center md:text-left"><span className="font-bold text-[#eedfb0]">DATE:</span> July, 2024.</h5>

                    <h5 className="text-[13px] md:text-[15px] lg:text-[18px] text-center md:text-left "><span className="font-bold text-[#eedfb0]">TIME:</span> 10:00PM</h5>

                    <h5 className="text-[13px] md:text-[15px] lg:text-[18px] text-center md:text-left "><span className="font-bold text-[#eedfb0]">VENUE:</span>  TO BE ANNOUNCED</h5>

                    <h5 className="mt-[15px] text-[12px] md:text-[15px] lg:text-[17px] flex flex-col items-center md:items-start gap-2">Register for this year's edition
                        <button className="bg-[#eedfb0] text-black p-2 px-10 animate-pulse">HERE</button>
                    </h5>

                    <h5 className="text-[13px] md:text-[15px] font-bold flex gap-3 items-center mt-[15px] w-full justify-center md:justify-start ">Follow us on <a href="https://www.instagram.com/invites/contact/?i=7wv9rqoqrlqr&utm_content=rkichl4" className="cursor-pointer text-white text-[18px] border-white border-[1px]  p-2 rounded-full"><FaInstagramSquare /></a></h5>
                </div>
            </div>
        </div>

        {/* Countdown */}
        <div className="bg-black h-[40vh] w-full flex items-center justify-center gap-4 py-[40px">
            <div className="w-[70%]">
                <h5 className="text-white text-center text-[16px] md:text-[25px] my-[10px] font-bold">Countdown To Event</h5>

                <Countdown targetDate={targetDate} />
            </div>
        </div>

        {/* About the summit */}

        <div className="w-[90%] mt-[30px] mb-[40px] flex flex-col items-center">
            <div className="text-[11px] md:text-[13px] lg:text-[15px] text-justify w-full md:w-[80%] flex flex-col gap-2">
                <h5 className="text-[14px] md:text-[18px] lg:text-21px] font-bold text-center animate-bounce">ABOUT THE SUMMIT</h5>

                <p>
                    Unveiling Summit is geared towards “Building men to a level of confidence which enhance relevance earthly and beyond, and with a mission of creating an atmosphere where people get inspired, connected and ignited”.
                </p>

                <p>
                    We strongly believe in fostering collaboration and sharing knowledge to advance leadership practices, human capacity development and relevant knowledge across different sectors.
                </p>

                <p>
                    The first and second edition of was held at The Federal Polytechnic, Ado-Ekiti, in 2019 and 2023 respectively. The reputation of The Federal Polytechnic, Ado-Ekiti as a leading institution in building and impacting young ones precedes itself and we are genuinely impressed by the remarkable achievements and innovative initiatives undertaken by the institution in the field of education, research, and leadership development.
                </p>

                <p>
                    This and many other considerations have aid the need to bring back the amazing summit to the institution this year, with continuity in view.
                </p>
            </div>

            <hr className="border-[2px] border-[#eedfb0] w-[50%] my-[20px] mt-[40px]" />

            <div className="text-[11px] md:text-[13px] lg:text-[15px] text-justify w-full md:w-[80%] flex flex-col -center gap-2 mt-[30px]">
                <h5 className="text-[14px] md:text-[18px] lg:text-21px] font-bold text-center animate-bounce">AIMS AND OBJECTIVES OF THE SUMMIT</h5>

                <li>The summit seeks to extend a sense of responsibility to the teeming students of the institution.</li>

                <li>The program equally seeks to give an avenue for cross-fertilization of productive ideas between the students of the institution and leaders in their respective fields.</li>

                <li>The summit which is expected to have about one thousand (1000) students in attendance, also seeks to provide an avenue for mentorship of talents by leaders and alumni of the institution that have excelled in their field of practice.</li>

                <li>The summit hope to have an output of students whose minds are re-caliberated, reconfigured and also participants who are inspired for greatness.</li>

                <li>The summit seeks to fashion out a solution to the myriad of problems and challenges facing the growth and development of the students of the institution.</li>

                <li>The summit seeks to expose the students to skills, opportunities and ways they can get to equip themselves and be exceptional even as they study.</li>

            </div>
        </div>

        {/* sliders */}

        <Sliders />
        

        <Sliders2 />

    </div>
  )
}

export default Unveilling