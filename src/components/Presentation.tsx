import imageAmy from '../assets/image-amy.jpg'

const Presentation = () => {
  return (
    <div className='mb-28 mt-28 flex w-full flex-col items-center justify-between sm:flex-row '>
      <div className='w-full sm:w-2/5 '>
        <img src={imageAmy} alt='Amy' className='w-full' />
      </div>

      <div className=' flex w-full flex-col max-sm:items-center sm:w-2/5'>
        <div className='text-center max-sm:mt-11  sm:text-start'>
          <h3 className='text-3xl font-bold text-black sm:text-4xl'>
            I’m Amy, and I’d love to work on your next project
          </h3>
        </div>
        <div className='mt-10 text-center sm:text-start'>
          <p className='text-lg font-medium text-[#7a746e]'>
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
        </div>

        <div className='mt-10 w-1/2  rounded-full bg-[#EA7564] p-3 text-center text-black'>
          <p className='text-white'>Free Consultation</p>
        </div>
      </div>
    </div>
  )
}

export default Presentation
