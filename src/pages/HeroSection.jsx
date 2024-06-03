import React, { useContext }  from 'react'
import ThemeContext from "../context/ThemeContext";
import play from "../assets/play-video-icon.svg";
import arrow from "../assets/white-arrow-right.svg";
import banner from "../assets/banner.svg";
import frame9 from "../assets/Frame 9.svg";
import Button from "../components/Button/Button";
import phones from '../assets/phones-d.svg'
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { currentTheme } = useContext(ThemeContext)
  return (
    <>
      <div className="w-[80%] xl:w-[80%] flex flex-col md:flex xl:flex-row mt-10  ">
        <motion.div  initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 90 }}
              transition={{ duration: 1 }}  className="xl:w-[60%] flex flex-col gap-8 ">
          <div>
            <h1 className="md:text-[64px] leading-[1] font-[800] text-[40px] 2xl:text-[48px] xl:text-[36px]">
              Make The Best Financial Decisions
            </h1>
          </div>
          <div>
            <p className="capitalize text-[#888888] text-[18px] xl:text-[16px] xl:w-[80%]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="flex flex-col sm:flex sm:flex-row gap-10">
            <div>
            <Button>Get Started &rarr;</Button>
            </div>
            <div>
              <button className="flex items-center gap-[14px] pt-4">
                <img src={play} alt="play" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
          <div>
            <img src={banner} alt="ok" />
          </div>
        </motion.div>
        <div className="xl:w-[50%]">
          <motion.img initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} src={currentTheme === "light" ? frame9 : phones} alt="ok" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
