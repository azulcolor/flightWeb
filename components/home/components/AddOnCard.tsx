import { IInfo } from '@/types/home'
import Image from 'next/image'

export default function AddOnCard({ title, text, image }: IInfo) {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-6 lg:w-3/4 overflow-hidden'>
      <div className='w-full h-auto lg:col-span-2'>
        <Image
          className='object-cover h-60 lg:h-72 w-full lg:w-80 transform hover:scale-110 transition-transform'
          src={`/images/resources/${image}.jpg`}
          alt={title}
          width={1000}
          height={1000}
        />
      </div>

      <div className=' px-6 pt-8 pb-12 lg:py-4 lg:pr-14 lg:col-span-4'>
        <h2 className='text-title text-5xl font-bold mb-4'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
