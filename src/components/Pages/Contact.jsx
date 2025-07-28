import React from "react";
import MainLogo from "../../assets/Logos/mainLogo.png";
import We from "../../assets/Icons/wechat.png";
import Mail from "../../assets/Icons/mail.png";
import WeChatQR from "../WeChatQR";

const Contact = () => (
  <section
    className="relative bg-white mb-2 sm:pb-16 font-serif flex flex-col justify-between overflow-hidden"
    id="contact"
    style={{ fontFamily: "Merriweather, serif" }}
  >
    {/* Top: Target Icon and Heading */}
    <div className="flex flex-col items-center max-w-6xl mx-auto mt-4 sm:mt-8 md:mb-44 lg:mb-54">
      <div className="flex items-center ml-10 sm:ml-34 md:ml-0 gap-4 mb-4">
        {/* Target Icon */}
        <img
          src={MainLogo}
          data-aos="fade-right"
          className="h-14 sm:h-16 -mr-1 sm:mr-0 md:h-19 lg:h-20 md:mr-1 lg:mr-4"
        ></img>
        <div
          className="text-left border-l-2 pl-6 w-[58%] sm:w-[53.5%] md:w-80"
          data-aos="fade-up"
        >
          <div
            data-aos="fade-left"
            className="text-[12px] sm:text-sm tracking-wider md:tracking-normal md:text-xl lg:text-2xl font-semibold text-black font-sans"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            Interested in taking your essays to the next level?
          </div>
          <div
            data-aos="fade-left"
            className="text-[12px] sm:text-sm md:text-xl tracking-wide md:tracking-wider text-gray-700 font-sans"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            We’d love to hear from you!
          </div>
        </div>
      </div>
    </div>

    {/* Middle: QR and Red Card */}
    <div
      className="relative flex flex-col items-center mt-26 md:mt-8"
      data-aos="fade-left"
    >
      {/* Black accent shape */}
      <div className="absolute md:left-22 lg:left-24 md:-top-8 lg:-top-10 -skew-x-18 rounder-4xl w-20 h-20 sm:w-40 sm:h-34 -top-3 sm:-top-7 left-13 sm:left-15 md:w-50 md:h-44 lg:w-74 lg:h-54 bg-black rounded-tl-2xl rounded-tr-2xl rounded-b-2xl sm:rounded-tr-4xl sm:rounded-b-4xl md:rounded-4xl z-0"></div>
      {/* Red card */}
      <div className="relative z-10 w-[108%] sm:w-[110%] -right-[14%] md:w-[54rem] md:h-[26rem] lg:w-[68rem] xl:w-[88rem] bg-red-500 md:-right-30 rounded-l-4xl pb-10 sm:pb-20 md:p-8 pt-24 flex flex-col -skew-x-18 items-center lg:h-[30rem]">
        {/* QR code */}
        <div className="absolute md:right-[15rem] lg:right-[16rem] xl:right-[22rem] right-[28%] sm:right-[18%] -top-21 sm:-top-24 md:-top-36 -translate-x-1/2 skew-x-18 rounded-lg p-2 shadow-lg">
          {/* Placeholder for QR code */}
          <div
            data-aos="fade-right"
            className="w-28 h-30 sm:w-38 sm:h-36 md:w-64 md:h-60 lg:w-74 lg:h-70 rounded-lg overflow-hidden"
          >
            <WeChatQR />
          </div>
        </div>
        {/* Stylized slash */}
        <div className="absolute md:right-[19rem] lg:right-[20rem] xl:right-[24rem] right-[32%] sm:right-[20%] -top-6 sm:-top-8 md:-top-14 w-3 h-14 sm:w-4 sm:h-16 md:w-6 md:h-26 lg:w-8 lg:h-32 bg-black rounded-sm"></div>
        {/* Contact Us Heading */}
        <div className="relative -left-14 sm:-left-15 md:-left-26 lg:-left-40 xl:-left-64 mt-0 sm:mt-6 md:mt-30 lg:mt-38 mb-2 text-white skew-x-18 text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-wide font-bold">
          Contact Us
        </div>
        {/* Divider */}
        <div className="relative -left-13 sm:-left-15 md:-left-26 lg:-left-40 xl:-left-64 w-10 sm:w-12 h-1 bg-white rounded-full skew-x-18 mb-6"></div>
        {/* Contact Info */}
        <div className="relative flex flex-row gap-x-8 sm:gap-x-24 md:gap-x-20 lg:gap-x-38 tracking-wide items-center -left-10 sm:-left-14 md:-left-24 lg:-left-40 xl:-left-64 skew-x-18 justify-center text-white font-sans text-[10px] sm:text-sm md:text-xl lg:text-2xl">
          <a
            href="mailto:ming@essayarrow.com"
            className="flex items-center gap-1 sm:gap-2"
          >
            {/* Email Icon */}
            <img src={Mail} className="h-4 sm:h-5 md:h-6 mt-1" />
            ming@essayarrow.com
          </a>
          <a
            href="https://u.wechat.com/MK0gOBE5EE_lNl8rJDDRHAs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2"
          >
            {/* WeChat Icon */}
            <img src={We} className="h-4 sm:h-5 md:h-6" />
            WeChat: 15801770295
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
