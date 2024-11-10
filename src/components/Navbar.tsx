'use client'
import React from 'react'
import { playfair } from '@/font'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function ShowOption() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0'>
      <header className='relative w-full h-auto p-[1.5rem_1rem_1.5rem_1rem] bg-[#80b65e] shadow-sm shadow-[#E5EDE0]'>
        <nav className='h-[2.85rem] mx-[1.6875rem] flex justify-between'>
          <div>
            <Link href='/'><p className={`${playfair.className} text-[2.875rem] font-bold text-white`} ><span className='text-[black]'>A</span>sif <span className='text-[black]'>A</span>li</p></Link>
          </div>

          {isOpen == true ? (
            <div>
              <ul className='absolute p-[40px] top-0 left-0 w-full h-screen bg-[#CFD0D0] flex flex-col items-center justify-center gap-[1.875rem]'>
                <IoClose className='absolute top-0 right-0 mr-[40px] mt-[30px] cursor-pointer' size={35} onClick={ShowOption} />
                <Link href='/'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#c7e9b2]'>Home</li></Link>
                <Link href='#about'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#c7e9b2]'>About</li></Link>
                <Link href='#portfolio'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#c7e9b2]'>Portfolio</li></Link>
                <Link href='#services'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#c7e9b2]'>Services</li></Link>
                <Link href='#testimonials'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#c7e9b2]'>Testimonials</li></Link>
                <Link href='#contact'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#c7e9b2]'>Contact</li></Link>
              </ul>
            </div>

          ) : (
            <ul className='hidden lg:h-full lg:flex lg:items-center lg:gap-[1.875rem] '>
              <Link href='/'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#c7e9b2]'><span className='text-[black] font-bold' >H</span>ome</li></Link>
              <Link href='/#about'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#c7e9b2]'><span className='text-[black] font-bold'>A</span>bout</li></Link>
              <Link href='#portfolio'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#c7e9b2]'><span className='text-[black] font-bold'>P</span>ortfolio</li></Link>
              <Link href='#services'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#c7e9b2]'><span className='text-[black] font-bold'>S</span>ervices</li></Link>
              <Link href='#testimonials'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#c7e9b2]'><span className='text-[black] font-bold'>T</span>estimonials</li></Link>
              <Link href='#contact'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#c7e9b2]'><span className='text-[black] font-bold'>C</span>ontact</li></Link>
            </ul>
          )}

          <IoMenu size={35} color='white' className='lg:hidden cursor-pointer' onClick={ShowOption} />

        </nav>
      </header>
    </div>
  )
}

export default Navbar