import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left d:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px]
        text-gray text-2xl">
          About
        </h3>

        <motion.img
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1.2,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://i.postimg.cc/ZKtwdrdj/IMG-20220920-WA0001-auto-x2.jpg" alt="smilingzion"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a little background: 
          </h4>
          <p className="text-base" >
            Hi, my name is Mayowa Idowu, a junior developer (React.js) with a bachelor degree
            in computer engineering. Implementing codes to solve real life problems is the goal.
            Making impacts and transforming lives are the expected returns.
          </p>
        </div>
    </motion.div>
  );
} 

export default About