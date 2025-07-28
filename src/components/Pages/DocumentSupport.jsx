import React from "react";

const documents = [
  {
    label: "Personal Statements (Why School)",
    icon: (
      <svg fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="20"
          rx="2"
          fill="#F3F4F6"
          stroke="#E53E3E"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#E53E3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Letters of Recommendation",
    icon: (
      <svg fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="20"
          rx="2"
          fill="#F3F4F6"
          stroke="#E53E3E"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#E53E3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="18" r="2" fill="#E53E3E" />
      </svg>
    ),
  },
  {
    label: "Supplemental/Optional Essays",
    icon: (
      <svg fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="20"
          rx="2"
          fill="#F3F4F6"
          stroke="#E53E3E"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#E53E3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="10" y="16" width="4" height="2" fill="#E53E3E" />
      </svg>
    ),
  },
  {
    label: "Waitlist Essays",
    icon: (
      <svg fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="20"
          rx="2"
          fill="#F3F4F6"
          stroke="#E53E3E"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#E53E3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="8" r="2" fill="#E53E3E" />
      </svg>
    ),
  },
  {
    label: "Scholarship Essays",
    icon: (
      <svg fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="20"
          rx="2"
          fill="#F3F4F6"
          stroke="#E53E3E"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#E53E3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M12 20l2-2-2-2-2 2 2 2z" fill="#E53E3E" />
      </svg>
    ),
  },
  {
    label: "Cover Letters",
    icon: (
      <svg fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="20"
          rx="2"
          fill="#F3F4F6"
          stroke="#E53E3E"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#E53E3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="8" y="18" width="8" height="2" fill="#E53E3E" />
      </svg>
    ),
  },
  {
    label: "Resume/CVs",
    icon: (
      <svg fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="20"
          rx="2"
          fill="#F3F4F6"
          stroke="#E53E3E"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#E53E3E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="10" y="18" width="4" height="2" fill="#E53E3E" />
      </svg>
    ),
  },
];

const schools = [
  [
    "Carnegie Mellon, Tepper",
    "Chicago, Booth",
    "Columbia, CBS",
    "Dartmouth, Tuck",
    "Duke, Fuqua",
    "Emory, Goizueta",
    "Harvard, HBS",
    "IESE",
    "IMD",
    "Indiana, Kelley",
    "INSEAD",
    "LBS",
    "Michigan, Ross",
  ],
  [
    "MIT, SOM",
    "Northwestern, Kellogg",
    "Penn, Wharton",
    "Stanford, GSB",
    "UVA, Darden",
    "Yale, SOM",
    "Cambridge, Judge",
    "CEIBS",
    "Cornell, Johnson",
    "Fuqua",
    "Georgetown, McDonough",
    "HEC",
    "HKCU",
  ],
  [
    "Johns Hopkins, Carey",
    "UNC, Kenan-Flagler",
    "HKUST",
    "Toronto, Rotman",
    "UCLA, Anderson",
    "USC, Marshall",
    "WUSTL, Olin",
    "NUS",
    "NYU, Stern",
    "PKU",
    "Rice",
    "Rice,  Jones",
  ],
];

const arrow = <span className="text-red-500 mr-2">&#8594;</span>;

const DocumentSupport = () => {
  return (
    <section
      className="bg-white py-6 sm:py-8 md:py-10 lg:py-16 px-4 font-serif overflow-hidden h-auto"
      id="documents"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Documents Supported */}
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-8 text-black text-left" data-aos="fade-right">
          Documents <span className="text-red-600">Supported</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-1 sm:gap-y-4 gap-x-6 md:gap-y-8 md:gap-x-4 mb-12">
          {documents.map((doc, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-gray-50 w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2 sm:p-4 rounded-full mb-2 z-10" data-aos="fade-up">
                {doc.icon}
              </div>
              <div
                className="text-[12px] sm:text-sm md:text-xl lg:text-2xl text-black text-center font-sans"data-aos="fade-up" data-aos-delay="300"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                {doc.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schools Supported Box */}
      <div className="relative mt-8" data-aos="fade-up-right">
        <div className="absolute -top-4 sm:-top-8 -right-2 sm:right-3 md:right-6 lg:right-4 w-[50%] h-24 sm:h-36 bg-red-500 transform -skew-x-12 sm:-skew-x-16 rounded-2xl z-0"></div>
        <div className="relative z-10 bg-black text-white rounded-r-4xl w-[112%] pr-2 sm:w-auto py-4 md:py-8 lg:py-14 pl-18 sm:pl-18 md:pl-20 -left-[22%] sm:-left-[11%] md:-left-23 lg:-left-26 -skew-x-12">
          <div className="transform skew-x-12 md:ml-4 lg:ml-8 xl:ml-30">
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white" data-aos="fade-up-left">
              Schools <span className="text-red-500">Supported</span>
            </h3>
            <div className="grid grid-cols-3 gap-x-1 sm:gap-4 md-gap-0 lg:gap-8">
              {schools.map((col, colIdx) => (
                <ul
                  key={colIdx}
                  className="space-y-2 text-[9px] sm:text-sm md:text-xl lg:text-2xl font-sans"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                  
                >
                  {col.map((school, idx) => (
                    <li key={idx} className="flex items-start" data-aos="fade-up">
                      {arrow}
                      {school}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentSupport;
