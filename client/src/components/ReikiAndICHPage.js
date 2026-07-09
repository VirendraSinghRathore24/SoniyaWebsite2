import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function ReikiAndICHPage() {

    const location = useLocation();
    var index = location.pathname.lastIndexOf('/');
    const url = location.pathname.substring(index + 1);

    useEffect(() => {
        window.scroll(0,0);
      }, []);

  return (
    <div className='googlefontpoppins'>
        <p className='p-2'><strong><NavLink to="/">Home /</NavLink> </strong><strong><NavLink to="/sessions">Sessions</NavLink> </strong> / Reiki and Inner Child Healing</p>
        <div className='text-center p-4 text-3xl sm:text-4xl font-semibold text-blue-600'>Reiki and Inner Child Healing</div>
        <div className='w-9/12 mx-auto flex flex-wrap justify-between text-center sm:text-left'>
            <div className='mt-4'><img src='../../images/soniya22.png' loading='lazy' alt='profile' className='w-[300px] rounded-xl mt-10'/></div>
            <div className='w-full sm:w-7/12 mx-auto flex flex-col justify-center gap-y-14'>
                <div className='text-2xl sm:text-4xl  leading-10 mt-8'>Experience a permanent change in yourself in Just 30 days with the Most Powerful healing techniques, ‘<span className='text-red-400'> Reiki & Inner Child healing</span>‘</div>
                <div className='text-lg'>Take the first step to change the quality of your life. Hop on a journey of self-awareness and identify the roadblocks blocking your success. Identify the root cause of self-doubting nature, low self-confidence, weak personal boundaries, fears, and so much more.</div>
                <div className='text-center sm:text-left text-lg'><Link to={'/contact?reikiandich'}><button className='rounded-lg bg-blue-600 text-white px-4 py-2 hover:scale-110 transition duration-300 ease-in'>Register Now</button></Link></div>
            </div>
        </div>
        <div className='color mt-10'>
            <div className='flex flex-col items-center text-white gap-y-2 w-full sm:w-10/12 mx-auto p-8'>
              <div className='text-2xl sm:text-3xl font-semibold underline py-4 text-orange-300'>What makes this healing different from others?</div>
              <div className='text-lg sm:text-xl font-extrabold text-white googlefontpoppins'>❌ You are not asked to follow any complex manifestation, the law of attraction, or morning routines, unlike any other workshops.</div>
              <div className='text-lg sm:text-xl font-extrabold text-white googlefontpoppins'>✔️ You only need to attend the sessions LIVE and your problems will be taken care of by Coach Soniya Pachauri herself through her power healing!</div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center mt-10 p-4 text-center'>
            <div className='text-3xl text-blue-500'>Answer this question honestly. To Uncover Truths about you</div>
            <div className='flex flex-col gap-y-6 mt-10 text-lg'>
                <div>➡️ Do you get irritated when people don’t treat you well?</div>
                <div>➡️ Do you feel like you are often taken for granted?</div>
                <div>➡️ Do you see a repetitive set of fears stop you from achieving big in life?</div>
                <div>➡️ Do you feel like there are some unfulfilled desires from your childhood?</div>
            </div>
          </div>
          <div className='w-full sm:w-9/12 mx-auto border-2 flex flex-col items-center p-5 justify-center rounded-2xl text-center text-white bg-black mt-10 gap-y-6 text-xl'>
            <div>If you nod with every passing sentence,</div>
            <div>you must stick with me until the end.</div>
            <div>You’re the one who always sacrifices your interests just to please people around you.</div>
            <div>You always feel irritated when your efforts don’t get reciprocated.</div>
            <div>You’re scared of trusting people because of some childhood incident of yours.</div>
            <div>All this is because of a wounded child that wasn’t healed inside you.</div>
            <div>Your childhood traumas, past experiences, and tragic events have rooted some beliefs in you that limit you from coming out and enjoying life wholly.</div>
            <div>This is where I help you.</div>
            <div>With Reiki and Inner Child Healing, you experience a pattern of balancing and aligning your chakras which helps you unblock your problem areas.</div>
            <div>Once you’re healed from the inside, you start attracting what you actually desire, and things start happening in your favour.</div>
          </div>
          <div className='flex justify-center text-center sm:text-left text-lg my-8'><Link to={'/contact?reikiandich'}><button className='rounded-lg bg-lime-600 text-white px-4 py-2 hover:scale-110 transition duration-300 ease-in'>Heal me, Soniya Pachauri!</button></Link></div>
    </div>
   
  )
}

export default ReikiAndICHPage