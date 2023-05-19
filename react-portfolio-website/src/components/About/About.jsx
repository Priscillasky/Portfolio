import React from 'react'
import './about.css'
import ME from '../../assets/peace.jpg'
import Gum from '../../assets/Gum.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
            
          </div>
          

        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'> 
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'> 
              <FiUsers className='about__icon' />
              <h5>clients</h5>
              <small>10+ Happy clients </small>
            </article>

            <article className='about__card'> 
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed successfully</small>
            </article>
        
         </div>


         <p>
         Hi there! Its so good to meet you!
         I am student at Makerere University ,persuing a bachelor's degree in Software Engineering.I am currently in my second year and i am majoring 
         in Front End development although i can do backend as well.I am experienced in React.js as a frontend framework and i can guarantee good work.
         Feel free to contact me incase of anything and ask any questions of your choice.
         </p>

         <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About
