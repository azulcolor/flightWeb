import Image from 'next/image'
import { Scroll } from '../common'

export default function First() {
  return (
    <div className='flex'>
      <Image src={'/images/resources/beach.jpg'} alt='beach' width={1920} height={1080} className='w-2/3 h-[92vh] hidden lg:block' />
      <div className='sloganContainer'>
        <div className='slogan'>
          <h2 className='text-background'>Bienvenido a</h2>
          <h1 className=' text-orange-300'>FLIGHT ABSORBER</h1>
          <Scroll />
        </div>
      </div>
    </div>
  )
}
