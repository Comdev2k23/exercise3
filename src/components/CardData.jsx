import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const CardData = ({item}) => {
  return (
    <>
    <div className=" flex flex-col px-5 ">
        <img className='w-68 h-66 object-cover border rounded-lg' src={item.src} />

    <div className="flex flex-wrap p-1">
        <AiFillStar className='inline-block text-red-500 h-6 mr-1' />
    <p className="font-bold">
            {item.ratings}
        </p>
        <p className="text-sm font-poppins text-gray-500">
            {item.span}
        </p>
    </div>
       
        <p className="text-sm font-poppins">
            {item.description}
        </p>
        <p className="font-poppins font-bold">
            From $ {item.price}
        </p>

    </div>
   </>
  )
}

export default CardData