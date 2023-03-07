import React from 'react'
import './home.css'
import { motion } from 'framer-motion';

function Home() {
  return (
	 <motion.div 
      className='home'
      initial={{opacity: 0}}
      animate={{opacity: '100%', transition: {duration: 1, delay: 0.1}}}
      exit={{x: -window.innerWidth, transition: {duration: 0.4}}}>
      Home
    </motion.div>
  )
}

export default Home