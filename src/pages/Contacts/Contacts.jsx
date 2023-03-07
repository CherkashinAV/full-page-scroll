import React from 'react'
import './contacts.css'
import { motion } from 'framer-motion'

function Contacts() {
  return (
	 <motion.div 
    className='contacts'
    initial={{opacity: 0}}
    animate={{opacity: '100%', transition: {duration: 1, delay: 0.1}}}
    exit={{x: -window.innerWidth, transition: {duration: 0.4}}}>
      Contacts
    </motion.div>
  )
}

export default Contacts