import { AddOnCard } from './components'
import { addOn } from '@/utils/constants'

export default function Fourth() {
  return (
    <>
      <div className=' h-auto bg-secondary flex justify-center mb-14'>
        <h1 className='text-background p-10'>¿Qué es el programa ADD ON?</h1>
      </div>
      <div className='h-auto flex flex-col items-center gap-16'>
        {addOn.map((info) => {
          return <AddOnCard key={info.title} {...info} />
        })}
      </div>
    </>
  )
}
