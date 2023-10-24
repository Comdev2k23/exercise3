import React from 'react'
import {storeData} from './Data'
import CardData from './CardData'

const Card = () => {
  return (
    <>
      <div className="flex flex-nowrap 
      overflow-x-auto  gap-5 
      py-8 ">
        {storeData.map((item, i) => (
          <CardData 
            key={i}
            item={item}
          />
        ))}
      </div>
    </>
  )
}

export default Card