import React from 'react'
import Title from './Title'
import img1 from "../assets/pro1.webp"
import img2 from "../assets/pro2.webp"
import img3 from "../assets/pro3.webp"
import img4 from "../assets/pro4.webp"

import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";


const DYMMY_DATA = [
  {
      id:1,
      img:img1,
      Name:"Ema Irnik",
      skill:"Puyton & Algorithm Expert",
      facebook:"",
      instagram:"",
      linkedIn:""
  },
  {
    id:2,
    img:img2,
    Name:"Jason",
    skill:"Data Algorithm Expert",
    facebook:"",
    instagram:"",
    linkedIn:""
},
{
  id:3,
  img:img3,
  Name:"Maalik",
  skill:"Full Stack Developer",
  facebook:"",
  instagram:"",
  linkedIn:""
},
{
  id:4,
  img:img4,
  Name:"Jennifer",
  skill:"Design Expert",
  facebook:"",
  instagram:"",
  linkedIn:""
}
]
const Experts = () => {
  return (
    <div id='Contact' className='w-full my-[40px]'>
        <Title title='Community Experts' description='Replenish man have thing gehering lights yeilding shall you' />
        <div className='flex flex-wrap justify-center items-center gap-10 mt-8 my-20'>
          {DYMMY_DATA.map(item=>(
            <div key={item.it} className='max-w-[300px] w-full  flex flex-col justify-center items-center p-5 bg-[#c5d5f0] rounded-lg hover:shadow-2xl'>
                <div className=''>
                  <img src={item.img} alt="img" />
                </div>
                <div className='flex flex-col justify-center items-center mt-2'>
                    <h1 className= 'text-[18px] md:text-[20px] font-bold'>{item.Name}</h1>
                    <p className='md:text-[18px] text-[14px]'>{item.skill}</p>  
                    <div className='flex gap-2 py-3'>
                      <a href={item.facebook} className='p-[8px] border-[1px] border-solid border-[#0a2050] text-[#0a2050] hover:bg-[#0a2050] hover:text-[white] hover:border-[white] rounded-full duration-[0.3s] text-[14px] md:text-[16px]  md:p-2'><FaFacebookF/></a>
                      <a href={item.instagram} className='p-[8px] border-[1px] border-solid border-[#0a2050] text-[#0a2050] hover:bg-[#0a2050] hover:text-[white] hover:border-[white] rounded-full duration-[0.3s] text-[14px] md:text-[16px]  md:p-2'><FaInstagram/></a>
                      <a href={item.linkedIn} className='p-[8px] border-[1px] border-solid border-[#0a2050] text-[#0a2050] hover:bg-[#0a2050] hover:text-[white] hover:border-[white] rounded-full duration-[0.3s] text-[14px] md:text-[16px]  md:p-2'><FaLinkedinIn /></a>
                    </div>
                </div>
              
            </div>
          ))}

        </div>
    </div>
  )
}

export default Experts
