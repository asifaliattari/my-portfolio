import React from 'react';
import Image from 'next/image';

function Testimonials() {
  return (
   <>
     <section id="testimonials" className="bg-[#0a0908] py-40 px-4 md:px-8">
      <div className="text-white text-center">
        <h4 className="text-white text-4xl lg:text-5xl font-[Playfair] ">
          <span>
            <span className="text-[#80b65e]">W</span>hat{' '}
            <span className="text-[#80b65e]">C</span>ient{' '}
            <span className="text-[#80b65e]">A</span>re{' '}
            <span className="text-[#80b65e]">S</span>aying
          </span>
        </h4>


        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              { src: '/myImage/testimon1.jfif', alt: 'Alex J.', title: 'Alex J.', role: 'Startup Founder' },
              { src: '/myImage/testimon1.jfif', alt: 'Sarah K.', title: 'Sarah K.', role: 'Marketing Director' },
              { src: '/myImage/testimon1.jfif', alt: 'Mark T.', title: 'Mark T.', role: 'Small Business Owner' },
             
            ].map((person, index) => (
              <div
                key={index}
                className="mx-auto py-8 px-2 md:px-4 border-t-[3px] border-solid border-light-beige rounded-2xl select-none bg-[#1a1a1a]  flex flex-col justify-center items-center"
              >
                <div className="w-[8rem] border-[3px] border-solid text-[#80b65e] rounded-full p-1">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="mt-4">{person.title}</p>
                <p className="my-4 text-[##80b65e]">{person.role}</p>
                <p className="w-[95%] md:w-[97%] mx-auto mb-6 leading-7 text-center">

"I had a fantastic experience working with Asif! His attention to detail and commitment to quality truly set him apart. The final product exceeded our expectations and has already received positive feedback from our users."
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
   </>
  );
}

export default Testimonials;
