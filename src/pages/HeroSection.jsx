import React from "react";
import play from "../assets/play-video-icon.svg";
import arrow from "../assets/white-arrow-right.svg";
import banner from "../assets/banner.svg";
import frame9 from "../assets/Frame 9.svg";
import Button from "../components/Button/Button";

const HeroSection = () => {
  return (
    <>
      <div className="w-[80%] xl:w-[70%] flex flex-col md:flex xl:flex-row mt-10  ">
        <div className="xl:w-[60%] flex flex-col gap-8 ">
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
        </div>
        <div className="xl:w-[50%]">
          <img src={frame9} alt="ok" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
