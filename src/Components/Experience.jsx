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
import springBoot from '../assets/springBoot.jpg'
import python from '../assets/python.webp'


const Experience = () => {

    const cardItem = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:5,
            logo:express,
            name:"Express Js"
        },
        {
            id:6,
            logo:reactjs,
            name:"React Js"
        },
        {
            id:7,
            logo:node,
            name:"Node Js"
        },
        {
            id:8,
            logo:java,
            name:"Java"
        },
        {
            id:9,
            logo:python,
            name:"Python"
        },
        {
            id:10,
            logo:oracle,
            name:"Oracle"
        },
    ]

  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p className=''>
            I have one and half year Experience in below Technology
        </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
            {cardItem.map(({id,logo,name})=>(
                <div className='flex flex-col items-center justify-center shadow-md rounded-full border-[2px] md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-[150px] rounded-full' alt="" />
                  <div>
                    <div>{name}</div>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

