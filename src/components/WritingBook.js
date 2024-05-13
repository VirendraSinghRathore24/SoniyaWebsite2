import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const WritingBook = () => {

    useEffect(() => {
        window.scroll(0,0);
    }, []);
  return (
    <div> 
    <div className='bg-stone-50 py-8'>
    <div className='text-3xl leading-12 mx-auto flex flex-wrap justify-center text-left w-10/12 fontcolor font-semibold '>Practice Book</div>
     <div className='flex flex-wrap w-10/12 justify-evenly gap-y-6 mx-auto mt-2'>
         <div className='flex flex-col lg:w-8/12 xs:w-screen items-start'>
             <div className='flex text-left mt-8 googlefontpoppins text-3xl leading-12 text-blue-600'>Change Your Whole Life By Just Writing</div>
             <div className=' mt-8 text-left text-lg leading-12 googlefontpoppins'>I invite you to join me on a journey of 
             self exploration, empowerment and manifestation.</div>
             <br/>
             <div className=' text-left text-lg leading-12 googlefontpoppins'>I will share practical techniques, personal ancedotes and profound 
             inights that will empower you to break free from self limiting beliefs, embrace your true potential and manifest the life you've always desired.</div>
             <br/>
             <div className=' text-left text-lg leading-12 googlefontpoppins'>Are you ready to embark on a transformative adventure?</div>
             <div className=' text-left text-lg leading-12 googlefontpoppins'>Let's begin.</div>
              <Link className='flex justify-center items-center w-full mt-16 mx-auto hover:scale-110 transition duration-300 ease-in ' to={'https://www.amazon.in/Change-Your-Whole-Life-Writing/dp/B0CLTZ81QH'} target='_blank'>
                 <button className='bg-indigo-500  rounded-lg w-full py-2 googlefontpoppins text-white text-xl hover:bg-green-400 hover:text-black'>Buy Now</button>
             </Link>
         </div>
         <Link to={'https://www.amazon.in/Change-Your-Whole-Life-Writing/dp/B0CLTZ81QH'} target='_blank'>
           <img src='../../images/soniyabook.png' loading='lazy' alt='profile' className='w-[280px] h-[390px] rounded-xl mb-8 mt-10 hover:scale-110 transition duration-300 ease-in'/>
         </Link>
     </div>
        </div>
        <div className='py-8 color'><Book/></div>
        
    </div>
  )
}

export default WritingBook