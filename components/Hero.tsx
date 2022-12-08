import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "../components/BackgroundCircles"
import Photo from "../images/officialme.jpg";
import Link from 'next/link'
// import { urlFor } from '../sanity';
import { PageInfo } from "../typings";


type Props = {}; 

function Hero() {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's Idowu Mayowa`,
            "A Junior Software Developer",
            "Dedicated to coding as a lifestyle",    
    ],
    loop: true,
    delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover mt-4"
          src="https://i.ibb.co/DbPKjgC/officialme.jpg" alt="hiiDee" />
          
        <div className="z-20">
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="yellow" />
          </h1>

          <div className="pt-5" >
            
            <Link href="#about">
              <button className="heroButton">
                About
              </button>
            </Link>
                                   
            <Link href="#experience">
              <button className="heroButton">
                Experience
              </button>
            </Link>  
              
           
            <Link href="#skills">
              <button className="heroButton">
                Skills
              </button>
            </Link>

            <Link href="#projects">
              <button className="heroButton">
                Projects
              </button>
            </Link>                        
              
          </div> 

        </div>

    </div>
  )
}

export default Hero