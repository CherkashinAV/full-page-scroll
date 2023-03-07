import React from 'react'
import { Link } from 'react-router-dom';
import './navDots.css'

export default function NavDots({links, active, setActive}) {
  return (
	 <div className='nav-dots'>
		{links.map((link, index) => <Link onClick={() => setActive(index)} key={link} to={link}></Link>)}
	 </div>
  )
}
