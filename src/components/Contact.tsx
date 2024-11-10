import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

function Contact() {
  return (
    <>
      <section id="contact" className="py-40 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="text-center text-white">
          <h4 className="text-4xl lg:text-5xl font-[Playfair]">
            <span>
              <span className="text-[#80b65e] ">G</span>et{' '}
              <span className="text-[#80b65e] ">I</span>n{' '}
              <span className="text-[#80b65e] ">T</span>ouch
            </span>
          </h4>
          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
          I'm here to help bring your vision to life. Whether you have questions, need a quote, or are ready to start a project, I'd love to hear from you! Reach out, and let’s discuss how I can support your web development needs.
          </p>

          <div className="mt-24 flex flex-col lg:flex-row justify-evenly items-start">
            {/* Contact Information */}
            <div className="flex flex-col justify-center items-start text-center">
              
              <div className="flex mb-12 items-start">
                <MdEmail className="text-2xl text-[##80b65e] mr-4" />
                <div className="text-start">
                  <p className="text-white">Have a question?</p>
                  <p className="my-2 text-[#616161]">I am here to help you</p>
                  <p className="text-[#80b65e] ">Email me at 123.suzian@gmail.com</p>
                </div>
              </div>

              <div className="flex mb-12 items-start">
                <MdLocationOn className="text-2xl text-[##80b65e] mr-4" />
                <div className="text-start">
                  <p className="text-white">Current Location</p>
                  <p className="my-2 text-[#616161]">Mansoura, Egypt</p>
                  <p className="text-[#80b65e] ">serving clients worldwide</p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <form className="w-full lg:w-[50%] flex flex-col items-start">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  autoComplete="off"
                />
                <input
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  autoComplete="off"
                />
              </div>

              <div className="w-full">
                <input
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0 w-full"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  autoComplete="off"
                />
                <textarea
                  id="msg"
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0 w-full min-h-[14rem]"
                  placeholder="Your message"
                  autoComplete="off"
                />
              </div>

              <Link href="#home" className="py-3 px-8 rounded-lg text-lg text-white bg-[#80b65e] transition hover:bg-[#c7e9b2]  mt-4">
                Send Message
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;