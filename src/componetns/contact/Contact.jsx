import React from 'react'
import './contact.css'
import {RiMessengerLine} from 'react-icons/ri'
import {MdMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xl1ytwm', "template_x6xcutg", form.current, 'MBM3klBXMk2Kbs_Bx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
   };

  return (
    <section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact_container'>
           <div className="contact_options">
               <article className='contact_option'>
                 <MdMailOutline className='contact_option-icon'/>
                 <h4>Email</h4>
                 <h5>albert.ghumashyan2000@mail.ru</h5>
                 <a href='https://e.mail.ru/inbox/1:aed738386fcb42f8:0/?back=1' target="_blank">Send a message</a>
               </article>

               <article className='contact_option'>
                 <RiMessengerLine className='contact_option-icon'/> 
                 <h4>Messenger</h4>
                 <h5>Albert Gumashyan</h5>
                 <a href='https://m.me/albert.gumashyan.3' target="_blank">Send a message</a>
               </article>

               <article className='contact_option'>
                 <BsWhatsapp className='contact_option-icon'/> 
                 <h4>Email</h4>
                 <h5>+37493349605</h5>
                 <a href='https://web.whatsapp.com//send?phone=+37493349605' target="_blank">Send a message</a>
               </article>
           </div>
           <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name ="name" placeholder='Your Full Name' required/>
                  <input type="email" name='email' placeholder='Your Email' required/>
                  <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                  <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
 