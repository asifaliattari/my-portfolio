import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import Button from './Button';

function HeroSection() {
  return (
    <>
      <section className='bg-[#0a0908] w-full text-center pt-[7.5rem]'>
        <p className='text-[2rem]'>Hey! I'm <span className='text-[#c7e9b2]'>Asif Ali</span></p>

        <p className='text-[2rem]'><span className='text-[#c7e9b2]'>F</span>ront <span className='text-[#c7e9b2]'>E</span>nd <span className='text-[#c7e9b2]'>W</span>eb <span className='text-[#c7e9b2]'>D</span>eveloper</p>

        <p className='mt-[1.25rem] mb-[2rem] text-[1.125rem] '>I'm a Front-End Web Developer specializing in building user interfaces for websites and applications with <span className='text-[#c7e9b2]'>React JS</span> and <span className='text-[#c7e9b2]'>Next.Js</span><br />Passionate about front-end development, I strive to create intuitive and engaging user experiences.</p>

        <Button textName={"Contact Me"}/>

        <div className='mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-[#80b65e] rounded-full'>
          <FaFacebookF  size={30} color='black' className='cursor-pointer'/>
          <FaInstagram size={30} color='black' className='cursor-pointer'/>
          <IoLogoWhatsapp size={30} color='black' className='cursor-pointer'/>
        </div>
          <div className='mt-[70px] w-full bg-[#1a1a1a] h-[78px] flex justify-evenly items-center'>
            <Image src={"/myImage/upwork.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/myImage/freelance.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
          </div>
      </section>
    </>
  )
}

export default HeroSection