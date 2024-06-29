/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { iSubscribe } from '../../types/Interface';
import axios from 'axios';
// import { useMutation } from "@tanstack/react-query";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
// import * as yup from "yup";
// import { UseAppDispatch } from "../../global/Sttore";
// import { User } from "../../global/ReduxState";
import Swal from "sweetalert2";
import { url } from '../../utils/Api';
// import { userSubscribe } from '../../utils/Api';
// import { useNavigate } from 'react-router-dom';

const Subscribe = () => {

    const [info, setInfo] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [allSub, setAllSub] = React.useState<iSubscribe>({
        fullName: '',
        email: '',
    });

    const showInfo = () => {
        setInfo(!info)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${url}/dwcsub/dwcsubscribe`, allSub);
            
            // console.log('Member created successfully:', response.data);

            setAllSub({     
                fullName: '',
                email: '',
            });
            
            if (response.data) {
                Swal.fire({
                    title: "You have successfully subscribed",
                    text: "Thank you for subscribing. Do not subscribe again. This email can only subscribe once.",
                    icon: "success",
                    // timer: 4000,
                    // timerProgressBar: true,
                });
            }

        } catch (error) {
            console.error('error while subscribing.Try again', error)
        } finally {
            setLoading(false)
        }
    };

    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAllSub({ ...allSub, [name]: value });
      };
    


  return (
    <div id="partners" className="w-full h-[100vh  flex justify-center items-center font-mont bg-center bg-cover relative py-[30px] md:pt-[45px] bg-[#eedfb0] shadow-m">
        <div className="w-[85%] flex flex-col justify-center items-center md:justify-between ">
            <h5 className="md:w-[60%] lg:w-[50%] font-semibold text-[12px] md:text-[15px] text-[#eedfb0 mb-[10px] text-center">Subscribe to strategically position yourself for business and growth updates</h5>

            {/* <h5 className="font-semibold text-[#eedfb0 mb-[10px] outline-none">Subscribe to Our Newsletter</h5> */}

            <button className='w-[120px] h- bg-transparent rounded-[25px] text-[#eedfb0 border-[1px] border-[#000000] hover:bg-[#000000] hover:text-white hover:border-none hover:outline-none' 
                onClick={showInfo}
            >Subscribe</button>


            { info ? 
                <div className="mt-[20px] flex flex-col items-center justify-center">
                    <form 
                        onSubmit={handleSubmit} 
                        className=" flex flex-col items-center justify-cente gap-3" 
                        action=""
                    >
                        <input type="text" placeholder="FullName" className="w-[280px] md:w-[350px] lg:w-[500px] h-[38px] text-[13px] border-[#000000] rounded-md border-[1px] px-3 outline-none"
                        name='fullName'
                        value={allSub.fullName}
                        onChange={handleChange}
                         />
                         {/* <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.fullName && errors?.fullName.message}</p> */}

                        <input type="email" placeholder="Email" className="w-[280px] md:w-[350px] lg:w-[500px] h-[38px] text-[13px] border-[#000000] rounded-md border-[1px] px-3 outline-none" 
                        name='email'
                        value={allSub.email}
                        onChange={handleChange}
                        />
                        {/* <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.email && errors?.email.message}</p> */}

                        {loading ?

                            (<div className="w-full flex justify-center items-center">
                                <DatasIsaLoading /> 
                            </div>)

                        :

                            <button className='w-[100px] text-[13px] h-[35px] bg-transparent rounded-md text-[#00a4f2 border-[1px] border-[#000000] hover:bg-[#000000] hover:text-white hover:border-none hover:outline-none' type='submit'>Submit</button>
                        }

                    </form>
                </div>

            : 
            null }
        </div>
    </div>
  )
}

export default Subscribe