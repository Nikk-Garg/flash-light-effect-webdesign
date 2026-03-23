import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="about">About</Link></li>
     <li><Link to="exhibit">Exhibits</Link></li>
     <li><Link to="schedule">Schedule</Link></li>
     <li><Link to="guide">Guided Tours</Link></li>
     <li><Link to="contact">Contact</Link></li>
     </ul>
    </nav>
  )
}

export default NavBar