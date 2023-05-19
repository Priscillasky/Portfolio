import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { UseRef } from 'react'
import emailjs from '@emailjs/browser';

import {Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9oqabll', 'template_b2o3osc', form.current, 'V_R4bgrXNNIWFfrb5')

    e.target.reset()

      
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
       <div className='contact__options'>
          <article className='contact__option'>
          <AiOutlineMail className ='contact__option-icon'/>
            <h4>Email</h4>
            <h5>priscillasky542@gmail.com</h5>
            <a href='mailto:priscillasky542@gmail.com' target="_blank">Send Message</a>
          </article>
          <article className='contact__option'>
          <RiMessengerLine className ='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Priscilla Oceans</h5>
            <a href='https://m.me/prisilla.oceans' target="_blank" >Send Message</a>
          </article>
          <article className='contact__option'>
          <AiOutlineMail className ='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0788450661</h5>
            <a href='https://api.whatsapp.com/send?phone+256788450661' target="_blank" >Send Message</a>
          </article>
       </div>

       <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your full name' required />
        <input type='text' name='name' placeholder='Your full name' required />

        <textarea name='message' rows= '7' placeholder='Your message' required></textarea>

        <button type='submit' className='btn btn-primary'>Send message</button>
       </form>
      
      </div>
    </section>
  )
}

export default Contact
