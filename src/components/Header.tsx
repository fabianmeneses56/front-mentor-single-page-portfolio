import React from 'react'
import LogoIcon from './icons/LogoIcon'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className=' w-14 bg-black'>
        <LogoIcon />
      </div>
      <div className=' flex w-56 items-center justify-center rounded-full bg-black max-sm:h-14 max-sm:w-48 max-sm:font-extrabold '>
        <h2>Free Consultation</h2>
      </div>
    </div>
  )
}

export default Header
