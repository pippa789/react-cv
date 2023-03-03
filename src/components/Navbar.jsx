import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    
    <div className='navigation'>
        <Link className='navigation-link' to="/Home">Home</Link>
        <Link className='navigation-link' to="/about">About</Link>
        <Link className='navigation-link' to="/Contact">Contact me</Link>
    </div>
  )
}

export default NavBar