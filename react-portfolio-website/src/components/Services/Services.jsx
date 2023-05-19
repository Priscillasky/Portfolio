import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Great User experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>User Friendly apps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fully Responsive websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Beautiful display.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Top Notch system interaction.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>.</p>
            </li>
    
          </ul>
        </article>
          
    {/*END OF UI/UX */}


        <article className='service'>
          <div className='service__head'>
            <h3>Web developement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Website developement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Software Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Requirements Engineering.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Web app developement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Software Integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Software Testing.</p>
            </li>
            
          </ul>
        </article>

        {/*END OF WEB DEVELOPEMENT*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Content creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fortune favours the bold.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fortune favours the bold.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fortune favours the bold.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fortune favours the bold.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fortune favours the bold.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fortune favours the bold.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Fortune favours the bold.</p>
            </li>
          </ul>
        </article>

        {/*CONTENET CREATION*/}
      </div>
    </section>
  )
}

export default Services
