import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className='flex justify-center items-center'>
        <div className='spinner'>
        </div>
        <h1 className='text-[24px] text-blue-500'>Please wait...</h1>
    </div>
  )
}

export default Spinner