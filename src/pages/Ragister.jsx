import React from 'react'
import back_img from "../assets/signup.jpg"
const Ragister = () => {
  return (
    <div className='h-[100vh] relative w-full parda my-3'>  
        <img src={back_img} alt="back_img" className='absolute top-0 left-0 w-full h-[100%]'/> 
        <div className='absolute top-0'>
          <div>
            <p>Get 100 onina Courses for Free</p>
            <h2>Register To Get /It</h2>
            <div className='flex justify-center'>
              <p className='py-4 px-6 text-[white] text-center bg-[#ffffffa0]'>
                <span>18</span>
                <p>Days</p>
              </p>
              <p  className='py-4 px-6 text-[white] text-center bg-[#ffffffa0]'>
                <span>23</span>
                <p>Hours</p>
              </p>
              <p  className='py-4 px-6 text-[white] text-center bg-[#ffffffa0]'>
                <span>06</span>
                <p>Mins</p>
              </p>
              <p  className='py-4 px-6 text-[white] text-center bg-[#ffffffa0]'>
                <span>58</span>
                <p>secs</p>
              </p>
            </div>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Ragister
