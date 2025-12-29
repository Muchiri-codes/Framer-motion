import React from "react";
import {  motion, useCycle  } from "framer-motion";


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
      ease:"easeOut"
     }
    }
  }, 
  bounceTwo:{
    y:[0,-40],
    x:0,
    transition:{
      y:{
        repeat:Infinity,
        duration:0.25,
        ease:"easeOut"
      }
    }
  }
}
const Loader = () =>{
  const [animation, cycleAnimation] = useCycle("bounce", "bounceTwo")
  return(
    <>
    <motion.div className="loader"
    variants={loaderVariants}
    animate= {animation}
    >

    </motion.div>
    <div onClick={() => cycleAnimation}>Cycle Loader</div>
    </>
  )
}

export default Loader