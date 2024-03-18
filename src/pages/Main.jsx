import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Feature from '../components/Feature'
import Courses from '../components/Courses'
import Ragister from '../components/Ragister'
import Experts from '../components/Experts'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Feature/>
      <Courses/>
      <Ragister/>
      <Experts/>
      <Footer/>
    </div>
  )
}

export default Main
