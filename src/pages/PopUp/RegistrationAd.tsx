import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const RegistrationAd: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the ad when the page is loaded
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center md:justify-end items-center md:items-end z-50 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
          <motion.div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 text-center relative md:mb-[40px] md:mr-[40px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Don’t Miss Out!
            </h2>
            <p className="text-gray-600 mb-6">
              Join us for an exciting opportunity to enhance your skills.  
              Click below to register now!
            </p>

            <NavLink to="/cac">
                <button
            //   href="https://example.com/register"
            //   target="_blank"
            //   rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Register Now
                </button>
            </NavLink>

            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default RegistrationAd;
