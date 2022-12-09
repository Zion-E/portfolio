import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceCard2 from "./ExperienceCard2";
// import { Experience } from "../typings";

type Props = {}

function WorkExperience() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left d:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-16 uppercase tracking-[20px]
        text-gray text-2xl">
            Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10
        snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20
        scrollbar-thumb-[#f7ABBA]/80">
          <ExperienceCard/>
          <ExperienceCard2/>
          {/* <ExperienceCard/> */}
            {/* {experiences?.map((experience) => 
              <ExperienceCard key={experience._id} experience={experience} />
            )}             */}
        </div>
    </motion.div>
  )
}

export default WorkExperience;