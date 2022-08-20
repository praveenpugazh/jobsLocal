import React from 'react'
import LandingImg from '../../assets/landing.png'
const Landing = () => {
  return (
    <div className='flex mx-10 m-auto flex-wrap'>
      <div className='img flex-1'>
        <img src={LandingImg} alt='' />
      </div>
      <div className='content flex flex-col flex-1 items-end pt-32 mr-16'>
        <h1 className='text-6xl m-2'>
          Get the <span className='text-green-500'>Right Job</span>
        </h1>
        <h1 className='text-6xl m-2'>
          You Deserve<span className='text-green-500'>.</span>
        </h1>
        <button class='bg-green-400 hover:bg-green-500 rounded-lg py-2 px-4 m-2 text-3xl'>
          Go to dashboard
        </button>
      </div>
    </div>
  )
}

export default Landing
