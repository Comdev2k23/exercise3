import React from 'react'

const Header = () => {
  return (
    <>
     <div className="flex flex-col px-2 pt-4 justify-center">
    <img className='max-w-3xl w-4/5  self-center' src='/airbnb.jpg' />
   </div>
   <div className="flex flex-col justify-center">
    <h1 className='text-center font-poppins 
    text-2xl font-semibold pt-12'>Online Experiences</h1>
    <p className='text-center font-poppins 
    font-semibold text-gray-500'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
   </div>
    </>
  
  )
}

export default Header