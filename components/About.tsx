import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
// import { urlFor } from '../sanity';

type Props = {}

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left d:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="uppercase tracking-[20px]
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
          src="https://i.ibb.co/ynyqNs8/zion.jpg" alt="smilingzion"
          className="-mb-10 md:mb-5 flex-shrink-0 w-46 h-40 rounded-full object-cover
          md:rounded-lg md:w-44 md:h-76 xl:w-[300px] xl:h[400px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a little background: 
          </h4>
          <p className="text-base" >
            Though I studied Computer Engineering at LAUTECH Ogbomosho, I've always had an interest in coding. This is why after working with a couple of organizations,
            I decided to focus on developing and channel my resources towards improving my skill. My developing journey would have been so rough if not for Mr. Toba Akintunde
            and Mr. Kazeem Quadri (My Supervisor), they made it as smooth as possible. And today, I am a Developer.
            {/* (pageInfo?.backgroundInformation) */}
          </p>
        </div>
    </motion.div>
  );
} 

export default About