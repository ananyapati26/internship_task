import React from 'react'
import Frame from '../assets/advertise.png'
import { motion } from 'framer-motion'

const Advertisement = () => {
    return (
        <>
            <motion.div initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}  
      transition={{ duration: 1 }} className="md:w-11/12 md:max-w-[1090px] md:mx-auto md:py-[100px] md:relative">
                <img src={Frame} alt='ok' className="w-[90%] pl-12 md:pl-0 md:w-full md:z-1" />
            </motion.div>

        </>
    )
}

export default Advertisement