import Image from 'next/image'

import { whatIs, whyUseTitle } from '@/utils/constants'

export default function Second() {
  return (
    <div className='w-screen h-screen'>
      <div className='whatIsContainer'>
        <div className='mr-12'>
          <h1 className='text-title mb-4'>{whatIs.title}</h1>
          <p>{whatIs.text}</p>
        </div>
        <Image src={'/images/hotel.jpg'} alt='flight' width={400} height={400} />
      </div>
      <div className='whyUseTitle'>
        <h1 className='text-background'>{whyUseTitle}</h1>
      </div>
    </div>
  )
}
