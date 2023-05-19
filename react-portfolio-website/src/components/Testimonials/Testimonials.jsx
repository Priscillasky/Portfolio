import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const data = [
  {
    avatar:AVTR1,
    name:'Gum Priscilla',
    Review:'fortune favours the bold .This is really a great job you are doing over here!!I love it !! Keep it up.',

  },
  {
    avatar:AVTR2,
    name:'Ahimbisibwe Joshua',
    Review:'fortune favours the bold .This is really a great job you are doing over here!!I love it !! Keep it up.',
  },
  {
    avatar:AVTR3,
    name:'Tatiana Manoes',
    Review:'fortune favours the bold .This is really a great job you are doing over here!!I love it !! Keep it up.',
  },
  {
    avatar:AVTR4,
    name:'Shata Wale',
    Review:'fortune favours the bold .This is really a great job you are doing over here!!I love it !! Keep it up.',
  }
]



const Testimonials = () => {
  

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className='container testimonials__container'
      modules={ [Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      
      
      >
        {
          data.map(({avatar, name, Review}, index) =>{
            return (
              <SwiperSlide key ={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} alt='Avatar 1'/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{Review}</small>
          
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
