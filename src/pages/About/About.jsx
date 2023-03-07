import React from 'react'
import './about.css'
import {motion} from 'framer-motion'

function About() {
  return (
	  <motion.div 
      className='about'
      initial={{opacity: 0}}
      animate={{opacity: '100%', transition: {duration: 1, delay: 0.1}}}
      exit={{x: -window.innerWidth, transition: {duration: 0.4}}}>
      About
    </motion.div>
  )
}

export default About