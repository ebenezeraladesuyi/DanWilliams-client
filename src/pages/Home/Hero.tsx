// import React from 'react'

import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <motion.section
      className="hero h-[100vh] w-full bg-hero-bg bg-center bg-cover bg-opacity-8 text-white py-20 flex justify-center items-center font-pop relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      
      <div className="absolute bg-black w-full h-full opacity-40"></div>

      <div className="container mx-auto w-[90%] z-30">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb- mt-[50px] md:mb-0 flex flex-col items-center gap-3 md:items-start text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              BUSINESS  
                    <span className="text-[#eedfb0]">
                        <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                            typewriter

                                .typeString("FORMATION")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("DEVELOPMENT")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("BRANDING")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("UPGRADING")
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </span> IN NIGERIA
            </motion.h1>
            <motion.p
              className="text-[16px] md:text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              We provide comprehensive solutions for business setup and management in Nigeria.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {/* <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full mr-4 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out">Get Started</button> */}

              <a href="https://bit.ly/DanWilliamsConsult" className="border bg-white text-black font-bold py-2 px-6 hover:px-8 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:border-none borer-none animate-bounce">Let's Get You Started</a>
            </motion.div>
          </div>
          
          {/* <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src="/hero-image.png" alt="Hero" className="mx-auto" />
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
}

export default Hero