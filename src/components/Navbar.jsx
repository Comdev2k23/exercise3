import React from 'react'
import {BiLogoAirbnb} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className="flex flex-wrap font-semibold text-2xl text-red-500 
     font-sans pl-6 py-3 shadow-md">
        <BiLogoAirbnb className='inline-block h-12 w-12 mr-1'/>
        <h2 className='font-poppins pt-2'>airbnb</h2>
    </div>
  )
}

export default Navbar