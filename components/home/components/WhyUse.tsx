import { IInfo } from '@/types/home'
import Image from 'next/image'

export default function WhyUse({ image, title, text }: IInfo) {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={`/images/resources/${image}.png`}
        alt={title}
        width={150}
        height={150}
        className='transform hover:scale-110 transition-transform'
      />
      <h2 className='my-3 text-title text-xl lg:text-2xl font-semibold text-center'>{title}</h2>
      <p className='text-center'>{text}</p>
    </div>
  )
}
