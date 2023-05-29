import { useRef } from 'react'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

import imgSlider1 from '../assets/image-slide-1.jpg'
import imgSlider2 from '../assets/image-slide-2.jpg'
import imgSlider3 from '../assets/image-slide-3.jpg'
import imgSlider4 from '../assets/image-slide-4.jpg'
import imgSlider5 from '../assets/image-slide-5.jpg'

const images = [imgSlider1, imgSlider2, imgSlider3, imgSlider4, imgSlider5]

const Slider = () => {
  const focusInputRef = useRef<any>(window.screen.width / 2)

  const nextSlide = () => {
    focusInputRef.current.scrollLeft += window.screen.width / 4
  }

  const prevSlide = () => {
    focusInputRef.current.scrollLeft -= window.screen.width / 4
  }
  return (
    <div className='mb-24 w-full '>
      <h3 className='text-center text-4xl font-semibold text-black'>My Work</h3>

      <div
        ref={focusInputRef}
        className='mt-14 grid grid-flow-col gap-8 overflow-hidden overscroll-auto max-lg:overflow-scroll'
      >
        {images.map((slide, i) => (
          <article className='bg-black'>
            <img
              src={slide}
              alt='slide-1'
              className='w-[35rem] max-w-none max-lg:w-[22rem]'
            />
          </article>
        ))}
      </div>

      <div className='mt-5  hidden justify-center gap-8 lg:flex '>
        <button
          onClick={prevSlide}
          className='flex h-14 w-14 items-center justify-center rounded-full bg-black'
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className='flex h-14 w-14 items-center justify-center rounded-full bg-black'
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Slider
