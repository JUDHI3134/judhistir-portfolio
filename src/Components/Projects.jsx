import React from 'react'
import image from '../assets/image.png'
import nav from '../assets/nav.png'
import tic_tac from '../assets/tic_tac.png'
import todo from '../assets/todo.png'
import youtube from '../assets/youtube.png'
import quiz from '../assets/quiz.png'
import bgchange from '../assets/bgchange.png'
import blog from '../assets/blog.png'
import auth from '../assets/auth.png'
import contact from '../assets/contact.png'
import drag from '../assets/drag.png'
import bg from '../assets/bg.png'
import stopwatch from '../assets/stopwatch.png'
import clock from '../assets/clock.png'
import next from '../assets/next.png'
import calculator from '../assets/calculator.png'



const Projects = () => {

    const cardItem = [
        {
            id:1,
            logo:blog,
            name:"Mern Blog",
            data:"This is a Blog Application using React, MongoDB, Nodejs and Express js ",
            liveLink:"https://mern-blog-z1ux.onrender.com/",
        },
        {
            id:2,
            logo:tic_tac,
            name:"Tic-Tac-Toe Game",
            data:"This is a Tic-Tac-Toe Game using HTML, CSS and JavaScript ",
            liveLink:"https://tic-tac-toe-app-drab.vercel.app/",
        },
        {
            id:3,
            logo:quiz,
            name:"Quiz App",
            data:"This is a simple Quiz app using react",
            liveLink:"https://quiz-app-zeta-three.vercel.app/",
        },
        {
            id:4,
            logo:bgchange,
            name:"Background Changer",
            data:"This is webpage body a background changeing app using react",
            liveLink:"https://bg-changer-react-beta.vercel.app/",
        },
        {
            id:5,
            logo:youtube,
            name:"Youtube Clone",
            data:"This is Youtube Clone app using react",
            liveLink:"https://youtube-steel-omega.vercel.app/",
        },
        {
            id:6,
            logo:todo,
            name:"Todo App",
            data:"This is a Todo app using react",
            liveLink:"https://todo-app-chi-orpin.vercel.app/",
        },
        {
            id:7,
            logo:auth,
            name:"Authentication App",
            data:"This is a Authentication app app using react, Nodejs, mongoDB and Expressjs",
            liveLink:"https://mern-authentication-app-lx2v.onrender.com",
        },
        {
            id:8,
            logo:image,
            name:"Image Search",
            data:"This is a Image app for search any image using HTML,CSS and Javascript",
            liveLink:"https://imagesearch-dt34.onrender.com",
        },
        {
            id:9,
            logo:nav,
            name:"dark/light Navbar",
            data:"This is a simple Navbar using react can switch dark mode to Lite mode",
            liveLink:"https://dark-light-navbar.vercel.app/",
        },
        {
            id:10,
            logo:contact,
            name:"Contact form",
            data:"This is a simple contact app using HTML,CSS and Javascript and get information by Email ",
            liveLink:"https://contact-form-eight-jade.vercel.app/",
        },
        {
            id:11,
            logo:drag,
            name:"Drag and Drop",
            data:"This is a simple drag and drop app using HTML,CSS and Javascript ",
            liveLink:"https://judhi3134.github.io/drag_and_drop/",
        },
        {
            id:12,
            logo:bg,
            name:"Automatic Background",
            data:"This is a automatic background changing app using HTML,CSS and Javascript",
            liveLink:"https://judhi3134.github.io/Autumatic_background_change/",
        },
        {
            id:13,
            logo:stopwatch,
            name:"Stop Watch",
            data:"This is a stopWatch app using HTML,CSS and Javascript",
            liveLink:"https://judhi3134.github.io/StopWatch/",
        },
        {
            id:14,
            logo:clock,
            name:"Analog Clock",
            data:"This is a Analog Clock app using HTML,CSS and Javascript",
            liveLink:"https://judhi3134.github.io/AnalogClock/",
        },
        {
            id:15,
            logo:calculator,
            name:"Calculator",
            data:"This is a Calculator app using HTML,CSS and Javascript",
            liveLink:"https://calculator-3bj2.onrender.com",
        },
        {
            id:16,
            logo:next,
            name:"Next App",
            data:"This is a Nextjs App",
            liveLink:"https://nextjs-web-nu.vercel.app/",
        },
    ]

  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>My Projects</h1>
        <span className='underline font-semibold'>All my Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
            {cardItem.map(({id,logo,name,data,liveLink})=>(
                <div className='md:w-[300px] md:h-[300px] rounded-lg border-[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-full h-[120px] p-1 border-[2px] object-cover' alt="" />
                  <div>
                    <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                    <p className='px-2 text-gray-700'>{data}</p>
                  </div>
                  <div className='px-6 py-4 space-x-3 justify-around'>
                    <a href={liveLink} target='_blank'><button className='bg-blue-500 hover:bg-blue-700 rounded text-white font-semi-bold px-2.5 py-2'>LiveDemo</button></a>
                    <a href="https://github.com/JUDHI3134"><button className='bg-green-500 hover:bg-green-700 rounded text-white font-semi-bold px-2.5 py-2'>Source Code</button></a>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

