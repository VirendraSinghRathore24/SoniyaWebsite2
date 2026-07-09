import React, { useState } from 'react';
import "./Page1.css"

function Faq({isExpanded, setExpanded, isLastFaq, title, desc}) {

  return (
    <div className='googlefontpoppins'>
     <div className='flex flex-col mt-3 mb-6 text-base text-start'>
              <div className='flex justify-between cursor-pointer' onClick={() => setExpanded(!isExpanded)}>
              <div className='text-lg font-bold'>{title}</div>
              {
                isExpanded ? (<img src="../../images/minus-sign.svg" alt="Logo" width={28} loading='lazy'/>) 
                : (<img src="../../images/plus-sign1.svg" alt="Logo" width={28} loading='lazy'/>)
              }
              </div>
             {
              isExpanded ? (<div className='mr-8 mt-2 text-md'>{desc}</div>) : (<div></div>)
             }
            </div>
            {
              !isLastFaq ? (<div className='border-b border-brColor'></div>) : (<div></div>)
            }
            
    </div>
    
  )
}
export default Faq