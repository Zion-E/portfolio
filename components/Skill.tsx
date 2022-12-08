import React from 'react'
import { motion } from "framer-motion"


type Props = {}

const Skill = () => {
  return (

        <div className="group relative grid grid-cols-3 gap-4 cursor-pointer mt-12">
            <div className="g-col-4">
                <motion.img 
                                     transition={{duration: 1}}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                                    xl:w-32 xl:h-32 filter hover:grayscale transition duration-300 ease-in-out"
                            
                            src="https://i.ibb.co/RHxB9JN/html5.jpg" alt="logo"/>
            </div>

            <div>
                <motion.img 
                                     transition={{duration: 1}}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                                    xl:w-32 xl:h-32 filter hover:grayscale transition duration-300 ease-in-out"
                            
                            src="https://i.ibb.co/hmVkxn5/css-new.jpg" alt="logo"/>
            </div>

            <div>
                <motion.img 
                                     transition={{duration: 1}}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                                    xl:w-32 xl:h-32 filter hover:grayscale transition duration-300 ease-in-out"
                            
                                    src="https://i.ibb.co/p08Ppsf/JS-new.jpg" alt="logo"/>
            </div>

            <div>
                <motion.img 
                                     transition={{duration: 1}}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                                    xl:w-32 xl:h-32 filter hover:grayscale transition duration-300 ease-in-out"
                            
                                    src="https://i.ibb.co/jvzY6Qx/TS.png" alt="logo"/>
            </div>

            <div>
                <motion.img 
                                     transition={{duration: 1}}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                                    xl:w-32 xl:h-32 filter hover:grayscale transition duration-300 ease-in-out"
                            
                                    src="https://i.ibb.co/c1r5s90/new-vscode.webp" alt="logo"/>
            </div>

            <div>
                <motion.img 
                                     transition={{duration: 1}}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                                    xl:w-32 xl:h-32 filter hover:grayscale transition duration-300 ease-in-out"
                            
                                     src="https://i.ibb.co/nfSPjCF/REACT-JS.png" alt="logo"/>
            </div>

            <div className=' src="https://i.ibb.co/zJksgKM/CSS.png"'></div>
            <div className=' src="https://i.ibb.co/swBygbt/JS.png"'></div>
            <div className=' src="https://i.ibb.co/jvzY6Qx/TS.png"'></div>
            <div className=' src="https://i.ibb.co/Kz3mzp6/Vscode.png"'></div>
            <div className=' src="https://i.ibb.co/nfSPjCF/REACT-JS.png"'></div>
        </div>

//     <div className="group relative flex cursor-pointer">
//         <motion.img
//             initial={{
//                 x:directionLeft ? -200:200,
//                 opacity: 0  
//             }}
//             transition={{duration: 1}}
//             whileInView={{ opacity: 1, x: 0 }}
//             src="https://ibb.co/tPW3PTB"
// //             src="https://ibb.co/tPW3PTB"
// // src="https://ibb.co/vxhWwTr"
// // src="https://ibb.co/VD8wTms"
// // src="https://ibb.co/0nqYRhp"
// // src="https://ibb.co/xJGw7kM"
// // src="https://ibb.co/64XxVmP"
//             alt="meme"
//             className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
//             xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
//         />
        
//         <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
//         ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32
//         rounded-full z-0">
//             <div className="flex items-center justify-center h-full">
//                 <p className="text-3xl font-bold text-black opacity-100">Skill progress</p>
//             </div>
//         </div>
//     </div>
  )
}

export default Skill