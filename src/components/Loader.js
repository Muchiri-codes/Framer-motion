import React from "react";
import { easeInOut, motion } from "framer-motion";


const loaderVariants = {
   bounce: {
    x: [-20, 20],
    y: [0, -30],
    scaleY: [1, 0.9, 1],
    transition: {
     x:{
      repeat:Infinity,
      duration:0.5
     },
     y:{
      repeat:Infinity,
      duration: 0.25,
      ease:"easeInOut"
     }
    }
  }
}
const Loader = () =>{
  return(
    <>
    <motion.div className="loader"
    variants={loaderVariants}
    animate= "bounce"
    >

    </motion.div>
    </>
  )
}

export default Loader