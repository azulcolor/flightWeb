import { AddOnCard } from './components'
import { addOn } from '@/utils/constants'

export default function Fourth() {
  return (
    <>
      <div className='h-auto bg-secondary py-8 flex justify-center lg:py-0'>
        <h1 className='text-background text-center lg:p-10'>¿Qué es el programa ADD ON?</h1>
      </div>
      <div className='h-auto flex flex-col items-center pb-10 gap-14 lg:gap-20 lg:py-28'>
        {addOn.map((info) => {
          return <AddOnCard key={info.title} {...info} />
        })}
      </div>
    </>
  )
}
