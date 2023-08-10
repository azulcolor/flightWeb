import { First, Second, Third } from '@/components/home'
import { Header } from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Image src={'/images/background.jpg'} alt='beach' width={1920} height={1080} className='absolute w-full h-full' />
      <Header />
      <First />
      <Second />
      <Third />
    </main>
  )
}
