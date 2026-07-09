import React from 'react'
import ProgramCard from './ProgramCard1'

function Sessions() {
  return (
    <div>
        <div className='text-3xl leading-12 mx-auto flex justify-center text-center w-10/12 text-blue-600 font-semibold mt-10 py-8'>Healing Sessions & Coaching</div>
        <div className='w-10/12 mx-auto flex flex-wrap justify-evenly gap-y-16 gap-x-4 mb-10 mt-8'>
          <ProgramCard url={'healing-self-transformation'} imageUrl={'../../images/img5.jpg'} title={"Healing and Self Transformation"}/>   
          <ProgramCard url={'life-coaching'} imageUrl={'../../images/img4.jpg'} title={"Life Coaching"}/>
          <ProgramCard url={'reiki-inner-child-healing'} imageUrl={'../../images/img7.jpg'} title={"Reiki and Inner Child Healing"}/>
        </div>
    </div>
  )
}

export default Sessions