import React from 'react'
import './skills.css'
import {motion} from 'framer-motion'

function Skills() {
  return (
	  <motion.div 
      className='skills'
      initial={{opacity: 0}}
      animate={{opacity: '100%', transition: {duration: 1, delay: 0.1}}}
      exit={{x: -window.innerWidth, transition: {duration: 0.4}}}>
      Skills
    </motion.div>
  )
}

export default Skills
