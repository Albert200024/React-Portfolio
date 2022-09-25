import React from 'react'
import './services.css'
import CheckIcon from '@mui/icons-material/Check';

const Service = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {/* Start UI/UX Design */}
         <article className="service">
            <div className="service_head">
                <h3>UI/UX Design</h3>
            </div>

            <ul className="service_list">
                 <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li> 
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
            </ul>
         </article>
         {/* end of UI/UX */}

         {/* Start Web Development */}
         <article className="service">
            <div className="service_head">
                <h3>Web Development</h3>
            </div>
            <ul className="service_list">
                 <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li> 
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
            </ul>
         </article>
         {/* end of Web Development */}

         {/* Start Content Creation */}
         <article className="service">
            <div className="service_head">
                <h3>Content Creation</h3>
            </div>
            <ul className="service_list">
                 <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li> 
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
                  <li>
                     <CheckIcon className='service_list-icon'/>
                     <p>Lorem, ipsum dolor sit amet consectetur  elit.</p>
                  </li>
            </ul>
         </article>
         {/* end of Content Creation */}
      </div>
    </section>
  )
}

export default Service
