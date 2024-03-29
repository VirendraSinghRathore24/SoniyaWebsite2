import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function AboutUS() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (

<div className=''>
    <p className='p-2 googlefontpoppins'><strong><Link to="/">Home</Link> </strong> / About us</p>
    {/* <p className='ml-10 text-3xl text-blue-400'>About Me</p> */}
    <div className='flex flex-wrap w-full justify-evenly gap-y-2'>
        <div className='flex flex-col lg:w-8/12 xs:w-screen items-center font-normal p-5'>
            <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>
                I am <span className='text-amber-800 font-extrabold text-lg'>Soniya Pachauri</span> a Reiki healer, graphologist, inner child healer, life coach, NLP practitioner and someone who has delved
                    into mind reprogramming techniques, I have explored various avenues of self improvement and found remarkable 
                    transformations along the way.
            </p>
        
       
            <br/>
                    <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>
                        Moreover, Reiki healing enabled me to cultivate self-love and appreciation, transforming me into a more confident and 
                        self assured individual.
                        I became active on social media, uploading videos and sharing my healing sessions with a growing audience.
                   
                   
                   
                        
                        </p>
                        <br/>
                        <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>
                        My life path's has been an extra one, filled with ups and downs, moments of self-doubt and the joy of 
                        triumphing over my fears.
                        In addition to personal transformations, I experienced several remarkable instances where my beliefs and intentions menifested 
                        in extraordinary ways.
                        </p>
                        <br/>
                        <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>
                            Not too long ago, I was a timid individual who lacked confidence and struggled to express myself.
                            I shied away from sharing my opinions with others and was not active on any social media platforms. I held
                            the belief that others possessed more talent and were influent in English, leaving me feeling inadequate.
                            Self sabotaging thoughts plagued my mind, hindering my personal growth.
                        </p>

        </div>

        <div className='p-5'>
            <img src='../../images/soniya5.png' loading='lazy' alt='profile' className='w-[320px] h-[420px] rounded-lg'/>
       </div>
    </div>
    <div className='flex flex-col items-center p-5'>
    <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>
        However, everything changed when I discovered the power of Reiki healing. It became my guiding light,
        helping me overcome my fears and embrace life with a newfound entusiasm. Through Reiki, I discovered the strength 
        to embark on solo travels, learn to drive and engage in daily activities with a renewed sense of confidence. Physical 
        ailments that once troubled me, such as knee pain and menstrual issues, began to subside as I nurtured a healthier relationship
        with myself.
    </p>
    <br/>
    <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>
        Through the practice of Reiki and life coaching, I not only experienced personal growth but also embarked on 
        a journey of creating passive income. The results of my healing and coaching sessions have been nothing short 
        of miraculous.
    </p>
    <br/>
    <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>
        Students have shared countless testimonials, detailing the proflound impact these practices have had on their lives.
        You can find a collection of these stories on my Instagram profile. I found courage to change my circumstances by simply Writing 
        in my journal that my manager would no longer be in charge of my team and shortly thereafter, a reorganization occurred and 
        I was free from her influence. I got great achievements in my professional life such as good projects, salary hikes etc.
    </p>    
    </div>
        <div className='color mt-6'>
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
        <div className='w-9/12 mx-auto p-4 my-10 flex flex-col justify-center text-white text-center googlefontpoppins bg-gradient-to-r from-red-200 via-red-100 to-red-200 rounded-full'>
            <div className='w-8/12 mx-auto mt-4 text-xl sm:text-3xl text-blue-600'>
                Want to connect with me at a personal level & get real-time updates on all programs?
            </div>
             <div className='flex justify-center'>
                <Link to="https://www.instagram.com/soniyapachauri12/" target="_blank">
                <div className='flex gap-x-1 bg-fuchsia-500 w-[250px] rounded-xl h-10 mt-4 hover:scale-110 transition duration-300 ease-in'>
                    <button className=' text-white text-md ml-3 googlefontpoppins'> Follow me on Instagram</button>
                    <img src='../../images/instagramsvg.svg' alt='instagram' className='w-[25px] h-[25px] mt-2 mx-auto'/>
                </div>
                </Link> 
            </div>
            
        </div>
    </div>
  )
}

export default AboutUS