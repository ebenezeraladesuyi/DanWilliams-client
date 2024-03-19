import React from 'react'

interface iPrefferred {
    num : string,
    title : string,
    details : string
}

const PreferredCard:React.FC<iPrefferred> = ({num, title, details}) => {
  return (
    <div className="flex gap-4">
        <div>
            <h4 className="text-[40px] font-bold md:text-[25px] text-[]">
                {/* 01 */}
                {num}
            </h4>
        </div>

        <div className=" flex flex-col gap-3">
            <h4 className="text-[15px] font-bold">
                {/* Range of Services */}
                {title}
            </h4>

            <hr className="w-[60%] border-[2px] border-[#eedfb0] " />

            <h6 className="text-[12px] md:text-[15px] text-[#0202029f] text-justify ">
                {/* We offer a wider range of services to ensure you get the same professional experience across board when you are starting, projecting or scaling a business – Market Intelligence, CAC Registration, Tax Services, Google My Business, Website Design, Corporate Identity Design, Branding & Printing and Professional Advisory. */}
                {details}
            </h6>
        </div>
    </div>
  )
}

export default PreferredCard