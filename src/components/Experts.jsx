import React from 'react'
import Title from './Title'
import img1 from '../assets/per2.png'
const Experts = () => {
  return (
    <div className='w-full'>
        <Title title='Community Experts' description='Replenish man have thing gehering lights yeilding shall you'/>
        <div className='flex flex-wrap justify-center items-center gap-5'>
            {/* card */}
            <div>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experts
