import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const backdropVariant ={
  visible:{opacity:1 },
  hidden:{opacity:0}
}
const Model = ({showModel, setShowModel}) =>{
  return(
    <AnimatePresence exitBeforeEnter>
        {showModel && (
          <motion.div className="backdrop"
           variants={backdropVariant}
           initial= "hidden"
           animate= "visible"
          >
           
          </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Model