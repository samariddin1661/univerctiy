import React from 'react'
import Title from './Title'
// react icons
import { FaGraduationCap,FaAward  } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const DYMMY_DATA=[
  {
    id:1,
    title:"Scholorship Facility",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, soluta.",
    icon:<FaGraduationCap/>
  },
  {
    id:2,
    title:"Sell Online Course",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, explicabo?",
    icon:<GrCertificate/>
  },
  {
    id:3,
    title:"Global Certification",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sit.",
    icon:<FaAward/>
  }
]
const Feature = () => {
  return (
    <div className='py-[30px]'>
      <Title title="Awesone Feature" description='Replenish man have thing gehering lights yeilding shall you'/>
     
      <div className='justify-center gap-16 w-full flex flex-wrap flex-col md:flex-row items-center text-[#0a2050] my-[25px] lg:px-8 sm:px-5 px:-3'>
        {DYMMY_DATA.length === 0 ? "No Feature" :DYMMY_DATA.map((item,key)=>(
        <div className='flex flex-col gap-3 w-full max-w-[250px] sm:max-w-[350px] md:max-w-[350px] bg-slate-200 p-4 shadow-lg hover:shadow-2xl 'key={key}>
          <span className='text-[30px] md:text-[55px]'>{item.icon}</span>
          <h1 className='text-[18px] md:text-[30px] font-bold'>{item.title}</h1>
          <p className='text md:text-[18px] text-[12px]'>{item.description}</p>
          {/*line-clamp-3 qatorlar ko'payib ketganda ishlatiladi*/}
        </div>
      )) }
      </div>
    </div>
  )
}

export default Feature
