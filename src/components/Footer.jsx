import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear;

  return (
   <div className="flex flex-col font-poppins 
   text-center pt-12 font-semibold">
     &copy; {currentYear} 2023 Copyright Comdev All Rights Reserved
   </div>
  )
}

export default Footer