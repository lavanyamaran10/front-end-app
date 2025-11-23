import React from 'react'
import bagIcon from "../assets/bag.png"
const BagButton = () => {
  return (
    <div className='w-[64px] h-[64px] flex justify-center items-center border-2 border-white rounded-2xl'>
      <img src={bagIcon} className='w-[34px] h-[34px]' />
    </div>
  )
}

export default BagButton
