import React from 'react'
import { motion } from 'framer-motion'

const Faq = () => {
  return (
    <>
     <motion.div initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}  
      transition={{ duration: 1 }}  className="w-[100%] xl:w-[100%] mx-auto mt-14">
        <div className="max-w-[497px] flex flex-col gap-1">
          <div className="text-[18px] text-[#FF5555] leading-[28px] font-medium">FAQ</div>
          <div className=" text-[48px] leading-[48px] font-bold">Frequently Asked Questions</div>
        </div>
        <div className=" w-full flex flex-col md:flex md:flex-row justify-center gap-5 my-10">
          <div className="w-full flex flex-col justify-center items-center gap-7">
            <div className="w-full max-w-[534px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md bg-[#FF5555] text-white">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="  text-[18px] leading-[28px] font-medium " >
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-customGray text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md bg-[#FF5555] text-white">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className=" text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
          </div>

          <div className="w-full max-w-[534px] flex flex-col justify-center items-center gap-7">
            <div className="w-full max-w-[534px]  px-[34px] flex flex-col justify-center items-center gap-2 rounded-md">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-customGray text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px]  px-[34px] flex flex-col justify-center items-center gap-2 rounded-md bg-[#FF5555] text-white">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-customGray text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
          </div>
        </div></motion.div></>
  )
}

export default Faq