import React from 'react'
import html from '../assets/html.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import express from '../assets/express.png'
import node from '../assets/node.png'
import oracle from '../assets/oracle.png'
import reactjs from '../assets/reactjs.png'
import spring from '../assets/spring.png'
import css from '../assets/css.jpg'
import mongodb from '../assets/mongodb.jpg'
import python from '../assets/python.webp'


const Portfolio = () => {

    const cardItem = [
        {
            id:1,
            logo:mongodb,
            name:"MongoDB",
            description:"I used mongoDB for Databade to save the user information when the user is signup/Login"
        },
        {
            id:2,
            logo:express,
            name:"Express Js",
            description:"I used Expressjs for API routing in backend"
        },
        {
            id:3,
            logo:reactjs,
            name:"React Js",
            description:"I used Reactjs for UI(User Interface) development"
        },
        {
            id:4,
            logo:node,
            name:"Node Js",
            description:"I used Nodejs for backend. It allows run JavaScript code on the server-side"
        },
        {
            id:5,
            logo:java,
            name:"Java",
            description:""
        },
        {
            id:6,
            logo:python,
            name:"Python",
            description:""
        },
        {
            id:7,
            logo:javascript,
            name:"Javascript",
            description:""
        },
        {
            id:8,
            logo:css,
            name:"CSS",
            description:"I uses css for styling the webpage for interacting with user Experience"
        },
    ]

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
            {cardItem.map(({id,logo,name,description})=>(
                <div className='md:w-[300px] md:h-[300px] rounded-lg border-[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-[120px] h-[120px] rounded-full p-1 border-[2px]' alt="" />
                  <div>
                    <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                    <p className='px-2 text-gray-700'>{description}</p>
                  </div>
                  <div className='px-6 py-4 space-x-3 justify-around'>
                    <button className='bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2'>Video</button>
                    <button className='bg-green-500 hover:bg-green-700 rounded text-white font-bold px-4 py-2'>Source Code</button>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
