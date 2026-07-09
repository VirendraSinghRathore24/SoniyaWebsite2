import React from 'react'

function PageNotFound() {
  return (
    <div>
        <div className='flex flex-col justify-center gap-y-4 items-center h-screen'>
            <h1 className='text-7xl'>404</h1>
            <h1 className='text-4xl'>Page Not Found</h1>
            <p className='text-xl text-center p-4'>Sorry this page does not exists, try valid url</p>
        </div>
    </div>
  )
}

export default PageNotFound