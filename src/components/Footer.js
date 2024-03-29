import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Page1.css";

function Footer() { 
  return (
    <footer>
        <div className='relative min-h[280px] w-full overflow-hidden bg-brand py-8 px-8 text-blue-500 bg-stone-50 border-2 shadow-md'>
        <div className='max-w-maxScreen mx-auto'>
        <div className='flex flex-col items-center md:items-start gap-4 md:flex-row md:justify-around md:gap-0 my-6'>
        
        <div className='flex flex-col text-center text-base md:text-left'>
        <a href='/'>
          <div className='flex flex-col gap-y-2 items-center'>
          <div className="googlefont text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-stone-800">Soniya Pachauri</div>
          <div>Reiki Healer | Graphologist | Life Coach | ICH | NLP</div>
          </div>
          </a>
        </div>
        
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Top Sessions</p>
          <div className='flex flex-col gap-y-2'>
                <a href='/sessions/healingandselftransform'>Self Transformation</a>
          </div>
        </div>
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Connect</p>
          <div className='flex flex-col gap-y-2'>
                <a href='/contact'>Contact us</a>  
          </div>
        </div>
        
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Services</p>
          <div className='flex flex-col gap-y-2'>
            <a href='/aboutus'>About us</a>
         </div>
        </div>
        <div className='flex flex-col text-center text-base items-center'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Get in touch</p>
          <div className='flex gap-x-4'>
              
          <Link to="https://www.instagram.com/soniyapachauri12/" target="_blank">
                <img src='../../images/instagramsvg.svg' alt='instagram' className='w-[25px] h-[25px]'/>
          </Link>  
        </div>
        
        </div>
        </div>
        </div>
        <div class="text-base text-center border-t border-brColor pt-4 text-blue-600">Copyright © 2024 Soniya Pachauri. All Rights Reserved.</div>
        </div>
        
    </footer>
  )
}

export default Footer