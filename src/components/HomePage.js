import React, { useEffect, useState } from 'react'
import './Page1.css'
import Slider from './Slider1'
import Slider2 from './Slider2'
import { Link } from 'react-router-dom'
import Faq from './Faq'
import ProgramCard from './ProgramCard'
import "./HomePage.css"

function HomePage() {
  const [isExpanded1, setExpanded1] = useState(false)
  const [isExpanded2, setExpanded2] = useState(false)
  const [isExpanded3, setExpanded3] = useState(false)
  const [isExpanded4, setExpanded4] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', reveal);

     function reveal(){
      var reveals = document.querySelectorAll('.reveal')

      for(var i = 0; i < reveals.length; i++)
      {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 90;


        if(revealTop < windowHeight - revealPoint)
        {
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
     }
  }, []);

  return (
    <div className=''>
    <div>
        <div className='flex flex-wrap w-10/12 justify-evenly gap-y-2 mx-auto mt-2'>
            <div className='flex flex-col lg:w-8/12 xs:w-screen items-center font-normal'>
                <div className='flex text-left mt-8 googlefontpoppins text-3xl leading-12 text-blue-600'>Every answer you ever need for all your problems lies within yourself</div>
                <div className='mt-8 text-left text-lg leading-12 googlefontpoppins'>Hi, I am <strong className='text-amber-800'>Soniya Pachauri</strong>, a Reiki healer, graphologist, inner child healer, life coach, NLP practitioner and someone who has delved
                    into mind reprogramming techniques, I have explored various avenues of self improvement and found remarkable 
                    transformations along the way...</div>
            
                <div className='text-left mt-6 hover:scale-110 transition duration-300 ease-in'>
                  <Link className='text-blue-600 underline text-lg font-extrabold googlefontpoppins' to={'/aboutus'}>More about me ?</Link>
                </div>
              <div className='flex flex-wrap justify-evenly gap-x-4 items-center'>
              <Link to="/contact">
              <div className='flex gap-x-1 bg-indigo-500 w-[250px] rounded-xl h-10 mt-8 hover:scale-110 transition duration-300 ease-in'>
              
                  <button className=' text-white text-md ml-3 googlefontpoppins'>Connect with Me for Enquiry</button>
               </div>
               </Link>
              <Link to="https://www.instagram.com/soniyapachauri12/" target="_blank">
              <div className='flex gap-x-1 bg-indigo-500 w-[250px] rounded-xl h-10 mt-8 hover:scale-110 transition duration-300 ease-in'>
                  <button className=' text-white text-md ml-3 googlefontpoppins'> Follow me on Instagram</button>
                  <img src='../../images/instagramsvg.svg' alt='instagram' className='w-[25px] h-[25px] mt-2 mx-auto'/>
            </div>
            </Link> 
            </div>
</div>

            <div className=''>
              <img src='../../images/soniya5.png' loading='lazy' alt='profile' className='w-[300px] h-[340px] rounded-xl mt-8'/>
            </div>
        </div>
        </div>

          <div>
            
            <div>
            <div className='color '>
            <div className='text-center mt-8 font-bold text-3xl sm:text-6xl leading-12 text-white p-4 blink_me'>
               Upcoming Session
            </div>
        <div className='flex flex-wrap gap-x-8  gap-y-8 w-10/12 py-8 justify-evenly mx-auto googlefontpoppins text-white '>
            <div className='flex flex-col w-full sm:w-8/12 gap-y-6 mx-auto text-center sm:text-left'>
                <div className='flex flex-col gap-y-2'>
                    <div className='text-3xl sm:text-4xl text-orange-300 font-bold text-center'>Healing and Self Transformation:</div>
                    <div className='text-white text-2xl sm:text-3xl text-center'>Discover the Root of Unhappiness and Transform your life.</div>
                </div>
                <div className='text-xl text-center'>Conquer anger issues, anxiety/stress, depression and step into life of peace, purpose, prosperity & happiness.</div>
                <div className='flex flex-col gap-y-2 text-center'>
                    <div className='text-2xl sm:text-3xl text-orange-300'>Mindset Magic Manifestation Workshop</div>
                    <div className='text-lg sm:text-xl'>Soniya Pachauri, Life Coach, Reiki Healer, NLP & Inner Child Healer</div>
                </div>
                <div className='text-center'>
                <Link to={'/sessions/healing-self-transformation'}>
                  <button className='text-black text-xl sm:text-3xl gap-x-1 bg-yellow-500  w-full rounded-md h-14 hover:bg-green-400 hover:text-blue-600 hover:scale-110 transition duration-300 ease-in'>Know More About Session</button>
                  </Link>
               </div>
            </div>
            {/* <div className=''>
                <img src='../../images/img6.jpg' loading='lazy' alt='profile' className='w-[300px] h-[380px] rounded-xl '/>
            </div> */}
        </div>
        </div>
        </div>
          </div>

          <div className='reveal'>
        <div className='text-3xl leading-12 mx-auto flex justify-center text-center w-10/12 text-blue-600 font-semibold mt-10 py-8'>Healing Sessions & Coaching</div>
        <div className='w-10/12 mx-auto flex flex-wrap justify-evenly gap-y-16 gap-x-4 mb-10 mt-8'>
          <ProgramCard url={'healing-self-transformation'} imageUrl={'../../images/img5.jpg'} title={"Healing and Self Transformation"}/>   
          <ProgramCard url={'life-coaching'} imageUrl={'../../images/img4.jpg'} title={"Life Coaching"}/>
          <ProgramCard url={'reiki-inner-child-healing'} imageUrl={'../../images/img7.jpg'} title={"Reiki and Inner Child Healing"}/>
        </div>
        </div>

       <div className='bg-stone-50 mt-10 py-8 reveal'>
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
                 <Link className='flex justify-center items-center w-full mx-auto hover:scale-110 transition duration-300 ease-in' to={'https://www.amazon.in/Change-Your-Whole-Life-Writing/dp/B0CLTZ81QH'} target='_blank'>
                    <button className='bg-indigo-500 mt-8 rounded-lg w-[150px] h-10 googlefontpoppins text-white text-xl'>Buy Now</button>
                </Link>
            </div>
            <Link to={'https://www.amazon.in/Change-Your-Whole-Life-Writing/dp/B0CLTZ81QH'} target='_blank'>
              <img src='../../images/soniyabook.png' loading='lazy' alt='profile' className='w-[280px] h-[390px] rounded-xl mb-8 mt-10 hover:scale-110 transition duration-300 ease-in'/>
            </Link>
        </div>
       
        <div className='color mt-10 reveal'>
          <div className='w-10/12 mx-auto flex justify-center p-2 text-white text-2xl text-center googlefontpoppins'>People are getting amazing results</div>
            <div className='w-10/12 mx-auto grid xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 place-items-center gap-y-4 gap-x-2 mb-10 p-2'>
            <div className='flex flex-col items-center text-white gap-y-2 p-2'>
              <div className='text-3xl googlefontpoppins text-white'>Healed</div>
              <div className='text-3xl font-extrabold text-orange-300'>1000+</div>
              <div className='text-md googlefontpoppins text-white text-center'>People into healing their deepest inner blocks</div>
            </div>
            <div className='border-r-2 border-white h-full '></div>
            <div className='flex flex-col items-center text-white gap-y-2 p-2'>
            <div className='text-3xl googlefontpoppins text-white'>Taken</div>
              <div className='text-3xl font-extrabold text-orange-300'>500+</div>
              <div className='text-md googlefontpoppins text-white text-center'>LIVE sessions for Reiki & Chakra Healing</div>
            </div>
            <div className='border-r-2 border-white h-full '></div>
            <div className='flex flex-col items-center text-white gap-y-2 p-2'>
              <div className='text-3xl googlefontpoppins text-white text-center'>Countless</div>
              <div className='text-2xl font-extrabold text-orange-300'>RESULTS</div>
              <div className='text-md googlefontpoppins text-white text-center'>Inspired actions taken every day to massively impact the collective</div>
            </div>
            </div>
          </div>

        <div className='bg-gradient-to-r from-stone-50 to-blue-50 reveal'>
        <div id='testimonials' className=' mt-10 py-8'>
        <div className='text-3xl leading-12 mx-auto flex justify-center text-left w-10/12 fontcolor font-semibold '>Testimonials</div>
          <Slider />
          
        </div>


        <div>
          <div className='w-10/12 mx-auto text-2xl py-8 mt-10 reveal'>
            <div className='xs:text-xl sm:text-xl md:text-3xl uppercase text-red-700 flex justify-center gap-x-2 font-bold '>Posts at <span class='text-green-700'>Instagram</span></div>
            <div className='mt-14'>
              <Slider2/>
            </div>
          </div>
          </div>
          </div>
</div>
          <div id='faq' className='w-10/12 mx-auto py-8 flex flex-col gap-y-4 mt-10 reveal'>
            <div className='text-3xl font-extrabold googlefontpoppins flex justify-center text-center'>Frequently asked questions</div>
            <div className='border-b-2 border-stone-200 mt-8'></div>
              <Faq isExpanded={isExpanded1} setExpanded={setExpanded1} isLastFaq={false} title={"How many days program required for complete healing?"} desc={"You need to keep practicing life."}/>
              <Faq isExpanded={isExpanded2} setExpanded={setExpanded2} isLastFaq={false} title={"Can we change our life by just writing?"} desc={"Yes."}/>
              <Faq isExpanded={isExpanded3} setExpanded={setExpanded3} isLastFaq={false} title={"How to get rid of Over-thinking and Negative Thinking?"} desc={"When a negative thought comes, catch yourself thinking negative ans say &quot;Oops i did it again&quot; And then pivot your negative thought to what you actually want and how you want to feel in that situation ..raise your vibrations with these newly formed positive thoughts and emotions and you will be back to high/positive frequency."}/>
              <Faq isExpanded={isExpanded4} setExpanded={setExpanded4} isLastFaq={true} title={"When is Brahma Muhurat?"} desc={"Brahma muhurta is an auspicious period of 48 minutes that begins 1 hour 36 minutes before sunrise and ends 48 minutes before it. It is the best time to meditate, read spiritual books &amp; engage in exercises. So check out Sunrise time in your city and you can calculate accordingly."}/>
          </div>
      
    
    </div>
  )
}

export default HomePage