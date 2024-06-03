import React, { useContext }  from 'react'
import ThemeContext from "../context/ThemeContext";
import Frame6 from '../assets/Frame 6.svg'
import Group4 from '../assets/Group4.svg'
import { motion } from 'framer-motion'
import ppl from '../assets/ppls.svg'

const Testimonials = () => {
    const { currentTheme } = useContext(ThemeContext)
    return (
        <>
            <div className='w-[80%] xl:w-[70%]'>
                <div>
                    <div><h3 className='text-[18px] tracking-[1.6px] mb-[4px] text-center xl:text-[16px]'>
                        TESTIMONIAL
                    </h3></div>
                    <div><h4 className='capitalize text-center mx-auto text-[48px] font-[700] leading-[1] max-w-[500px] xl:text-[32px]'>
                        What our users <br />
                        say about us?
                    </h4></div>
                </div>
                <div className='flex-col-reverse justify-center items-center xl:flex xl:flex-row'>
                    <div className='w-[70%] ml-40 xl:w-[50%] xl:ml-0 '><motion.img initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }} src={currentTheme === "light" ? Frame6 : ppl} alt='ok' /></div>
                    
                    <motion.div initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} className='flex flex-col pl-8 pr-5 xl:w-[50%] xl:p-0 justify-center items-start gap-4'>
                    <h5 className='text-[28px] font-[600] leading-[1] capitalize xl:text-[24px]'>
                        The best financial accounting app ever!
                    </h5>
                    <p className='text-[#818181] text-[18px] leading-[1.6] lg:text-[16px]'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                        ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                        tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
                        diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
                        neque lorem sapien, suspendisse aliquam.”
                    </p>
                    <img src={Group4} alt='avatars' width={192} />
                    <span className='text-[18px] font-[600]'>Nick Jonas</span>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Testimonials