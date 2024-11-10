import React from "react";
import { FaBullhorn, FaPaintBrush, FaCode, FaSearch } from "react-icons/fa"; // Import icons from react-icons

function Services() {
  return (
    <>
      <section id="services" className="py-40 px-2 md:px-8 bg-[#1a1a1a]">
        <div className="text-center">
          <h4 className="text-white text-4xl lg:text-5xl font-[Playfair]">
            <span className="">
              <span className="text-light-beige text-[#80b65e] capitalize">w</span>hat{" "}
              <span className="text-light-beige text-[#80b65e] capitalize">I</span>{" "}
              <span className="text-light-beige text-[#80b65e] capitalize">d</span>o{" "}
              <span className="text-light-beige text-[#80b65e] capitalize">f</span>or{" "}
              <span className="text-light-beige text-[#80b65e] capitalize">c</span>lients
            </span>
          </h4>
          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-white text-sm lg:text-lg leading-6">
          I help businesses bring their ideas to life by crafting tailored web solutions that are both functional and visually appealing. Whether it’s building responsive websites, creating user-friendly interfaces, or integrating powerful features, I ensure every project aligns with my clients’ goals and delivers exceptional user experiences.
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-start">
            
            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaBullhorn className="text-white text-6xl" /> {/* Branding Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl text-[#80b65e] capitalize mb-4">Branding</h4>
                <p>
                I work with clients to establish a strong, consistent brand identity that resonates with their audience. From logos to color schemes, I ensure every aspect of the brand reflects its values and vision..
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaPaintBrush className="text-white text-6xl" /> {/* Design Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl text-[#80b65e] capitalize mb-4">Design</h4>
                <p>
                I create clean, modern, and user-centric designs that prioritize both aesthetics and functionality. My goal is to make every website visually appealing while ensuring an intuitive user experience.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaCode className="text-white text-6xl" /> {/* Development Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl text-[#80b65e] capitalize mb-4">Development</h4>
                <p>
                I handle the full deployment process, ensuring your website is fully optimized for performance and security. From staging to live environment, I ensure a smooth and hassle-free launch.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaSearch className="text-white text-6xl" /> {/* SEO Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl text-[#80b65e] capitalize mb-4">SEO</h4>
                <p>
                I implement proven SEO strategies to improve search engine rankings and drive organic traffic. From on-page optimization to keyword research ro reach and search right audieance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
