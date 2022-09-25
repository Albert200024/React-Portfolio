import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name:"Tina Snow",
    review:"Modialias animi aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blandittis consequartur qui molestiae. Dolerem perspicatis aspernatur labore distinctio delectus voluptatem dolores deserunt explicabo ducimus quasi?"
  },
  {
    avatar: AVTR2,
    name:"Shata Wale",
    review:"Modialias animi aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blandittis consequartur qui molestiae. Dolerem perspicatis aspernatur labore distinctio delectus voluptatem dolores deserunt explicabo ducimus quasi?"
  },
  {
    avatar: AVTR3,
    name:"Kwame Despite",
    review:"Modialias animi aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blandittis consequartur qui molestiae. Dolerem perspicatis aspernatur labore distinctio delectus voluptatem dolores deserunt explicabo ducimus quasi?"
  },
  {
    avatar: AVTR4,
    name:"Nana Anna McBrown",
    review:"Modialias animi aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blandittis consequartur qui molestiae. Dolerem perspicatis aspernatur labore distinctio delectus voluptatem dolores deserunt explicabo ducimus quasi?"
  }
]

const Testimonials = () => {
  return (
    <section id="testemoniels">
       <h5>Review from clients</h5>
       <h2>Testimonials</h2>

       <Swiper className='container container_testimonials'
           modules={[Pagination]} 
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
       >
          {
            data.map(({avatar,name, review}, index) => {
                return (
                  <SwiperSlide key={index} className='testimonials'>
                      <div className='client_avatar'>
                          <img src={avatar} alt="Avatar One"/>
                      </div>
                      <h5>{name}</h5>
                      <small className='client-review'>{review}</small>      
                 </SwiperSlide>
                )
            })
          }
       </Swiper>

    </section>
  )
}

export default Testimonials
