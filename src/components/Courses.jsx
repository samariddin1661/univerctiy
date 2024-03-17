import React from 'react'
import Title from "../components/Title"
import CardImg1 from "../assets/c1.jpg"
import CardImg2 from "../assets/c2.jpg"
import CardImg3 from "../assets/c3.jpg"
import CardImg4 from "../assets/c4.jpg"
import CardImg5 from "../assets/c5.jpg"
import CardImg6 from "../assets/c6.jpg"
import StarRatings from 'react-star-ratings'

const DYMMY_DATA = [
    {
        id:1,
        title:"Javascript Beginners Coursee",
        updated:"21/8/21",
        price:'33.99',
        rating:4.1,
        image:CardImg1
    },
    {
        id:2,
        title:"Html & Css Beginners Course",
        updated:"21/10/22",
        price:'33.99',
        rating:5,
        image:CardImg2
    },
    {
        id:3,
        title:"Python Beginners Course",
        updated:"22/10/21",
        price:'33.99',
        rating:4.7,
        image:CardImg3
    },
    {
        id:4,
        title:" Web Design Crash Course",
        updated:"21/8/21",
        price:'33.99',
        rating:4,
        image:CardImg4
    },
    {
        id:5,
        title:"Web Development Course",
        updated:"21/8/21",
        price:'49.99',
        rating:2,
        image:CardImg5
    },
    {
        id:6,
        title:"Javascript Beginners Course",
        updated:"21/8/21",
        price:'33.99',
        rating:3.5,
        image:CardImg6
    },
]


const Courses = () => {
  return (
    <div className='my-2'>
      <Title title="Our Popular Courses" description="Peplenish man have thing gathering jidhts yielding shall you"/>
     <div className='flex flex-wrap justify-center gap-5 max-w-[1373] w-full m-avto my-3'>
     {
        DYMMY_DATA.length === 0 ?"No courses" :DYMMY_DATA.map((item,key)=>(
           <div className='w-[300px] shadow-lg'>
        {/* card img */}
        <div><img src={item.image} alt=""  className='h-[200px grayscale-[100%] hover:grayscale-0 duration-[0.3s]'/></div>

        {/* card footer */}
        <div className='px-3 py-5 relative'>
          <div className='top-[-40px] right-5 absolute w-[80px] h-[80px] bg-purple-700 rounded-full flex justify-center items-center'>$49.99</div>
          <p className='flex justify-start text-{#0a2050'>Updated &nbsp;&nbsp;&nbsp; {item.updated}</p>
          <h2 className='text-[20px] font-bold'>{item.title}</h2>
          <div className='flex justify-start gap-2'>
          <StarRatings
        rating={item.rating}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="gold"
      />
              <p>239</p>
          </div>
        </div>
      </div>
       ))}
     

      </div>
    </div>
  )
}

export default Courses
