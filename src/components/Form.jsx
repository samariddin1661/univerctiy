import React from 'react'

const Form = () => {
  return (
    <div className='flex  bg-[transparent] w-full justify-center items-center md:px-0 px-5'>
      <form className=' flex flex-col bg-[#ffffff] justify-center items-center p-5 md:gap-10 gap-5 w-full max-w-[400px] rounded-lg'>
        <h1 className='font-bold md:text-[25px] text-[18px]'>Create Free Account NaW!</h1>
        <input type="text" className='outline-none border-[1px] dorder-[solid] border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full md:text-[16px] text-[14px ] max-w-[350px]'placeholder='Name' />
        <input type="email" className='outline-none border-[1px] dorder-[solid] border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full md:text-[16px] text-[14px ] max-w-[350px]'placeholder='Email Accress' />
        <input type="tel" className='outline-none border-[1px] dorder-[solid] border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full md:text-[16px] text-[14px ] max-w-[350px]'placeholder='Phone Nomber' />
        <input type="submit" value="Visit Courses" className='outline-none bg-[orange] text-[white] hover:bg-[white] hover:text-[orange] border-[1px] dorder-[solid] border-[orange] md:px-[3px] px-[2px] md:py-[10px] py-[5px] max-w-[130px] w-full md:max-w-[200px] self-start font-bold text-[14px] md:text-[18px] rounded-lg duration-[0.5s]'/>
      </form>
    </div>
  )
}

export default Form
