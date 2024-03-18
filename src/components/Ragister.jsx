import React from 'react'
import back_img from "../assets/signup.jpg"
import Form from './Form'
const Ragister = () => {
  return (
    <div className='h-[100vh] relative w-full par my-3 z-[9]'>  
        <img src={back_img} alt="back_img" className='absolute top-0 left-0 w-full h-[100%]'/> 
        <div className='absolute top-0 left-0 w-full flex flex-col lg:flex-row gap-4 md:gap-10 justify-center  md:justify-around items-center h-[100vh] z-[10]'>
          <div>
            <div className='text-[white] text-center md:text-left flex flex-col gap-4'>
              <p className='md:text-[20px] text-[18px]'>Get 100 onina Courses for Free</p>
              <h2 className='md:text-[35px] text-[20px]  font-bold'>Register To Get It</h2>
              <div className='flex justify-center gap-4 z-[5] relative'>
                <p className='pmd:y-4  py-3 z-[4]  md:px-6 px-5 text-[white] backdrop-blur-[20px] after:bg-[#9494944f] after:absolute after:w-full after:h-[100%] after:top-0 after:left-0 after:rounded-[10px] after:z-[3] text-center text-[15px] md:text-[20px] rounded-[10px] '>
                  <span className='z-[4]'>18</span>
                  <p className='z-[4]'>Days</p>
                </p>
                <p  className='md:py-4 py-3  z-[4] md:px-6 px-5 text-[white] backdrop-blur-[20px] after:bg-[#9494944f] after:absolute after:w-full after:h-[100%] after:top-0 after:left-0 after:rounded-[10px] after:z-[3] text-center text-[15px] md:text-[20px] rounded-[10px]'>
                  <span>23</span>
                  <p>Hours</p>
                </p>
                <p  className='md:py-4 py-3  z-[4] md:px-6 px-5 text-[white] backdrop-blur-[20px] after:bg-[#9494944f] after:absolute after:w-full after:h-[100%] after:top-0 after:left-0 after:rounded-[10px] after:z-[3] text-center text-[15px] md:text-[20px] rounded-[10px] '>
                  <span>06</span>
                  <p>Mins</p>
                </p>
                <p  className='md:py-4 py-3  z-[4] md:px-6 px-5 text-[white] backdrop-blur-[20px] after:bg-[#9494944f] after:absolute after:w-full after:h-[100%] after:top-0 after:left-0 after:rounded-[10px] after:z-[3] text-center text-[15px] md:text-[20px] rounded-[10px] '>
                  <span>58</span>
                  <p>secs</p>
                </p>
              </div>
          </div>
          </div>
          <div>
          <Form/>
          </div>
        </div>
    </div>
  )
}

export default Ragister
