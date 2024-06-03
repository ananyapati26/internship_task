import React from 'react'
import group2 from '../assets/Group2.svg'
import frame4 from '../assets/Frame 4.svg'
import frame8 from '../assets/Frame 8.svg'
import group3 from '../assets/Group3.svg'
import { motion } from 'framer-motion'

const Advantages = () => {
  return (
    <>
    <div  className=' lg:w-[70%] flex flex-col w-[100%] justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-center'>
        <motion.div initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 90 }}
          transition={{ duration: 1 }} className='lg:w-[50%] flex flex-col justify-center pl-20 pr-20 xl:pr-0'>
            <div><h3 className='text-[18px] tracking-[1.6px] text-[#FF5555] mb-[4px] xl:text-[16px]'>
              ADVANTAGES
            </h3></div>
            <div><h4 className='capitalize text-[48px] font-[700] leading-[1] max-w-[500px] xl:text-[32px] pb-5'>
              Who choose Uifry?
            </h4></div>
            <div className='flex items-center gap-[15px] pb-5'>
                <div><img src={group2} alt='advantage' /></div>
                <span className='font-[600] leading-[1] capitalize text-[28px] xl:text-[20px]'>
                Clever notifications
              </span>
            </div>
            <div><p className='text-[#818181] capitalize text-[18px] xl:text-[16px]'>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p></div>
        </motion.div>
        <div className='w-[80%] lg:w-[50%] '><motion.img initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }} src={frame4} alt='ok'/></div>
    </div>
    <div  className='lg:w-[70%] flex flex-col w-[100%] justify-center items-center lg:flex lg:flex-row-reverse lg:justify-center lg:items-center'>
    <motion.div initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} className='lg:w-[50%] flex flex-col justify-center pl-20 pr-20 lg:pr-20 lg:pl-0'>
        
        <div className='flex items-center gap-[15px] pb-5'>
            <div><img src={group3} alt='advantage' /></div>
            <span className='font-[600] leading-[1] capitalize text-[28px]  lg:text-[20px]'>
            Fully Customizable
          </span>
        </div>
        <div><p className='text-[#818181] capitalize  text-[18px]  lg:text-[16px]'>
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
          ultricies. In ultrices malesuada elit mauris etiam odio. Duis
          tristique lacus, et blandit viverra nisl velit. Sed mattis
          rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
          ac dolor neque lorem sapien, suspendisse aliquam.
        </p></div>
    </motion.div>
    <div className='w-[80%] lg:w-[50%]'><motion.img initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }} src={frame8} alt='ok'/></div>
</div>
</>
  )
}

export default Advantages