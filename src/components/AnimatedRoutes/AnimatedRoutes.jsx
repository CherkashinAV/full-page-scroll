import React from 'react'
import { About, Contacts, Home, Skills } from "../../pages";
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
	const location = useLocation();
  return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/skills' element={<Skills />}/>
				<Route path='/contacts' element={<Contacts />}/>
			</Routes>
		</AnimatePresence>
  )
}
