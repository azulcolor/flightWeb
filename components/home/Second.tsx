import Image from 'next/image'

import { whatIs, whyUseTitle } from '@/utils/constants'

export default function Second() {
  return (
    <div className='w-screen h-auto lg:h-screen' id='secondSection'>
      <div className='whatIsContainer'>
        <div className='lg:mr-12 mb-8 lg:mb-0 lg:w-[40vw]'>
          <h1 className='whatIsTitle'>{whatIs.title}</h1>
          <p className='text-center lg:text-left'>{whatIs.text}</p>
        </div>
        <Image src={'/images/hotel.jpg'} alt='flight' width={400} height={400} />
      </div>
      <div className='whyUseTitle'>
        <h1 className='text-background'>{whyUseTitle}</h1>
      </div>
    </div>
  )
}
