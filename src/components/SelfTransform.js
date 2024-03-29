import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function SelfTransform() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);

  return (
    <div className='googlefontpoppins'>
        {/* <p className='p-2'><strong><NavLink to="/">Home /</NavLink> </strong><strong><NavLink to="/sessions">Sessions</NavLink> </strong> / Healing and Self Transformation</p> */}
        <div className='color'>
        <div className='flex flex-wrap gap-x-8  gap-y-8 w-10/12 py-8 justify-evenly mx-auto googlefontpoppins text-white'>
            <div className='flex flex-col w-full md:w-8/12 gap-y-6 mx-auto text-center sm:text-left'>
                <div className='flex flex-col gap-y-2'>
                    <div className='text-3xl sm:text-4xl text-orange-300 font-bold'>Healing and Self Transformation:</div>
                    <div className='text-white text-2xl sm:text-3xl'>Discover the Root of Unhappiness and Transform your life.</div>
                </div>
                <div className='text-xl'>Conquer anger issues, anxiety/stress, depression and step into life of peace, purpose, prosperity & happiness.</div>
                <div className='flex flex-col gap-y-2'>
                    <div className='text-2xl sm:text-3xl text-orange-300'>Mindset Magic Manifestation Workshop</div>
                    <div className='text-lg sm:text-xl'>Soniya Pachauri, Life Coach, Reiki Healer, NLP & Inner Child Healer</div>
                </div>
                <div className='text-center'>
                <Link to={'/contact?selftransform'}>
                  <button className='text-black text-2xl sm:text-3xl gap-x-1 bg-yellow-500  w-full rounded-md h-14 hover:bg-green-400 hover:text-blue-600 hover:scale-110 transition duration-300 ease-in'>Register Now</button>
                  </Link>
               </div>
            </div>
            <div className=''>
                <img src='../../images/soniya5.png' loading='lazy' alt='profile' className='w-[300px] h-[380px] rounded-xl '/>
            </div>
        </div>
        </div>
        <div className='text-2xl sm:text-3xl font-bold text-center mt-10 text-gray-700'>The only journey is the journey within — Rainer Maria Rilke</div>
        <div className='w-full mx-auto flex flex-col justify-center text-xl sm:text-2xl gap-y-2 border-2 text-center bgcolor text-white p-5 mt-10'>
            <div><strong>Instructor:</strong> <span className='font-bold'> Soniya Pachauri</span></div>
            <div><strong>Duration:</strong> 30 Days Program</div>
            <div><strong>Language:</strong> Hindi and English</div>
        </div>
        <div className='w-full mx-auto flex flex-col justify-center text-lg gap-y-4  bg-gradient-to-r from-yellow-100 via-pink-300 to-red-200 p-5'>
            <div className='w-full sm:w-10/12 mx-auto'>
                <div className='text-2xl sm:text-3xl text-blue-500 text-center sm:text-left font-bold'>Why This course?</div>
                <div className='text-xl sm:text-2xl mt-2'>Description:</div>
                <div className='mt-2'>Manifest Your Desires with Healing and Self Transformation Club. A life-changing 4 weeks online workshop on co-creating the future you desire for, with 30+ Spiritual and Law of Attraction tools and techniques to create the life of your dreams. Daily positive habits to keep you in high energy and help you in goal creation and Action plan.</div>
            </div>
        </div>
        <div className='bg-gradient-to-r from-stone-50 to-blue-50 py-4'>
        <div className='w-10/12 mx-auto flex flex-col justify-center text-lg gap-y-4 mt-10 mb-10'>
            <div>➡️ Daily 30+ min of Law of Attraction and Manifestation sessions with Step-by-Step Guidance.</div>
            <div>➡️ 15 mins 5 am LIVE Storytime every day.</div>
            <div>➡️ Guided meditation.</div>
            <div>➡️ Creative visualization.</div>
            <div>➡️ Life design blueprint - Clarity of your desires in 12 areas of life.</div>
            <div>➡️ Goal setting (replace outcome).</div>
            <div>➡️ Revisiting your belief system.</div>
            <div>➡️ Choosing positive reasons for the manifestation.</div>
            <div>➡️ Taking inspired action.</div>
            <div>➡️ Step-by-step process for attracting abundance into your life.</div>
            <div>➡️ How to create powerful shifts in your money energy to attract high levels of abundance in your life.</div>
            <div>➡️ 30 Days To Keep Your Vibe High.</div>
            <div>➡️ Right way to practice gratitude.</div>
            <div>➡️ Fitness.</div>
            <div>➡️ Self Love.</div>
            <div>➡️ Relationship building.</div>
            <div>➡️ Scribing.</div>
            <div>➡️ Self-paced program with a lot of motivation and handholding throughout.</div>
            <div className='text-center'>
            <Link to={'/contact?selftransform'}>
                  <button className='text-black text-xl sm:text-3xl  gap-x-1 bg-yellow-500  w-full rounded-md py-2 hover:scale-110 transition duration-300 ease-in'>Yes, I want to Elevate my life !</button>
                  </Link>
               </div>
        </div>
        </div>
        <div className='w-full md:w-10/12 mx-auto mt-10 '>
            <div className='text-2xl sm:text-5xl text-center border-8 py-8 border-orange-300 '>
            <div className='bgcolor p-2 mx-10 text-orange-300'>Meet Your Mentor
            </div></div>
            <div className='border-orange-300  border-4 color py-8'>
            <div className='flex flex-wrap justify-evenly gap-x-10 gap-y-6 text-white w-full md:w-10/12 mx-auto'>
                <div className='w-full flex flex-col justify-center items-center md:w-4/12 mx-auto'>
                    <img src='../../images/soniya5.png' loading='lazy' alt='profile' className='w-[300px] h-[380px] mt-20'/>
                    <Link to="https://www.instagram.com/soniyapachauri12/" target="_blank">
                        <div className='flex gap-x-1 bg-yellow-500 w-[250px] rounded-xl h-10 mt-8 hover:scale-110 transition duration-300 ease-in'>
                        <button className=' text-black text-md ml-3 googlefontpoppins'> Follow me on Instagram</button>
                        <img src='../../images/instagramsvg.svg' alt='instagram' className='w-[25px] h-[25px] mt-2 mx-auto'/>
                        </div>
                    </Link> 
                </div>
                
                <div className='w-full md:w-7/12 mx-auto text-xl leading-10 flex flex-col gap-y-4 p-5'>
                <div >Hi, I am <span className='text-orange-300'>Soniya Pachauri </span> a Reiki healer, graphologist, inner child healer, life coach, NLP practitioner and someone who has delved into mind reprogramming techniques, I have explored various avenues of self improvement and found remarkable transformations along the way.</div>
<div>My life path's has been an extra one, filled with ups and downs, moments of self-doubt and the joy of triumphing over my fears. In addition to personal transformations, I experienced several remarkable instances where my beliefs and intentions menifested in extraordinary ways.

</div>
<div>Let's team up and uncover your inner strength together. We'll break down barriers and set you on a path to feeling awesome about who you are.</div>
</div>

            </div>
            </div>
        </div>
        <div className='bgcolor mt-10 py-10 text-white'>
        <div className='w-full sm:w-10/12  mx-auto flex flex-col justify-center text-lg gap-y-4 p-5'>
            <div className='text-2xl sm:text-4xl text-orange-300 text-center sm:text-left font-bold'>Why am I doing this?</div>
            <div>Because my goal here is to get you started.</div>
            <div>I want you to be able to manifest wealth and abundance even if you start out small… regardless of what career path you are on.</div>
            <div className='text-orange-300'>There's just one catch…</div>
            <div className='text-orange-500'>You only have a few hours left to claim this.</div>
            <div>After this, the doors will close.</div>
            <div>So, act now or miss out.</div>
            <div className='text-center sm:text-left'><Link to={'/contact?selftransform'} ><button className='rounded-lg bg-blue-600 text-white px-4 py-2 text-2xl hover:scale-110 transition duration-300 ease-in'>Register Now</button></Link></div>
            <div>Hope to see you inside!</div>
        </div>
        </div>
        
        </div>
  )
}

export default SelfTransform