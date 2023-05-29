import PatternGraphicDesign from './icons/PatternGraphicDesign'
import UiUxIcon from './icons/UiUxIcon'
import AppsIcon from './icons/AppsIcon'
import Photography from './icons/Photography'
import Ilustrations from './icons/Ilustrations'
import MotionGraphics from './icons/MotionGraphics'

const OptionsGrid = () => {
  return (
    <div className='mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      <div
        className=' relative flex h-64 w-full items-end rounded-lg bg-[#755CDE]  p-4 max-md:col-start-1 max-md:col-end-3 md:row-start-1 md:row-end-3 
      lg:row-start-1 lg:row-end-3'
      >
        <p className=' text-lg font-semibold'>Graphic Design</p>
        <div className='absolute right-4 top-4'>
          <PatternGraphicDesign />
        </div>
      </div>

      <div className=' relative flex w-full items-end rounded-lg bg-[#F5A560] p-4 max-md:h-36'>
        <p className='text-lg font-semibold'>UI/UX</p>
        <div className='absolute right-4 top-4'>
          <UiUxIcon />
        </div>
      </div>
      <div className='relative flex w-full items-end rounded-lg bg-[#F39D9E] p-4'>
        <p className='text-lg font-semibold'>Apps</p>
        <div className='absolute right-4 top-4'>
          <AppsIcon />
        </div>
      </div>
      <div
        className='relative flex w-full items-end rounded-lg bg-[#62C4B7] p-4 max-md:col-start-1 max-md:col-end-3 max-md:h-40 md:max-lg:col-start-1 md:max-lg:col-end-1 
      md:max-lg:row-start-3 md:max-lg:row-end-3 md:max-lg:h-48 '
      >
        <p className='text-lg font-semibold'>Photography</p>
        <div className='absolute right-4 top-4'>
          <Photography />
        </div>
      </div>
      <div className='relative row-end-auto flex  w-full items-end rounded-lg bg-[#EA7564] p-4 max-md:col-start-1  max-md:col-end-3 max-md:h-40 md:col-span-2'>
        <p className='text-lg font-semibold'>Illustrations</p>
        <div className='absolute right-4 top-4'>
          <Ilustrations />
        </div>
      </div>

      <div className='relative flex w-full items-end rounded-lg bg-[#55204A] p-4 max-md:col-start-1 max-md:col-end-3 max-md:h-40 md:max-lg:col-start-2 md:max-lg:col-end-4'>
        <p className='text-lg font-semibold'>Motion Graphics</p>
        <div className='absolute right-4 top-4'>
          <MotionGraphics />
        </div>
      </div>
    </div>
  )
}

export default OptionsGrid
