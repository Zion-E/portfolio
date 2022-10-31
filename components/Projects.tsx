import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20">
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration:1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    className="h-40 w-80" src="https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg"
                    alt="meal" />

                    <div className="space-y-20 px-0 md:px-10 max-w-6xl">
                       <h4 className="text-4xl font-semibold text-center">
                        <span className="underline decoration-[#f7ABBA]/50">
                        Work Reviews {i + 1} of {projects.length}: 
                        </span>
                          Meals App 
                        </h4> 
 
                        <p className="text-lg text-center md:text-left">
                            Meals App presents you with a list of various delicacies that you can 
                            choose from. It also allows you to be surprised be randomly choosing 
                            a meal for you. It is fully fuctioning and responsive.
                            All you need to do is to go there right now and check
                            out this amazing site.
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#f7A884]/10 left-0
        h-[300px] -skew-y-12">

        </div>
    </motion.div>
  )
}

export default Projects