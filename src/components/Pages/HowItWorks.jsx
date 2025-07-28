import React from "react";
import ServiceImg from "../../assets/Img/Services-img.jpg";

const steps = [
  {
    title:
      "Reach out to us via WeChat or Email for an initial consultation and a hello!",
  },
  {
    title: "Send us your documents, select your service and return time",
  },
  {
    title: "Complete your payment via WeChat, Alipay or Paypal",
  },
  {
    title:
      "Receive your revised document and review. If you require further changes, please make comments in the document and send it to us via WeChat",
  },
  {
    title: "Revisions are UNLIMITED until you are 100% satisfied",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="relative bg-white pb-[16rem] sm:pb-[38rem] px-4 font-serif overflow-hidden"
      id="how"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-10 lg:mb-16 text-black text-left"
          data-aos="fade-up"
        >
          How does the <span className="text-red-500">Service Work</span>
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1.5 md:gap-y-12 gap-x-8">
          {/* Left Column: Steps 1-3 */}
          <div className="space-y-1.5 md:space-y-4 lg:space-y-10">
            {steps.slice(0, 3).map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4"
                data-aos="fade-right"
              >
                <div className="relative">
                  <div className="relative w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-[12px] sm:text-sm md:text-xl lg:text-2xl font-sans z-10">
                    {idx + 1}
                  </div>
                  <div className="absolute top-1/2 -left-1.5 md:left-2 lg:left-1.5 ml-2 transform -translate-y-1/2 text-red-500 text-4xl md:text-5xl lg:text-6xl z-0">
                    →
                  </div>
                </div>
                <div
                  className="text-[12px] sm:text-sm md:text-xl self-center lg:text-2xl text-black tracking-wider text-left font-sans"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
                  {step.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Steps 4-5 + Image */}
          <div className="space-y-10 relative">
            <div className="space-y-1.5 md:space-y-4 lg:space-y-10">
              {steps.slice(3).map((step, idx) => (
                <div
                  key={idx + 3}
                  className="flex items-start gap-4"
                  data-aos="fade-left"
                >
                  <div className="relative">
                    <div className="relative w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-[12px] sm:text-sm md:text-xl lg:text-2xl font-sans z-10">
                      {idx + 4}
                    </div>
                    <div className="absolute top-1/2 -left-1.5 md:left-2 lg:left-1.5 ml-2 transform -translate-y-1/2 text-red-500 text-4xl md:text-5xl lg:text-6xl z-0">
                      →
                    </div>
                  </div>
                  <div
                    className="text-[12px] sm:text-sm md:text-xl self-center lg:text-2xl text-black tracking-wider text-left font-sans"
                    style={{ fontFamily: "Lato, Arial, sans-serif" }}
                  >
                    {step.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Image Section with Red Skewed Background */}
      <div className="absolute mt-12 sm:mt-20" data-aos="fade-up-left">
        {/* Red skewed background shape */}
        <div className="absolute w-[40%] h-[50%] left-9 sm:w-[43%] sm:h-[36%] sm:left-24 -top-5 sm:-top-8 md:w-[24rem] md:h-[20rem] bg-red-500 skew-x-[-16deg] md:-top-10 md:left-24 lg:left-50 origin-left rounded-3xl sm:rounded-4xl z-0"></div>

        {/* Grey image placeholder */}
        <div className="relative z-10 w-[28rem] h-[16rem] sm:w-[50rem] sm:h-[40rem] left-[8%] sm:left-[10%] md:w-[80rem] md:left-24 lg:left-50 md:h-[34rem] rounded-tl-4xl skew-x-[-16deg] overflow-hidden shadow-2xl">
          <img
            src={ServiceImg}
            className="skew-x-[16deg] w-full h-full object-cover object-right-bottom scale-114"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
