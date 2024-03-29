import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function LifeCoaching() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);

      const myStyle = {
        backgroundImage: "url(../../images/lifecoach1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

  return (
    <div className='googlefontpoppins'>
        <p className='p-2 bg-stone-100'><strong><NavLink to="/">Home /</NavLink> </strong><strong><NavLink to="/sessions">Sessions</NavLink> </strong> / Life Coaching</p>
        <div style={myStyle} className='p-14'>
        <div className='text-center mb-10 text-3xl sm:text-4xl font-semibold text-white'>10 Weeks Program to become Life Coach</div>
        <div className='w-6/12 mx-auto flex flex-wrap gap-y-4 justify-evenly mb-4 p-4'>
            <div className='border-2 rounded-full p-5 bg-pink-300 text-lg w-72 text-center'>Scientific logical system</div>
            <div className='border-2 rounded-full p-5 bg-pink-300 text-lg w-72 text-center'>100% proven method</div>
        </div>
        <div className='w-6/12 mx-auto flex flex-wrap gap-y-4 justify-evenly mb-4 p-4 '>
            <div className='border-2 rounded-full p-5 bg-pink-300 text-lg w-72 text-center'>
                <div className='mt-3'>
                    Action oriented
                </div>
            </div>
            <div className='border-2 rounded-full p-5 bg-pink-300 text-lg w-72 text-center'>10+ Powerful exercises based on Neuroscience</div>
        </div>
        <div className='w-6/12 mx-auto flex flex-wrap gap-y-4 justify-evenly mb-4 p-4'>
            <div className='border-2 rounded-full p-5 bg-pink-300 text-lg w-72 text-center'>
                <div className='mt-3'>Result oriented</div>
            </div>
            <div className='border-2 rounded-full p-5 bg-pink-300 text-lg w-72 text-center'>Decision Making tool and Self Coaching Model</div>
        </div>
        </div>
        <div className='mb-10 '>
            <div className='w-9/12 mx-auto mt-4 text-lg sm:text-xl'>Focussed on Action plan and outcomes, vision board and success blueprint.</div>
            <div className='w-9/12 mx-auto mt-4 text-lg sm:text-xl'>Peak a boo into the Self Transformation Program as Life Coach...</div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-2'>
                   <div className='p-2 text-center border-2 rounded-lg bg-teal-400'>Week 1</div>
                </div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>Personality Assessment: Understanding different states of mind that you operate in.</div>
            </div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-2 border-2 rounded-lg bg-teal-400'>Week 2-3</div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>Know your values and their significance.</div>
            </div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-2'>
                    <div className='p-2 text-center border-2 rounded-lg bg-teal-400'>Week 4</div>
                </div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>Identifying your negative thoughts and healing them</div>
            </div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-2'>
                    <div className='p-2 text-center border-2 rounded-lg bg-teal-400'>Week 5</div>
                </div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>Replacing our negative thoughts with powerful customised positive thoughts</div>
            </div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-4'>
                    <div className='p-2 text-center border-2 rounded-lg bg-teal-400'>Week 6-7</div>
                </div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>Action plan for top 3 goals with clear steps. Self Coaching Model and Decision Making Template</div>
            </div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-2 border-2 rounded-lg bg-teal-400'>Week 8</div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>How to deal with negativity?</div>
            </div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-2 border-2 rounded-lg bg-teal-400'>Week 9</div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>Powerful Vision Board</div>
            </div>
            <div className='w-9/12 mx-auto flex flex-wrap justify-evenly bg-red-200 p-4 rounded-lg mt-4'>
                <div className='p-2 text-center mt-2 border-2 rounded-lg bg-teal-400'>Week 10</div>
                <div className='p-2 w-96 mt-2 text-center border-2 rounded-lg bg-blue-300'>Success Roadmap Blueprint</div>
            </div>
        </div>
        <div className='w-10/12 sm:w-9/12 mx-auto flex flex-col justify-center text-lg gap-y-4 mt-10 mb-10'>
            <div className='text-2xl text-blue-500 text-center sm:text-left font-bold'>Why am I doing this?</div>
            <div>Because my goal here is to get you started.</div>
            <div>I want you to be able to manifest wealth and abundance even if you start out small… regardless of what career path you are on.</div>
            <div className='text-rose-500'>There's just one catch…</div>
            <div className='text-blue-500'>You only have a few hours left to claim this.</div>
            <div>After this, the doors will close.</div>
            <div>So, act now or miss out.</div>
            <div className='text-center sm:text-left'><Link to={'/contact?lifecoaching'}><button className='rounded-lg bg-blue-600 text-white px-4 py-2 hover:scale-110 transition duration-300 ease-in'>Register Now</button></Link></div>
            <div>Hope to see you inside!</div>
        </div>
       
        <div className='color mt-10'>
            <div className='flex flex-col items-center text-white gap-y-2 w-full sm:w-10/12 mx-auto p-8'>
              <div className='text-2xl sm:text-3xl font-semibold underline py-4 text-orange-300'>What makes this healing different from others?</div>
              <div className='text-lg sm:text-xl font-extrabold text-white googlefontpoppins'>❌ You are not asked to follow any complex manifestation, the law of attraction, or morning routines, unlike any other workshops.</div>
              <div className='text-lg sm:text-xl font-extrabold text-white googlefontpoppins'>✔️ You only need to attend the sessions LIVE and your problems will be taken care of by Coach Soniya Pachauri herself through her power healing!</div>
            </div>
          </div>
        
    </div>
  )
}

export default LifeCoaching