import { IInfo } from '@/types/home'
import Image from 'next/image'

export default function AddOnCard({ title, text, image }: IInfo) {
  return (
    <div className='flex bg-blue-50 w-3/4 overflow-hidden'>
      <Image
        className=' w-1/2 h-72 transform hover:scale-110 transition-transform'
        src={`/images/${image}.jpg`}
        alt={title}
        width={1000}
        height={1000}
      />
      <div className=' py-4 px-14'>
        <h2 className='text-title text-5xl font-bold mb-4'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
