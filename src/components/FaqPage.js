import React, { useState } from 'react'
import Faq from './Faq'

function FaqPage() {
    const [isExpanded1, setExpanded1] = useState(false)
  const [isExpanded2, setExpanded2] = useState(false)
  const [isExpanded3, setExpanded3] = useState(false)
  const [isExpanded4, setExpanded4] = useState(false)

  return (
    <div>
        <div className='w-10/12 mx-auto py-8 flex flex-col gap-y-4 mt-10'>
            <div className='text-3xl font-extrabold googlefontpoppins flex justify-center text-center'>Frequently asked questions</div>
            <div className='border-b-2 border-stone-200 mt-8'></div>
              <Faq isExpanded={isExpanded1} setExpanded={setExpanded1} isLastFaq={false} title={"What is the difference between Affirmation and Visualization?"} desc={"Affirmation is creating positive statements in present tense where we are grateful and happy that our desires have come true or the emotions that we feel when we achieve our desire Visualization is living the desire in our mind so that our sub conscious begings to believe that the desires we are visualising are actually a reality."}/>
              <Faq isExpanded={isExpanded2} setExpanded={setExpanded2} isLastFaq={false} title={"Can we change our life by just writing?"} desc={"Currently we don't have any mobile application."}/>
              <Faq isExpanded={isExpanded3} setExpanded={setExpanded3} isLastFaq={false} title={"How to connect with you for healing?"} desc={"Yes we have recipe videos available on our youtube channel and link is available on footer."}/>
              <Faq isExpanded={isExpanded4} setExpanded={setExpanded4} isLastFaq={true} title={"What will be the outcome after healing?"} desc={"Yes, It is sufficient and If you have any further questions then please feel free to send us a message using Contact us option."}/>
          </div>
    </div>
  )
}

export default FaqPage