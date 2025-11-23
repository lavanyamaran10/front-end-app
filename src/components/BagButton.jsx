import React from 'react'
import bagIcon from "../assets/bag.png"
const BagButton = () => {
  return (
    <div className='w-[54px] h-[54px] 2xl:w-[64px] 2xl:h-[64px] flex justify-center items-center border-2 border-white rounded-2xl'>
      <img src={bagIcon} className='xl:w-[34px] xl:h-[34px] w-[25px] h-[25px]' />
    </div>
  )
}

export default BagButton
