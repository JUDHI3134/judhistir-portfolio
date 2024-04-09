import React from 'react'
import logo from '../assets/logo.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
     <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome to my World</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello ! I am a </h1>
            {/* <span className='text-red-700 font-bold'>Developer</span> */}
            <ReactTyped
            className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className='text-sm md:text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti earum non aliquid architecto sint a minima, obcaecati repudiandae! Maxime explicabo dignissimos consectetur eius quod. Nesciunt itaque, ab doloremque cum quia voluptates quasi illo dicta iure at. Soluta, exercitationem reiciendis.</p>
            <br />
            {/* Social media Icon */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2'>
                <h1 className='font-bold'>Availabel On</h1>
                <ul className='flex space-x-5'>
                <a href="https://www.facebook.com" target='_balnk'>
                    <li><FaSquareFacebook className='text-2xl cursor-pointer'/></li>
                    </a>
                    <a href="https://www.instagram.com" target='_balnk'>
                    <li><FaInstagram  className='text-2xl cursor-pointer'/></li>
                    </a>
                    <a href="https://www.youtube.com" target='_balnk'>
                    <li><FaYoutube  className='text-2xl cursor-pointer'/></li>
                    </a>
                    <a href="https://www.linkedin.com" target='_balnk'>
                    <li><FaLinkedin  className='text-2xl cursor-pointer'/></li>
                    </a>
                </ul>              
            </div>
            <div className='space-y-2'>
                <h1 className='font-bold'>Currently Working on</h1>
                <div className='flex space-x-5'>
                <SiMongodb  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/> 
                <SiExpress  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <FaReact  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/> 
                <IoLogoNodejs  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                </div>
            </div>
            </div>
        </div>


        <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
            <img src={logo} alt="" className='rounded-full md:w-[450px] md:h-[450px] w-[450px] h-[450px]' />
        </div>
        </div>
     </div> 
     <hr />
    </>
  )
}

export default Home
