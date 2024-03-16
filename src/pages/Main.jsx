import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Feature from '../components/Feature'
import Courses from '../components/Courses'
import Ragister from './Ragister'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Feature/>
      <Courses/>
      <Ragister/>
    </div>
  )
}

export default Main
