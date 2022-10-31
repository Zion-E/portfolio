import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "../components/BackgroundCircles"
import Photo from "../images/officialme.jpg";


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Idowu Mayowa",
            "Pressing and pushing further",
            "Coding can become his lifestyle",    
    ],
    loop: true,
    delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src = "https://i.postimg.cc/g0JsW-sCc/officialme-auto-x2.jpg" alt="hhh" />
          
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]"> 
          Software Engineer
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="yellow" />
          </h1>

          <div className="pt-5" >
            
              <button className="heroButton">
              <link href="#about"/>
                About
              </button>
                                   
              <button className="heroButton">
              <link href="#experience"/>
                Experience
              </button>
           
            
              <button className="heroButton">
              <link href="#skills"/>
                Skills
              </button>
                        
              <button className="heroButton">
              <link href="#projects"/>
                Projects
              </button>
             
          </div> 

        </div>

    </div>
  )
}

export default Hero