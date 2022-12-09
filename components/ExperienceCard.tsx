import React from 'react'
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
    bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
    duration-200 overflow-hidden">
        <motion.img 
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[140px]
        xl:h-[140px] object-cover object-center"
        src="https://i.ibb.co/Db818h3/IMG-20210811-124018-750-2.jpg" alt="mayowazion" />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Junior Software Developer</h4>
          <p className="font-bold text-2xl mt-1">REACT</p>
          <div className="flex space-x-2 my-2">
              {/* {experience.technologies.map(technology => (
                <img 
                key={technology._id}
                className="h-20 w-10 rounded-full"
                src={urlFor(technology.image).url()}
                />
              ))} */}

              <img 
                className="h-12 w-12 rounded-full"
                src="https://i.ibb.co/Db818h3/IMG-20210811-124018-750-2.jpg"
                />
          

          {/* <p className="uppercase py-5 text-gray-300">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p> */}
          
          <p className="Sentencecase py-5 text-gray-300"> 2022 till date </p>

          <ul className="list-disc space-y-4 ml-5 text-lg max-h-66 overflow-y-scroll pr-5
          scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7ABBA]/80">
              {/* {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))} */}
          </ul>

          </div>

        </div>

    </article>
      )
}

export default ExperienceCard