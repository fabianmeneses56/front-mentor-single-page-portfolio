import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center  rounded-xl bg-black py-11 sm:p-14 lg:flex-row '>
      <div className='w-[90%] text-center lg:w-3/5 lg:text-left'>
        <h3 className='text-4xl font-semibold text-white'>
          Book a call with me
        </h3>
        <h3 className='mt-4 text-lg font-semibold text-white max-sm:mt-6'>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </h3>
      </div>
      <div className='flex w-4/5 items-center justify-center max-sm:mt-6 sm:w-2/5 sm:max-lg:mt-9'>
        <div className='flex h-12 w-60 items-center justify-center  rounded-full bg-[#eb7565] sm:h-16'>
          <h3 className=' text-lg font-semibold text-white'>
            Free Consultation
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
