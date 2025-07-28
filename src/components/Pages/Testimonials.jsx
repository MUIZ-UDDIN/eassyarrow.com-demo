import React from "react";
import Img1 from "../../assets/Logos/2.png";
import Img2 from "../../assets/Logos/4.png";
import Img3 from "../../assets/Logos/34.png";
import Img4 from "../../assets/Logos/3.png";
import Img5 from "../../assets/Logos/14.jfif";
import Img6 from "../../assets/Logos/15.png";
import Img7 from "../../assets/Logos/24.png";
import SpotlightCard from "../Effects/SpotLightCard";

const testimonials = [
  // Page 1
  [
    {
      text: (
        <>
          "Ming is an <b>amazing storyteller</b> and a real joy to work with. He
          understands the <b> essence </b> of what is needed for an MBA essay
          like none other and works professionally to develop each essay in the
          application."
        </>
      ),
      name: "Female, Marketing",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img1, Img2],
    },
    {
      text: (
        <>
          "Ming not only helped me polish essay wording, but also gave me really
          helpful and practical advice on the content of the essay, and helped
          me surface hidden meanings behind my essay. His wording is so
          <b> precise and beautiful</b> (almost poetic), and he always responds
          to me very quick-ly. I couldn’t have done it without him!"
        </>
      ),
      name: "Female, Finance",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img3],
    },
    {
      text: (
        <>
          "Although Ming comes from my dream school Wharton, he is not your
          typical Wharton MBA. His dreams of social impact and life pursuits
          extend beyond my essay counseling, and are more of a life attitude and
          choice, and
          <b>I feel very lucky to be friends with him</b>
          through the process of essay editing. What he can bring is far more
          than refining words, but capturing your inner calling and integrating
          it into an story with depth and personality."
        </>
      ),
      name: "Female, Legal Services",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img1],
    },
    {
      text: (
        <>
          Ming was <b>instrumental to my application success</b> and many
          others. Having gone through the whole MBA application process himself
          and got a Wharton MBA degree, Ming knows exactly what AdCom &amp;
          fellow admissions are looking for and will always polish and highlight
          your story with those "magic" words, way better than many other
          polishers who simply translate the sentences or revise basic grammar.
          I truly think Ming has so much capability, talent and passion to do
          this. Meanwhile, he can always return the revision promptly, which is
          extremely helpful in the busy season of application.
        </>
      ),
      name: "Female, Finance",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img4],
    },
  ],
  // Page 2
  [
    {
      text: (
        <>
          Thanks to his rich MBA experience, Ming is very good at{" "}
          <b>distilling the core ideas you want to express</b>. Several of my
          essays were nearly double the word count, but Ming gave me poignant
          advice and helped me cut to the limit while sharpening my message. In
          addition, Ming is very good at communicating with applicants, and will
          discuss with you to confirm your intended meaning in addition to word
          polishing.
        </>
      ),
      name: "Male, Automotive",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img6, Img5],
    },
    {
      text: (
        <>
          Ming did a fantastic job helping me with my essays while applying to
          top MBA programs. More importantly, Ming is more than an experienced
          essay wonder worker and also gave me some brilliant ideas for my
          storytelling along the process.
        </>
      ),
      name: "Male, Finance",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img1],
    },
    {
      text: (
        <>
          I highly recommend Ming’s editing service. There are two highlights I
          would like to address, which are professionalism, and quick response
          time. I worked on the trading floor at an investment bank and often
          encountered myself vacillating over the culture and the message I
          wanted to convey. Thanks to his business expertise, he{" "}
          <b>
            transformed my experiences into very noteworthy and well-structured
            messages
          </b>
          . Depth aside from editing, Ming communicated with me clearly on the
          delivery date/time and was very responsive to my messages, always
          delivering high quality in a very limited time.
        </>
      ),
      name: "Female, IB",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img7],
    },
    {
      text: (
        <>
          Ming’s editing gave me great help throughout my MBA application and
          made me land my dream school offer. As a non-native speaker of
          English, when I tried to cut words and edit the essays myself, I
          struggled a lot, so I was looking for someone highly professional.
          <b>
            His language proficiency as a native speaker, his experiences on MBA
            alumni, really helped me keep the essential elements and logic, also
            his editing was not only smooth and grammatically correct in
            story-telling but perfectly kept the authenticity and logic.
          </b>
          Also, Ming always delivered his work on time, earning my implicit
          trust.
        </>
      ),
      name: "Female, Tech",
      nameClass:
        "text-red-500 text-[12px] sm:text-sm md:text-xl lg:text-2xl font-semibold",
      logos: [Img6],
    },
  ],
];

const accentShape = (pos) =>
  pos === "top-right" ? (
    <div className="absolute sm:-right-32 -right-20 w-[8rem] h-[16rem] top-4 md:top-20 md:w-[18rem] md:h-[24rem] lg:w-[22rem] lg:h-[28rem] bg-red-500 skew-x-24 sm:skew-x-30 z-0 rounded-bl-[10rem] rounded-tl-[4rem] sm:rounded-bl-[5rem] sm:rounded-tl-[8rem]"></div>
  ) : (
    <div className="absolute sm:-left-32 -left-20 -bottom-6 sm:bottom-0 w-[8rem] h-[16rem] md:w-[18rem] md:h-[24rem] lg:w-[22rem] lg:h-[28rem] bg-red-500 skew-x-30 z-0 rounded-tr-[10rem] rounded-br-[4rem] sm:rounded-tr-[5rem] sm:rounded-br-[8rem]"></div>
  );

const TestimonialCard = ({
  text,
  name,
  nameClass,
  logos,
  direction = "right",
}) => (
  <SpotlightCard
    spotlightColor="rgba(0, 0, 0, 0.1)"
    data-aos={`fade-${direction}`}
    className="custom-spotlight-card cursor-default transform transition-transform duration-300  hover:scale-101 hover:transform bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-10 flex flex-col items-center text-center relative z-10"
  >
    <p
      className="text-[10px] sm:text-sm md:text-xl lg:text-2xl text-black font-sans mb-4"
      style={{ fontFamily: "Lato, Arial, sans-serif" }}
    >
      {text}
    </p>
    <div className={`mt-auto mb-2 ${nameClass}`}>{name}</div>
    <div className="flex gap-2 justify-center items-center">
      {logos.map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt="school logo"
          className="h-6 sm:h-8 md:h-10 lg:h-14 xl:h-16 object-contain"
        />
      ))}
    </div>
  </SpotlightCard>
);

const Testimonials = () => (
  <>
    {/* Page 1 */}
    <section
      className="relative bg-white mt-6 sm:mt-10 md:pt-16 px-4 font-serif pb-3 sm:pb-10 overflow-hidden"
      id="testimonials-1"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-10 text-black text-left"
          data-aos="zoom-out-down"
        >
          Testimonials
        </h2>
        {accentShape("top-right")}
        <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-8">
          {testimonials[0].map((t, idx) => (
            <TestimonialCard
              key={idx}
              {...t}
              direction={idx % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
    {/* Page 2 */}
    <section
      className="relative bg-white mb-6 md:pb-16 px-4 font-serif overflow-hidden"
      id="testimonials-2"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {accentShape("bottom-left")}
        <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-8">
          {testimonials[1].map((t, idx) => (
            <TestimonialCard
              key={idx}
              {...t}
              direction={idx % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;
