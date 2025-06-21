import React from 'react'
import './homepage.css'
import {Link} from "react-router-dom"
import Hero from './Hero'
import Aboutus from './Aboutus'
import Testimonials from './Testimonials'
const homepage = () => {
  return (
    <section className='home'>
      <Hero />
      <Aboutus />
      <Testimonials />

    </section>
  )
}

export default homepage