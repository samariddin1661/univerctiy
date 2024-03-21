import React from 'react'
const Home = () => {
  return (
    <div className=' relative w-full h-[100vh] parda'>
      <div className='flex absolute z-[4] w-full h-[100vh] flex-col justify-center items-center gap-5'>
        <h1 className='lg:text-[40px] md:text-[30px] text-[20px] font-bold text-[white]'>Eng Yuqori Sifatdagi Ta'lim</h1>
        <p className='md:w-[60%] w-[80%] text-center text-[white] md:text-[18px] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consectetur deleniti voluptate, omnis possimus temporibus, reiciendis culpa facere, alias cupiditate tempora ullam eius mollitia cum consequuntur ut veritatis soluta veniam.</p>
        <div className='flex gap-3 items-center justify-center text-center text-[white] '>
        <a href="/" className='flex font-bold items-center justify-center md:text-[18px] text-[12px] capitalize md:w-28 w-[100px] md:h-10 h-8 bg-[blue] border-[2px] border-[solid] border-[blue] hover:bg-transparent hover:text-[blue] rounded-lg duration-[0.4s]'>Learn more</a>
        <a href="/" className='flex font-bold items-center justify-center md:text-[18px] text-[12px] md:w-28 w-[100px] md:h-10 h-8 bg-[orange] border-[2px] border-[solid] border-[orange] hover:bg-transparent hover:text-[orange] rounded-lg duration-[0.4s]'>Visit</a>
        </div>
      </div>

    </div>
  )
}

export default Home
