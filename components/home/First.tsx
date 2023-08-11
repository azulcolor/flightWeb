import Image from 'next/image'
import { Scroll } from '../common'

export default function First() {
  return (
    <div className='flex'>
      <Image src={'/images/background4.jpg'} alt='beach' width={1920} height={1080} className='w-2/3 h-[92vh]' />
      <div className='sloganContainer'>
        <div className='slogan'>
          <h1 className='text-background'>Bienvenido a</h1>
          <h1 className=' text-orange-300'>FLIGHT ABSORBER</h1>
          {/* <Image src={'/images/desktopLogo.png'} alt='logo' width={400} height={100} className='shadow-white	' /> */}
          <Scroll />
        </div>
      </div>
    </div>
  )
}
