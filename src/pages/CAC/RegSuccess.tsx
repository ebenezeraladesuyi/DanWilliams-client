import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const RegSuccess = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#150E28] bg-center bg-cover bg-boot-bg">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center gap-4 lg:gap-7">
            <div className="text-[150px] lg:text-[200px] text-white">
                <IoCheckmarkDoneCircle />
            </div>

            <div className=" text-white text-center text-[13px] md:text-[16px] lg:text-[20px]">
                Thank you for registering. 
                {/* Please, clcik on the button below to join the Whatsapp Community, where classes infprmation will be shared. */}
            </div>

            <a href="https://chat.whatsapp.com/Ez8BMvbrHLk5zYfN4TUlpD" className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse">
                Click To Stay Onboard
            </a>

            <hr className="w-[90%] mt-[15px] mb-[15px] border-[2px] border-white" />

            <NavLink to="/">
                <button className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse">Explore Our Website</button>
            </NavLink>
        </div>
    </div>
  )
}

export default RegSuccess