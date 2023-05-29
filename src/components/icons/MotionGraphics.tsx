import React from 'react'

const MotionGraphics = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='128' height='64'>
      <g fill='none' fillRule='evenodd'>
        <circle
          cx='80'
          cy='16'
          r='14'
          stroke='#F39E9E'
          strokeWidth='4'
        ></circle>
        <circle
          cx='48'
          cy='16'
          r='14'
          stroke='#F39E9E'
          strokeOpacity='0.5'
          strokeWidth='4'
        ></circle>
        <circle
          cx='16'
          cy='16'
          r='14'
          stroke='#F39E9E'
          strokeOpacity='0.25'
          strokeWidth='4'
        ></circle>
        <circle
          cx='112'
          cy='16'
          r='14'
          stroke='#FFF7F0'
          strokeWidth='4'
        ></circle>
        <path fill='#F39E9E' d='M128 64L96 32v32z'></path>
        <rect
          width='64'
          height='32'
          x='32'
          y='32'
          fill='#F6A560'
          rx='16'
        ></rect>
        <path
          fill='#FFF7F0'
          d='M0 50v-4h8v4H0zm28 0v-4h8v4h-8zm28 0v-4h8v4h-8z'
        ></path>
      </g>
    </svg>
  )
}

export default MotionGraphics
