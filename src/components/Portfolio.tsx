import React from "react";
import { playfair } from "@/font";
import Image from "next/image";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#0a0908]">
        <h4 className={`${playfair.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-[#80b65e]">M</span>y{" "}
          <span className="text-[#80b65e]">L</span>ast{" "}
          <span className="text-[#80b65e]">W</span>ork
        </h4>
    
        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
        I recently completed a project that showcases my skills in delivering high-quality, responsive web solutions. From concept to deployment, I focused on creating a seamless user experience with attention to detail and performance optimization.


        </p>

        <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
            {[...Array(3)].map((_, index) => (
              <div className="flex flex-col" key={index}>
                <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.2s]">
                  <Image
                    src="/myImage/proj2.png"  
                    alt="Laptop, Phone and Camera"
                    width={300}
                    height={200}
                    className="w-full rounded-3xl transition-all duration-[0.5s] hover:scale-90 hover:-rotate-[5deg]"
                  ></Image>
                </div>

                <p className="mt-6 text-xl">My Current Project</p>
            </div>
            ))}
          </div>
      </section> 
    </>
  );
}

export default Portfolio;
