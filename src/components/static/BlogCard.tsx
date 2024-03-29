/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// import img from "../../assets/images/biz5.jpg"

interface iBlogCard {
    img : any,
    title : string,
    details : string,
}

const BlogCard:React.FC<iBlogCard> = ({img, title, details}) => {
  return (
    <div className="w-[260px] h-[520px] flex flex-col gap- shadow-md rounded-md mb-[10px] ml-[15px] mr-[5px] md:ml-[10px] md:mr-[10px] overflow-hidden">
        <div className="w-full h-[35%]">
            <img className="w-full h-full" src={img} alt="" />
        </div>

        <div className="p-4 h-[70%] flex flex-col justify-between gap-2">
            <div className='flex flex-col gap-3'>
                <h5 className=" text-blue-40 text-[12px] md:text-[14px] font-bold">
                {/* BREAK THE SHACKLES */}
                {title}
                </h5>

                <hr className="w-[30%] border-[2px] border-[#80c41c]" />
                
                <h6 className="text-[12px] md:text-[14px text-justify">
                    {/* As people, much of who we are today, how we behave, how we think, how we view the world, how we interpret situations, handles success, define failures and how we talk to ourselves and others is based on the collection of beliefs we’ve accumulated over our lifetimes. */}
                    {details}
                </h6>
            </div>

            <a href="https://danwilliamsconsult.blogspot.com" className="text-[12px] md:text-[14px] bg-black rounded-[20px] p-2 text-white flex items-center justify-center" >
                Read More
            </a>
        </div>
    </div>
  )
}

export default BlogCard