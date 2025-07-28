import React from "react";
import HomeImg from "../../assets/Img/Home-Img.jpg";
import Mit_Logo from "../../assets/Logos/mit.png";
import MainLogo from "../../assets/Logos/mainLogo.png";
import Columbia_Logo from "../../assets/Logos/col.png";
import kellogg_Logo from "../../assets/Logos/kellog.png";
import Harvard_Logo from "../../assets/Logos/Hard.png";
import Wharton_Logo from "../../assets/Logos/wharton.png";
import Stanford_Logo from "../../assets/Logos/stanford.png";
import Chicago_Logo from "../../assets/Logos/chicago.png";
import TextType from "../Effects/TextType";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <section
      className="relative bg-white flex flex-col justify-between py-0 px-0 overflow-hidden sm:overflow-hidden md:overflow-hidden lg:overflow-none xl:overflow-hidden font-serif"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {/* Top Logo */}
      <div className="float-start translate-x-1/14 flex py-4 sm:py-8 items-center">
        <img
          src={MainLogo}
          className="relative -top-1.5 h-10 left-7 sm:h-14 sm:left-4 md:left-0 md:h-18"
          data-aos="fade-down"
        />
        <div className="absolute left-16 flex">
          <TextType
            as="span"
            text={["Essay"]}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold z-10"
            style={{ color: "#E53E3E", fontFamily: "Merriweather, serif" }}
            typingSpeed={75}
            pauseDuration={0}
            showCursor={false}
          />
          <TextType
            as="span"
            text={[" Arrow"]}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold z-10"
            style={{ color: "#222", fontFamily: "Merriweather, serif" }}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center relative z-10 pt-2 sm:pt-4 pb-4 sm:pb-8">
        {/* Main Image with Red Border */}
        <div
          className="relative mb-[-60px] lg:ml-0 xl:ml-[-6rem]"
          data-aos="fade-left"
        >
          <div className="absolute -inset-10 rounded-3xl sm:rounded-4xl bg-red-500 -skew-x-14 z-0 left-[50%] sm:left-[66%] xl:left-4/6 md:left-84 lg:left-4/5 xl:h-100 xl:w-120 w-40 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 sm:-top-6 -top-4 md:-top-10"></div>
          <div className="rounded-3xl sm:rounded-4xl relative z-10 md:w-[34rem] left-[5%] sm:left-[10%] md:left-[2%] h-[12rem] w-[15rem] sm:h-[20rem] sm:w-[23rem] md:h-[28rem] lg:left-20 lg:h-[28rem] lg:w-[38rem] xl:w-[52rem] xl:h-[42rem] -skew-x-14 shadow-2xl overflow-hidden">
            <img
              src={HomeImg}
              alt="Hand writing in notebook"
              className="rounded-3xl sm:rounded-4xl absolute w-full h-full object-cover scale-120 skew-x-14"
            />
          </div>
        </div>

        {/* Red Overlay Box */}

        <div
          className="relative mt-[-16%] md:mt-[-9rem] lg:mt-[-12rem] xl:mt-[-14rem] w-[76%] -left-[20%] sm:-left-[20%] md:-left-[22%] lg:-left-[19%] xl:-left-[20%] z-20"
          data-aos="fade-right"
        >
          {/* Skewed container */}
          <div className="relative bg-red-600 -skew-x-14 rounded-r-2xl sm:rounded-r-4xl shadow-lg xl:h-110 opacity-85">
            {/* Border Outline */}
            <div className="absolute rounded-2xl sm:rounded-4xl border-2 sm:border-4 border-red-600 z-0 w-[90%] h-[96%] left-[18%] -top-[20%] sm:w-[80%] sm:h-[98%] md:h-90 md:w-[90%] lg:w-160 lg:h-110 xl:w-[86%] xl:h-140 md:-top-22 lg:-top-20 xl:-top-48 sm:-top-[24%] sm:left-[28%] md:left-[18%] lg:left-[24%] xl:left-[22%]"></div>

            {/* Unskewed content inside */}
            <div className="text-white pl-[16%] md:pl-24 pr-[6%] md:pr-4 lg:pl-22 py-4 sm:py-6 md:py-10 xl:pl-44 skew-x-14">
              <h1
                className="text-[120%] sm:text-[220%] md:text-[260%] lg:text-5xl xl:text-[405%] sm:leading-10 lg:tracking-wider xl:tracking-wider font-bold md:leading-12 lg:leading-16 xl:leading-19 font-serif"
                style={{ fontFamily: "Merriweather, serif" }}
                data-aos="zoom-in"
              >
                MBA Essay Editing from Admissions Readers at M7 Schools
              </h1>
              <p
                className="text-[78%] sm:text-xl md:text-2xl mt-4 lg:text-3xl xl:text-4xl font-normal sm:leading-8 sm:tracking-wid md:tracking-wider lg:tracking-wider md:leading-10 xl:tracking-wide font-sans"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
                data-aos="zoom-in"
              >
                For applicants to top USA and Global MBA programs. Tell your
                unique story, stand out, get admitted!
              </p>
            </div>
          </div>
        </div>

        {/* Stylized Slash */}
        <div
          className="-mt-15 sm:-mt-20 md:-mt-25 mb-2 md:w-[32px] md:h-[100px] -mr-[68%] md:-mr-140 lg:-mr-190 xl:-mr-220"
          data-aos="fade-up-left"
        >
          <div className="w-[16px] h-[60px] sm:w-[22px] sm:h-[80px] bg-black rounded-sm sm:rounded-md -skew-x-18"></div>
        </div>
      </div>

      {/* School Logos */}
      <div className="w-full flex flex-col relative">
        {/* First row: 4 logos */}
        <div className="flex justify-center items-center gap-x-3 sm:gap-x-8 md:gap-x-10 lg:gap-x-24 xl:gap-x-37 sm:flex-wrap md:flex-wrap lg:flex-nowrap">
          <img
            src={Mit_Logo}
            alt="MIT"
            className="h-8 w-18 sm:h-10 sm:w-24 md:h-14 md:w-30 lg:h-22 lg:w-40 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <img
            src={Columbia_Logo}
            alt="Columbia"
            className="h-20 w-18 sm:h-26 sm:w-24 md:h-34 md:w-34 lg:h-40 lg:w-40 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          />
          <img
            src={Harvard_Logo}
            alt="Harvard"
            className="h-14 w-22 sm:h-20 sm:w-28 md:h-40 md:w-38 lg:h-50 lg:w-42 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
          />
          <img
            src={kellogg_Logo}
            alt="Kellogg"
            className="h-14 w-15 sm:h-18 sm:w-20 md:h-24 md:w-26 lg:h-28 lg:w-28 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="900"
          />
        </div>

        {/* Second row: 3 logos */}
        <div className="flex justify-center items-center gap-x-3 sm:gap-x-8 md:gap-x-10 lg:gap-x-24 xl:gap-x-37 flex-wrap">
          <img
            src={Wharton_Logo}
            alt="Wharton"
            className="h-18 w-18 sm:h-24 sm:w-24 md:h-34 md:w-34 lg:h-40 lg:w-40 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <img
            src={Stanford_Logo}
            alt="Stanford"
            className="h-18 w-18 sm:h-24 sm:w-24 md:h-34 md:w-34 lg:h-40 lg:w-40 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          />
          <img
            src={Chicago_Logo}
            alt="Chicago Booth"
            className="h-18 w-18 sm:h-24 sm:w-24 md:h-34 md:w-34 lg:h-40 lg:w-40 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
