import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className='w-[80%] m-auto text-center text-[#0a2050]'>
      <h1 className='md:text-[30px] text-[20px] font-bold '>{title}</h1>
      <p className='md:text-[18px] text-[12px]'>{description}</p>
    </div>
  )
}

export default Title
