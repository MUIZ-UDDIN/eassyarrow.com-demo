import React from "react";
import MyImg from "../../assets/Img/ming.jpeg";

const About = () => {
  return (
    <section
      className="relative bg-white md:pt-10 lg:pt-16 px-4 max-w-6xl mx-auto font-serif overflow-hidden sm:overflow-visible"
      id="about"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {/* Who We Are */}
      <h2
        className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-0 md:mb-4 lg:mb-4 xl:mb-2 text-black text-left"
        data-aos="zoom-in-up"
      >
        Who <span className="text-red-600">We Are ?</span>
      </h2>
      <p
        className="text-[12px] sm:text-sm md:text-xl lg:text-2xl text-black mb-4 sm:mb-6 text-left font-sans"
        style={{ fontFamily: "Lato, Arial, sans-serif" }}
        data-aos="zoom-in-up"
      >
        Essay Arrow is a <b> boutique </b> essay editing service featuring MBA
        graduate editors involved in the admissions reading process at M7
        schools. We are <b>passionate</b> about helping applicants communicate
        their passions and life stories in vibrant and colorful ways that
        <b>maximize their chances of admission</b>.
      </p>

      {/* Our Team */}
      <h3
        className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold md:mb-4 lg:mb-4 xl:mb-2 text-black text-left"
        data-aos="zoom-in-right"
      >
        Our <span className="text-red-600">Team</span>
        <span className="text-[8px] sm:text-[10px] md:text-[16px] lg:text-xl text-gray-500 ml-0.5 sm:ml-2 ">
          <span className="text-red-600"> Ming Khor </span>
          <span className="italic">
            (Editor-in-Chief/Wharton/Lauder Graduate 2016)
          </span>
        </span>
      </h3>
      <div className="flex lg:flex-col-2 md:flex-row md:items-start gap-2 sm:gap-10 mb-8">
        <div data-aos="zoom-in-right">
          <p
            className="text-[10px] sm:text-sm md:text-xl lg:text-2xl text-black text-left font-sans"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            Hello potential MBAer! As a creative personality with strong writing
            skills and a passion for people, I look forward to polishing your
            MBA essays to perfection. Since graduating from the Wharton/Lauder
            program where I served as an admissions reader reviewing
            applications,
            <a className="text-red-600 underline">
              I’ve published more than 1500 essays for 300+ unique applicants
            </a>
            , many of whom earned acceptances at M7 schools due to the strength
            of their essays. If you have top-school ambition and a unique story
            to tell, I’m your guy.
          </p>
        </div>
        <div className="-mr-2 mt-1 mb-0.5 sm:mt-0 sm:mb-0.5 md:-mr-0">
          {/* Add your image here */}
          <img
            src={MyImg}
            data-aos="zoom-in-left"
            className="w-[100%] h-[100%] sm:w-[100%] sm:h-[100%] md:w-550 md:h-70 lg:w-472 xl:w-440 rounded-xl object-cover object-left sm:rounded-2xl md:rounded-4xl xl:-mt-10 shadow-2xl"
          />
        </div>
      </div>

      {/* Mission and Edge Boxes */}
      <div
        className="relative -left-[22%] sm:-left-[12%] md:-left-38 w-[109%] sm:w-[106%] md:w-[108%] lg:-left-36 lg:w-[106%] xl:w-344 xl:-left-68 z-20"
        data-aos="fade-right"
      >
        {/* Skewed black background container */}
        <div className="relative bg-black -skew-x-14 rounded-r-4xl shadow-lg h-auto overflow-hidden pl-19 pr-2 sm:pr-0 sm:pl-18 md:pl-40 lg:pl-40 lg:pr-10 xl:pl-68 py-1 sm:py-2 z-10">
          {/* Unskewed content inside */}
          <div className="flex flex-row md:gap-4 lg:gap-8 skew-x-14">
            {/* Our Mission */}
            <div className="flex-1 text-white bg-transparent rounded-3xl lg:tracking-tight xl:tracking-wider py-4 md:py-6 overflow-hidden">
              <h4
                className="text-md sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-500"
                data-aos="fade-down"
              >
                <span className="text-white"> Our </span> Mission
              </h4>
              <ul
                className="space-y-1 sm:space-y-2 md:space-y-3 text-[10px] sm:text-sm md:text-xl lg:text-2xl font-sans"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                <li className="flex items-start" data-aos="fade-right">
                  <span className="text-red-500 mr-2">&#8594;</span> Essay Essay
                  Arrow offers essay polishing and draft review services. Essay
                  polishing services are intended for completed drafts to
                  improve their quality to optimize chances of admission. Draft
                  review services provide feedback for essays at an earlier
                  stage of writing.
                </li>
                <li className="flex items-start" data-aos="fade-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b>Unparalleled Storytelling:</b>
                    Masterfully craft a unique and logical MBA story
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b> Expressions: </b> Elevate your expressions to
                    communicate thoughts and cultural nuances with compelling
                    and superior English prose
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b> Cutting words: </b>
                    Reduce words to hit essay word limits while retaining the
                    story essence
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Edge */}
            <div className="flex-1 text-white bg-transparent rounded-3xl lg:tracking-tight xl:tracking-widest py-4 md:py-6 overflow-hidden">
              <h4
                className="text-md sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-500"
                data-aos="fade-down"
              >
                <span className="text-white">Our </span> Edge
              </h4>
              <ul
                className="space-y-1 sm:space-y-2 md:space-y-3 text-[10px] sm:text-sm md:text-xl lg:text-2xl font-sans"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                <li className="flex items-start" data-aos="fade-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b>Admissions Insiders:</b>
                    Our editors bring insider knowledge of the MBA admissions
                    process
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b> Flawless English: </b>
                    Native-level command of English ensures your essays are
                    polished to perfection
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-right">
                  <span className="text-red-500 mr-2">&#8594;</span>
                  <div>
                    <b> Cultural Fluency: </b>
                    We specialize in interpreting Asian themes and motifs into
                    the Western context
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute md:w-1/2 w-[54%] sm:w-[40%] h-[50%] md:h-[56%] lg:h-[50%] xl:h-[60%] bg-red-500 skew-x-14 -right-[2%] sm:-right-[1%] md:-right-10 top-[52%] sm:top-[56%] md:top-90 lg:top-106 xl:top-80 rounded-4xl z-0"></div>
      </div>
    </section>
  );
};

export default About;
