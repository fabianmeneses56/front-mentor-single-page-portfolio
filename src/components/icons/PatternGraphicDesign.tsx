import React from 'react'

const PatternGraphicDesign = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='128'
      height='192'
      // viewBox='0 0 500 500'
    >
      <g fill='none' fillRule='evenodd'>
        <path fill='#552049' d='M0 0h64v128H0z'></path>
        <circle
          cx='32'
          cy='32'
          r='14'
          stroke='#FFF7F0'
          strokeWidth='4'
        ></circle>
        <g transform='translate(32 32)'>
          <rect width='64' height='32' x='32' fill='#F6A560' rx='16'></rect>
          <path fill='#61C4B7' d='M0 128l32 32v-32zm32-32l32 32V96z'></path>
          <circle
            cx='80'
            cy='16'
            r='14'
            stroke='#FFF7F0'
            strokeWidth='4'
          ></circle>
          <circle
            cx='80'
            cy='16'
            r='14'
            stroke='#FFF7F0'
            strokeWidth='4'
          ></circle>
        </g>
        <path fill='#030303' d='M64 14h4v4h-4zm4 0h4v4h-4zm24 0h4v4h-4z'></path>
        <path fill='#755CDE' d='M96 0l32 32V0z'></path>
        <path fill='#030303' d='M96 14h4v4h-4zm24 0h4v4h-4zm4 0h4v4h-4z'></path>
        <circle
          cx='80'
          cy='80'
          r='14'
          stroke='#030303'
          strokeWidth='4'
        ></circle>
        <path fill='#EB7565' d='M96 64h32v32H96z'></path>
        <path fill='#FFF7F0' d='M32 96l96 96V96z'></path>
        <g fill='#030303'>
          <path d='M0 128h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4zM0 142h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4zM0 156h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4z'></path>
        </g>
      </g>
    </svg>
  )
}

export default PatternGraphicDesign
