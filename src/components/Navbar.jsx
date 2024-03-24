import React, { useState } from 'react'

// icons 
import { ImCancelCircle } from "react-icons/im";
import { FaBarsStaggered } from "react-icons/fa6";

// logo image 
import logo from "../assets/logo1.png"

const Navbar = () => {
  const [toggle,setToggle] = useState(false)

  const navItems = ['Home','About','Blog','Courses','Contact']

  return (
    <div className='containerr z-10 fixed w-full bg-[white] flex justify-between items-center h-[80px] md:h-[90px] shadow-lg'>

        {/* logo  */}
        <div className='md:w-[90px] w-[60px]'>
            <img src={logo} alt="logo" className='w-full' />
        </div>

        {/* navItems  */}
        <div className='text-[#0a2050]   text-[16px] lg:text-[20px] font-bold '>
                <ul className={`flex flex-col md:flex-row gap-5 md:static  absolute top-[80px] transition-[1s]  ${toggle ? 'right-0 duration-[1s]' : 'right-[-100%] duration-[3s]'}  p-5  backdrop-blur-[100px] w-[50%]`}>

                  {navItems.map((item,key)=>(
                    <li key={key} className=' hover:text-[#4880aa]   after:w-0 after:rounded-r-[50px]  hover:after:w-full hover:after:h-[3px] hover:after:bg-gradient-to-l from-orange-700  after:absolute relative  hover:after:left-[0] hover:after:bottom-0 duration-[0.3s] hover:after:duration-[0.3s] text-center' onClick={()=>setToggle(!toggle)}><a href="#Blog">{item}</a></li>
                  ))}

                </ul>
        </div>

        {/* Bars  */}
        <div className='block md:hidden text-[25px] duration-2000 z-[20]' onClick={()=>setToggle(!toggle)}>
          {toggle ? <span><ImCancelCircle/></span> : <span><FaBarsStaggered/></span>}
        </div>

    </div>
  )
}

export default Navbar