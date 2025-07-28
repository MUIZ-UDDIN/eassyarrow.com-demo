import React from "react";
import DraftImg from "../../assets/Img/Draft-Img.jpg";

const Services = () => {
  return (
    <section
      className="relative bg-white py-8 sm:py-12 md:py-14 md:mt-4 lg:mt-20 pl-4 md:pr-4 lg:pr-0 overflow-hidden font-serif"
      id="services"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="relative flex flex-wrap">
        <div className=" max-w-6xl mx-auto">
          {/* Essay Editing */}
          <h2
            className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2 text-black text-left"
            data-aos="flip-up"
          >
            Essay <span className="text-red-600">Editing</span>
          </h2>
          <p
            className="text-[12px] sm:text-sm md:text-xl lg:text-2xl tracking-tight text-black mb-2 sm:mb-4 text-left font-sans"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
            data-aos="fade-right"
          >
            Take your writing to the
            <b> next level </b> with our personalized essay polishing services.
            We edit completed essays drafts and level them up to support
            compelling applications for top business schools. Use this service
            to:
          </p>
          <ul
            className="mb-4 space-y-1 md:space-y-2 tracking-tight text-[10px] sm:text-sm md:text-xl lg:text-2xl font-sans"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            <li className="flex items-start" data-aos="zoom-out-down">
              <span className="text-red-500 mr-2">&#8594;</span>
              <div>
                <b>Leverage insider knowledge </b>
                from M7 business school admissions committees and tailor your
                content for your dream school
              </div>
            </li>
            <li className="flex items-start" data-aos="zoom-out-down">
              <span className="text-red-500 mr-2">&#8594;</span>
              <div>
                <b>Masterfully craft</b> a unique and logical MBA story by
                taking advantage of our unparalleled storytelling skills
              </div>
            </li>
            <li className="flex items-start" data-aos="zoom-out-down">
              <span className="text-red-500 mr-2 ">&#8594;</span>
              <div>
                <b>Elevate your expressions </b>
                to communicate thoughts and cultural nuances with compelling and
                superior English prose
              </div>
            </li>
            <li className="flex items-start" data-aos="zoom-out-down">
              <span className="text-red-500 mr-2">&#8594;</span>
              <div>
                <b>Reduce words</b> to hit essay word limits while retaining
                your story essence
              </div>
            </li>
          </ul>
          <div className="flex flex-nowrap text-[10px] sm:text-sm sm:gap-x-10 md:text-xl lg:text-2xl md:gap-x-16 lg:gap-x-50 xl:gap-x-64 lg:px-10 xl:px-0 mb-6 sm:mb-10">
            <div
              className="flex flex-col border-l-2 border-red-600 pl-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className="text-red-600 font-bold mr-2">
                Regular Service
              </span>
              <span className="text-gray-800 md:text-[16px] lg:text-lg">
                (24-hour, next-day delivery). 35 USD/word
              </span>
            </div>
            <div
              className="flex flex-col border-l-2 border-red-600 pl-4"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <span className="text-red-600 font-bold mr-2">Rush Service</span>
              <span className="text-gray-800 md:text-[16px] lg:text-lg">
                (12-hour, same day delivery). 52.5 USD/word
              </span>
            </div>
          </div>
        </div>

        {/* Draft Review Section */}
        <div className="xl:pl-20 mx-auto md:gap-x-14 lg:gap-x-12 xl:gap-x-0 flex flex-row">
          <div className="w-3/4 md:w-3/4 xl:flex-2">
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold md:mb-2 lg:mb-6 text-black text-left" data-aos="fade-down">
              Draft <span className="text-red-600">Review</span>
            </h3>
            {/* Left content */}
            <div className="pr-15 sm:pr-24 md:pr-16 lg:pr-0">
              <p
                className="text-[12px] sm:text-sm md:text-xl lg:text-2xl tracking-tight text-black md:mb-2 lg:mb-6 font-sans"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
                data-aos="fade-right"
              >
                Prepare your package by receiving written feedback on your essay
                drafts to improve content and logical thinking. Use this service
                to:
              </p>

              <ul
                className="mb-2 sm:mb-6 md:space-y-2 lg:space-y-4 text-[10px] sm:text-sm md:text-xl lg:text-2xl font-sans"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                <li className="flex items-start" data-aos="fade-up-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b>Improve the logic</b> of your storyline or essay content
                    structure and receive feedback on how it will be perceived
                    by the admissions committee of your target school.
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-up-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b>Optimize your content </b>
                    and theme selection to effectively speak to the Adcom of
                    your dream schools.
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-up-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div className="pr-1 sm:pr-0">
                    <b>Receive profile-based feedback </b>
                    on your content based on recent MBA applicant demographic
                    trends.
                  </div>
                </li>
              </ul>

              {/* Pricing Cards */}
              <div className="pr-10 sm:pr-12 md:pr-20 lg:pr-0 md:space-y-4 lg:space-y-8">
                {/* Per School Pricing */}
                <div className="relative lg:pr-20 xl:pr-12" data-aos="fade-up">
                  <h3
                    className="z-10 text-[12px] sm:text-md md:text-2xl lg:text-3xl md:mb-2 lg:mb-4 font-sans relative"
                    style={{ fontFamily: "Lato, Arial, sans-serif" }}
                  >
                    Per School $750 USD
                  </h3>
                  <div className="absolute bg-red-300 w-7 h-5 -left-1 sm:w-8 sm:h-6 md:w-14 md:h-10 lg:w-17 lg:h-12 -top-0.5 md:-top-1.5 sm:-left-2 lg:-left-2 xl:-left-3 -skew-x-12 rounded-sm sm:rounded-md"></div>
                  <p className="flex text-black text-[10px] sm:text-sm md:text-xl lg:text-2xl tracking-wide font-sans relative z-10">
                    <span className="text-red-500 mr-2">&#8594;</span>
                    Initial set of comments on all application documents
                    including personal statement, supplemental/optional essays,
                    recommendation letters, scholarship essay and waiting list.
                  </p>
                </div>

                {/* Per Essay Pricing */}
                <div className="relative" data-aos="fade-up">
                  <h3
                    className="z-10 text-[12px] sm:text-md md:text-2xl lg:text-3xl md:mb-4 font-sans relative"
                    style={{ fontFamily: "Lato, Arial, sans-serif" }}
                  >
                    Per Essay $250 USD
                  </h3>
                  <div className="absolute bg-red-300 w-7 h-5 -left-1 sm:w-8 sm:h-6 md:w-14 md:h-10 lg:w-17 lg:h-12 -top-0.5 md:-top-1.5 sm:-left-2 lg:-left-2 xl:-left-3 -skew-x-12 rounded-sm sm:rounded-md"></div>
                  <p className="text-black text-[10px] sm:text-sm md:text-xl flex lg:text-2xl tracking-wide font-sans relative z-10 pr-1.5 sm:pr-0">
                    <span className="text-red-500 mr-2">&#8594;</span>
                    One set of comments per essay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="w-1/4 md:w-1/4 xl:flex-1" data-aos="fade-up-left">
            {/* Red accent shape */}
            <div className="relative w-[180%] h-[44%] sm:w-[180%] sm:h-[50%] right-[46%] sm:right-[56%] md:w-[20.5rem] md:h-[36rem] lg:w-[34rem] md:right-15 lg:right-3 xl:-right-24 lg:h-[40rem] bg-red-500 skew-x-16 rounded-2xl sm:rounded-4xl z-0"></div>

            {/* Placeholder Image */}
            <div className="absolute z-10 w-[64%] h-[55%] sm:w-[53%] -right-[24%] sm:h-[50%] sm:-right-[12%] md:w-[27.5rem] md:h-[44rem] lg:w-[28rem] xl:w-[34rem] lg:h-[40rem] xl:h-[41rem] bottom-0 md:-right-38 lg:-right-28 -skew-x-18 rounded-l-4xl bg-gray-200 shadow-lg overflow-hidden">
              <img
                src={DraftImg}
                className="w-full h-full object-cover object-right skew-x-18 scale-150 sm:scale-136 md:scale-150 lg:scale-145"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
