import React from 'react'
import  './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
       <a href='#' className='footer_logo'>EGATOR</a>
       <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#testemoniels'>Testimonials</a></li>
            <li><a href='#contact'>Contact</a></li>
       </ul>

       <div className="footer_scials">
           <a href='https://www.facebook.com/albert.gumashyan.3/'><FaFacebookF/></a>
           <a href='https://www.instagram.com/'><FiInstagram/></a>
           <a href='https://www.linkedin.com/in/albert-ghumashyan-2a726023a/'><FiLinkedin/></a>
       </div>

       <div className="footer_copyright">
          <small>&copy; EGATOR Tutorials. All rights reserved.</small>
       </div>
    </footer>
  )
}

export default Footer
