import React, { useState } from 'react'
import logo from '../assets/logo2.jpg'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll'


const Navbar = () => {

    const [menu,setMenu] = useState(false);

    const navItems = [
        {id: 1,text: "Home"},
        {id: 2,text: "About"},
        {id: 3,text: "Portfolio"},
        {id: 4,text: "Experience"},
        {id: 5,text: "Contact"},
    ]

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white z-50 shadow-md h-16 fixed top-0 right-0 left-0'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={logo} alt="" className='w-12 h-12 rounded-full object-cover'/>
                <h1 className='font-semibold text-xl cursor-pointer'>Judhist<span className='text-green-500 text-2xl'>ir</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
            {/*desktop Navbar */}
            <div>
                <ul className='md:flex space-x-8 hidden'>
                    {navItems.map(({id,text})=>{
                        return <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                        </li>
                    })}
                </ul>
                <div className='md:hidden' onClick={()=>setMenu(!menu)}>{menu ? <IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>}</div>
            </div>
          </div>
           {/*mobile Navbar */}
           {menu && (
            <div className='bg-white'>
          <ul className='md:hidden flex flex-col justify-center items-center h-screen space-y-3 text-xl'>
          {navItems.map(({id,text})=>{
                        return <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                        <Link to={text}
                        onClick={()=>setMenu(!menu)}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                        </li>
                    })}
                </ul>
          </div>
           )}
          
      </div>
    </>
  )
}

export default Navbar
