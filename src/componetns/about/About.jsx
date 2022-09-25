import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';

const About = () => {
  return (
    <section id="about">
       <h5>Get To know</h5>
       <h2>About US</h2>
       <div className='container about_container'>
          <div className="about_me">
             <div className="about_me-image">
               <img src={ME} alt="me"/>
             </div>
          </div>

           <div className="about_content">
             <div className="about_cards">
               <article className='about_card'>
                  <MilitaryTechIcon className="about_icon"/>
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
               </article>

               <article className='about_card'>
                  <GroupIcon className="about_icon"/>
                  <h5>Clients</h5>
                  <small>200+ Clients</small>
               </article>

               <article className='about_card'>
                  <TaskIcon className="about_icon"/>
                  <h5>Projects</h5>
                  <small>80+ Completed</small>
               </article>
              </div>

              <p>
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Delectus, ut! Dolorem itaque 
                provident at quo ipsum vitae dignissimos quasi nisi 
                numquam, eligendi sit deserunt dolorum. Eum vel blanditiis excepturi iure.
              </p>

              <a href='#contact' className='btn btn-primary'>Let"s Talk</a>
          </div> 
       </div>
    </section>
  )
}

export default About
