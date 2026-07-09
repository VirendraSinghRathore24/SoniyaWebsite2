import React from 'react'
import { NavLink } from 'react-router-dom'

function ProgramCard1({url, imageUrl, title}) {
  return (
    <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto hover:scale-110 transition duration-300 ease-in'>
    <NavLink to={`${url}`}>
        
            <img className='h-[320px] w-[280px]' src={imageUrl} loading='lazy' alt='image' ></img>
           
       <div>
       <div className='absolute bottom-4 right-2'>
       <button class="bg-pink-500 h-10 w-[100px] font-semibold rounded-md text-white">Know More</button>
       </div>
       <div className='absolute top-4 px-4 text-left text-wrap bg-transparent backdrop-blur-xl h-20 w-full'>
            <p className='text-white font-semibold text-xl leading-6 text-center mt-4 googlefont'>{title}</p>
        </div>
      
       
        </div>
        
        </NavLink>
    </div>
  )
}

export default ProgramCard1