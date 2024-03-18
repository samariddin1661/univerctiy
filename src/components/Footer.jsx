import React from 'react'
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
      <div className='w-[90%] m-auto flex justify-around'>
        {DYMMY_DATA.map(item=>(
            <div key={item.id} className='text-[white] flex flex-col justify-start items-start gap-5'>
                <h1 className='text-[16px] md:text-[20px] font-bold'>{item.title}</h1>
                {item.action.map((act,key)=>(
                   <p key={key} className='text-[14px] md:text-[18px] text-[#777] '>{act}</p>
                ))}

                {item.email ?
                <div className='flex justify-center items-center'>
                    <input type="email" className='border-none outline-none py-3 px-2 text-[#777] bg-[#243f7b]' />
                    <button className='border-none bg-[orange] py-3 px-2'>SUBSCRIBE</button>
                </div>
                :
                " "
                }
                
            
            </div>
       
        ))}
      
        </div>



      <div></div>
    </div>
  )
}

export default Footer
