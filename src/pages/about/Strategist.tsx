// import React from 'react'

import dan from "../../assets/images/Daniel.png";

const Strategist = () => {
  return (
    <div className="w-full h-[100%] md:h-[40vh py-[50px] flex flex-col items-center justify-center font-pop overflow-hidden shadow-md">
        <div className="w-[90%] flex flex-col   gap-5">

            <h3 className="text-[20px] md:text-[30px] font-bold text-center animate-bounce">MEET OUR BRAND STRATEGIST</h3>
            
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div className="w-full md:w-[37%] bg-[#eedfb0] rounded-md">
                    <img src={dan} alt="" />

                    {/* <h5>DANIEL A. OLUWAYIOSE</h5> */}
                </div>

                <div className="w-full md:w-[57%] text-[11px] md:text-[14px] lg:text-[16px] flex flex-col gap-3 text-justify">
                    <p>
                        <span className="font-bold text-[12px] md:text-[15px] lg:text-[18px]">DANIEL A. OLUWAYIOSE</span> popularly addressed as DanWilliams is a Catalyst and a Socialpreneur with the Mandate of Expanding the Kingdom and Driving Societal Development through Business Peculiarities and Professional Efficiency.
                    </p>

                    <p>
                        He is an Accounting graduate by Academic distinction, currently a student of Google Digital School, an Associate Ambassador of ISERH Institute and some other award winning online institutes as a result of his quest to become a more developed person in the path he has chosen. In pursuit of his mandate fulfilment, he is a trained teacher, trainer and consultant having passed through certified trainings from world reputable training institutes.
                    </p>

                    <p>
                        His love and unending passion for the growth and development of young minds gave birth to one of the largest Human Development Summit with the brand name "Unveiling Summit", a Summit with the vision of setting young minds ablaze, liberating them from knowledge slavery.
                    </p>

                    <p>
                        His interest spins around Spirituality, Humanity and Business. He lives by a quote authored by him, "Don't try to be someone else because the more you try, the more you lose yourself.
                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Strategist