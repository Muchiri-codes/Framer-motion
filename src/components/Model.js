import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, transform } from "framer-motion";


const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const modalVariants ={
  hidden:{
    y:-1000,
    opacity:0
  },
  visible:{
    y:'200px',
    opacity:1,
    transition:{delay:0.5}
  }
}
const Model = ({ showModel, setShowModel }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModel && (
        <motion.div className="backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal"
          variants={modalVariants} 
          >
            <p>Want to make another pizza?</p>
            <Link to='/'>
              <button>Create a pizza</button>
            </Link>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Model