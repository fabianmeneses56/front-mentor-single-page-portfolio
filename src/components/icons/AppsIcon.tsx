import React from 'react'

const AppsIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'>
      <g fill='none' fillRule='evenodd'>
        <g transform='translate(0 32)'>
          <rect width='64' height='32' fill='#552049' rx='16'></rect>
          <circle
            cx='48'
            cy='16'
            r='14'
            stroke='#FFF7F0'
            strokeWidth='4'
          ></circle>
        </g>
        <path fill='#030303' d='M0 14h4v4H0zm4 0h4v4H4zm24 0h4v4h-4z'></path>
        <path fill='#755CDE' d='M32 0l32 32V0z'></path>
        <path fill='#030303' d='M32 14h4v4h-4zm24 0h4v4h-4zm4 0h4v4h-4z'></path>
      </g>
    </svg>
  )
}

export default AppsIcon
