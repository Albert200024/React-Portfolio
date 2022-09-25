import React from 'react'
import './experinece.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Experinece = () => {
  return (
    <section id="experience">
       <h5>What Skills I have</h5>
       <h2>My Experiance</h2>
       <div className="container experience_container">
          <div className="experience_frontend">
                <h3>Frontend Development</h3> 
                <div className='experience_content'>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div>
                          <h4>HTML/CSS</h4>
                          <small className='text-light'>Intermedia</small>
                       </div>
                    </article>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div>
                          <h4>Bootasrap</h4>
                          <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div>
                          <h4>JavaScript</h4>
                          <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                   
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div>
                         <h4>React</h4>
                         <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon' />
                       <div>
                          <h4>Git/GitHub</h4>
                          <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                </div> 
          </div>
          <div className="experience_backand">
                <h3>Frontend Development</h3> 
                <div className='experience_content'>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div> 
                          <h4>Node JS</h4>
                          <small className='text-light'>Intermedia</small>
                       </div>   
                    </article>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div>
                          <h4>MongeDB</h4>
                          <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div>
                          <h4>PHP</h4>
                          <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                    <article className='experience_detalis'>
                       <CheckCircleIcon className='experience_detalis-icon'/>
                       <div>
                           <h4>MySQl</h4>
                           <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                </div> 
          </div>
       </div>
    </section>
  )
}

export default Experinece
