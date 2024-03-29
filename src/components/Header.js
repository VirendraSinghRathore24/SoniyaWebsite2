import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [open, setOpen] = useState(true);

  async function clickHandlerBars()
  {
     setOpen(false);
  }

  async function clickHandlerCross()
  {
    setOpen(true);
  }
 
  async function handleOnClick(e)
  {
    setOpen(true);
  }

  return (
    <header>
    {/* <div className="flex top-0 w-full px-5  justify-center items-center
            color">
            <marquee>
              <div className='text-white text-center p-4'>Upcoming Session on 15 March - <Link to={'/contact'} className='underline'>Register Now</Link></div>
              </marquee>
            </div> */}
        <div className="flex top-0 justify-between items-center  mx-auto w-full h-16 px-5
            bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
            <Link to="/">
           <div className="flex">
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-stone-800">Soniya Pachauri</div>
           </div>
        </Link>

       <nav className="flex max-w-maxScreen">
              <ul className="hidden items-center gap-x-2 md:flex">
                <li><NavLink className="py-5 link flase text-lg leading-5 relative group flex gap-1 items-center" end to="/">
                <span>Home</span>
                </NavLink></li>
                <li><NavLink className="py-5 link flase text-lg leading-5 relative group flex gap-1 items-center" to="/sessions">
                <span>Sessions</span>
                </NavLink></li>
                <li><NavLink className="py-5 link flase text-lg leading-5 relative group flex gap-1 items-center" to="/aboutus">
                <span>About</span>
                </NavLink></li>
                {/* <li><NavLink className="py-5 link flase text-lg leading-5 relative group flex gap-1 items-center" to="/testimonials">
                <span>Testimonials</span>
                </NavLink></li> */}
                <li><NavLink className="py-5 link flase text-lg leading-5 relative group flex gap-1 items-center" to="/contact">
                <span>Contact</span>
                </NavLink></li>        
              </ul>
              <div className="flex items-center md:hidden">
              {
                open ? (
                <div className="relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] md:hidden" onClick={clickHandlerBars}>
                <span className="w-10 py-[2px] rounded-md bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md bg-stone-600"></span>
                </div>) : (
                <div className="relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] md:hidden" onClick={clickHandlerCross}>
                <span className="w-10 py-[2px] rounded-md absolute top-1/2 rotate-45 bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md absolute top-1/2 opacity-0 bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md absolute top-1/2 -rotate-45 bg-stone-600"></span>
                </div>
                )
              }
              </div>
            </nav>
            </div>
            {
          !open ? (
       <div className="absolute left-0 right-0 z-[9998] backdrop-blur-3xl pt-[10vh] pb-[8vh] md:hidden pointer-events-auto 
       visible">
       
        <ul className="flex flex-col items-center gap-y-6 md:hidden select-none">
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/" onClick={handleOnClick}>Home</NavLink></li>
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/sessions" onClick={handleOnClick}>Sessions</NavLink></li>
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/aboutus" onClick={handleOnClick}>About</NavLink></li>
        <li className="text-center"><NavLink class="text-xl leading-5" to="/#testimonials" onClick={handleOnClick}>Testimonials</NavLink></li>
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/contact" onClick={handleOnClick}>Contact</NavLink></li>
        </ul>
       </div>
          ): (<div></div>)
      }
       </header>     
  )
}

export default Header