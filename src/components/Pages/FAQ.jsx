import React from "react";

const faqs = [
  {
    q: "What is the general client profile of an Essay Arrow client?",
    a: "We are the provider of choice for many young professionals with applications for top business schools globally.",
  },
  {
    q: "How do I get started?",
    a: "Reach out to Essay Arrow via email or WeChat to get started. To engage us, you’ll need to create an account which you can do by clicking “Login” at the top right of the page and follow the prompts. You’ll use your account to upload documents, pay, and check your essay status. All communication will be handled via email and/or WeChat.",
  },
  {
    q: "What types of services does Essay Arrow offer?",
    a: "Essay Arrow offers essay polishing and Draft review services. Essay polishing services are intended for completed drafts to improve their quality to optimize chances of admission. Draft review services provide feedback for essays at an earlier stage of writing.",
  },
];

const guidelines = [
  {
    q: "How does your “unlimited revisions” policy for essay polishing work?",
    a: "It’s simple! Our editors will work to incorporate your feedback into your essays. If you believe further revisions are necessary, communicate your requests to your editor and we will continue revising until the document is complete.",
  },
  {
    q: "Can I polish a portion of an essay?",
    a: "Yes! Please indicate to us which paragraphs or portions of your essay you’d like to polish.",
  },
  {
    q: "Can Essay Arrow modify a polished essay for a different school’s prompt?",
    a: "Please discuss directly with your editor. Typically, essay retargeting, major changes or both can be accommodated in the revision process. Any major changes (structure changes, cutting/adding significant words) will be charged extra.",
  },
  {
    q: "How do I upload documents?",
    a: "After services have started or during service, you’ll be asked to upload your document. Please upload in Microsoft Word format (.doc or .docx), .txt Plain Text (.txt), or Rich Text Format (.rtf).",
  },
  {
    q: "How long does it take to have my essay edited?",
    a: "Services operate on a 48-hour regular (two day), or 24-hour (next day) return service, from the time payment is received.",
  },
  {
    q: "What are your operating hours?",
    a: "Our core service window is available to field inquiries between 9AM-5PM, China Standard Time. Editors are based worldwide and will generally respond to messages within 12 hours. If you have a critical deadline, please be sure to note it in advance.",
  },
  {
    q: "What languages does Essay Arrow operate in?",
    a: "All Essay Arrow services are provided in, and can be proof-read and redlined in English and Chinese.",
  },
  {
    q: "What requests are outside your service scope?",
    a: "At Essay Arrow we do not provide translation services or visa letters for clients. If you need translation support for documents, please let us know your needs and we can refer you to the appropriate provider.",
  },
];

const FAQ = () => (
  <section
    className="relative bg-white py-6 sm:py-12 md:py-16 font-serif overflow-hidden"
    id="faq"
    style={{ fontFamily: "Merriweather, serif" }}
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="lg:mb-10">
        <h2
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-2"
          data-aos="fade-down"
        >
          FAQ
          <span className="relative text-red-500 text-sm sm:text-lg md:text-2xl ml-[28%] sm:ml-[35%] lg:text-4xl md:ml-[15rem] lg:ml-[18rem] xl:ml-[22rem] font-semibold">
            <span className="text-black">About</span> Us
          </span>
        </h2>
      </div>
      {/* Main FAQ */}
      <div className="py-2 sm:py-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay="300"
            className={`mb-2 pb-2 sm:mb-4 sm:pb-4 ${
              idx !== faqs.length - 1 ? "border-b-1 border-gray-200" : ""
            }`}
          >
            <div
              data-aos="fade-right"
              className="font-bold text-[12px] sm:text-sm md:text-xl lg:text-2xl mb-1"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              {item.q}
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-[10px] sm:text-sm md:text-xl tracking-wide text-black font-sans"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Service Guidelines */}
    <div className="bg-black" data-aos="zoom-out-up">
      <div className=" py-2 md:py-4 lg:py-8 px-4 max-w-6xl mx-auto">
        <div
          data-aos="zoom-out-down"
          className="text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-6"
          style={{ fontFamily: "Lato, Arial, sans-serif" }}
        >
          Service <span className="text-red-500">Guidelines</span>
        </div>
        {guidelines.map((item, idx) => (
          <div key={idx}>
            <div
              data-aos="zoom-in-down"
              className="font-bold text-white text-[12px] sm:text-sm md:text-xl lg:text-2xl mb-1"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              {item.q}
            </div>
            <div
              data-aos="fade-right"
              className={`text-[10px] sm:text-sm md:text-xl text-white tracking-[0.4px] font-sans font-normal pb-2 mb-2 sm:pb-4 sm:mb-4 ${
                idx !== guidelines.length - 1 ? "border-b-1 border-gray-50" : ""
              }`}
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
