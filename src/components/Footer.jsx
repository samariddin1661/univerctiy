import React from 'react'
// icons
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";

 const DYMMY_DATA =[
    {
        id:1,
        email:false,
        title:"Top Products",
        action:['Manage Reputation','Power Tools','Manage Websity','Marketing Service']
    },
    {
        id:2,
        email:false,
        title:"Quick Links",
        action:['Manage Reputation','Power Tools','Manage Websity','Marketing Service']
    },
    {
        id:3,
        email:false,
        title:"Features",
        action:['Manage Reputation','Power Tools','Manage Websity','Marketing Service']
    },
    {
        id:4,
        email:false,
        title:"Resources",
        action:['Manage Reputation','Power Tools','Manage Websity','Marketing Service']
    },
    {
        id:4,
        email:true,
        title:"News Letter",
        action:['Manage Reputation  dolor']
    }
 ]
const Footer = () => {
  return (
    <div className='w-full bg-[#0f1e3f] py-20'>
      <div className='w-[90%] m-auto flex flex-wrap gap-10 justify-around'>
        {DYMMY_DATA.map(item=>(
            <div key={item.id} className='text-[white] flex flex-col justify-start items-start gap-5'>
                <h1 className='text-[16px] md:text-[20px] font-bold'>{item.title}</h1>
                {item.action.map((act,key)=>(
                  <p key={key} className='text-[14px] md:text-[18px] text-[#777] '>{act}</p>
                ))}

                {item.email ?
                <div className='flex justify-center items-center'>
                    <input type="email" className='border-none outline-none py-3 px-2 text-[#777] bg-[#243f7b]' placeholder='Your Email Address'/>
                    <button className='border-none md:text-[18px] text-[14px] bg-[orange] py-3 px-2 font-bold hover:bg-[white] hover:text-[orange] duration-[0.5s]'>SUBSCRIBE</button>
                </div>
                :
                " "
                }
                
            
            </div>
      
        ))}
      
        </div>



      <div className='w-[90%] m-auto   flex flex-wrap gap-10 justify-around  my-10 items-center text-[white]'>
        <div>Copyright 2022 All rights reserved I This template is made by Tech2etc</div>
        <div className='flex gap-2 py-3'>
            <a href='#'className='p-[8px] border-[1px] border-solid border-[#0a2050] text-[white] bg-[#6b6b6b]   rounded-full duration-[0.3s] text-[14px] md:text-[20px]  md:p-2'><FaFacebookF/></a>
            <a href='#' className='p-[8px] border-[1px] border-solid border-[#0a2050] text-[white] bg-[#6b6b6b]   rounded-full duration-[0.3s] text-[14px] md:text-[20px]  md:p-2'><FaInstagram/></a>
            <a href='#'className='p-[8px] border-[1px] border-solid border-[#0a2050] text-[white] bg-[#6b6b6b]   rounded-full duration-[0.3s] text-[14px] md:text-[20px]  md:p-2'><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
