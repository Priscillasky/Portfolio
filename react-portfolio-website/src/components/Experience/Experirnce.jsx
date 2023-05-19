import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experirnce = () => {
  return (
    <section id ='experience'>
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
            <h3>FrontEnd Developement</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>HTML</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>CSS</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>Javascript</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>Tailwind</h4>
                    <small className='text-align'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>React</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
              </div>
        </div>
        <div className='experience__backend'>
            <h3>BackEnd Developement</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>Node.js</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>Mongo db</h4>
                    <small className='text-align'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>Php</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />

                  <div>
                  <h4>Java</h4>
                  <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>Laravel</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                    <h4>My SQL</h4>
                    <small className='text-align'>Experienced</small>
                  </div>
                  
                </article>
              </div>
        </div>
        </div>
    </section>
  )
}

export default Experirnce
