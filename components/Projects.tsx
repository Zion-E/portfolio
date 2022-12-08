import React from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from '../sanity';

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="uppercase tracking-[20px] mt-10
        text-gray text-2xl">
          Projects
        </h3>
        
        <div className="relative  overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20 h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ABBA]/80" 
        >
                


                    <div className="px-0 md:px-10 max-w-6xl">

                    {/* <h5 className="text-3xl font-semi-bold text-center mt-6">
                        <span className="underline decoration-[#f7ABBA]/50">
                        
                        </span>
                    </h5> */}


                    <div className="grid grid-cols-3 mt-9 align-items-start max-h-screen">
                    
                    <div className="col grid-col border mx-3 px-2 padding">
                        <li className="uppercase mt-5
                                        text-gray text-xl">
                            Mayowa meal's app: 
                        </li>
                            <p className="text-sm mt-3 text-center md:text-left">
                                The Meals app brings you a list of some tantalizing meals to choose from, and to assist 
                                with some decisions and choice making, a "surprise me" button is embedded to make a fine choice for you. 
                            </p><p>
                            Click {" "}
                                <span className="underline decoration-[#f7ABBA]/50" >
                                    
                                    <a href="https://mayowa-meals-app-idowuakinsanmi.repl.co/">
                                        HERE
                                    </a>                                   
                                </span>
                                {" "} to check out the app
                            </p>
                        </div>

                        <div className="col border px-2 mx-3">
                        
                        <li className="uppercase mt-5
                                        text-gray text-xl overflow-x-hidden">
                            Team Member Allocation App
                        </li>
                        <p className="text-sm mt-3 text-center md:text-left">This app provides the platform to allocate members into groups to work on any specified project as a team.</p>
                            <p>
                            Check out this awesome app by clicking {" "}
                                <span className="underline decoration-[#f7ABBA]/50" >
                                    <a href="https://teammemberallocation.idowuakinsanmi.repl.co">
                                        HERE
                                    </a>                                    
                                </span>
                            </p>

                        </div>

                        <div className="col border mx-3 px-2">
                        <li className="uppercase mt-5
                                        text-gray text-xl">
                            Trading App
                        </li>
                            <p className="text-sm mt-3 text-center md:text-left">
                            This App offers the opportunity to search, add, remove, and trade stocks with live chart.
                            Feel free to check out this app
                            </p>
                        
                            <p>
                            
                                <span className="underline decoration-[#f7ABBA]/50 mt-3" >
                                    <a href="https://trading-app.idowuakinsanmi.repl.co">
                                        Click HERE
                                    </a>                                    
                                </span>
                            </p>
                        </div>
                    </div>
                       {/* <h4 className="text-4xl font-semibold text-center mt-5">
                        <span className="underline decoration-[#f7ABBA]/50">
                        Work Reviews 
                        </span>
                    </h4> */}

                        {/* <p className="text-sm mt-10 text-center md:text-left">
                            The Meals app brings you a list of some tantalizing meals to choose from, and to assist 
                            with some decisions and choice making, a "surprise me" button is embedded to make a fine choice for you.
                        </p>
                        <p>
                            Click here to view the project: {" "}
                                <span className="underline decoration-[#f7ABBA]/50" >
                                    <a href="https://mayowa-meals-app-idowuakinsanmi.repl.co/">
                                        https://mayowa-meals-app-idowuakinsanmi.repl.co/
                                    </a>                                    
                                </span>
                        </p> */}
                    </div>

                    
                </div>    


    </motion.div>
  )
}

export default Projects