import { WhyUse } from './components'
import { whyUse } from '@/utils/constants'

export default function Third() {
  return (
    <div className='h-auto w-screen px-5 gap-12 py-16 grid lg:grid-cols-3 lg:px-36 lg:gap-24 lg:my-32'>
      {whyUse.map((info) => (
        <WhyUse key={info.title} {...info} />
      ))}
    </div>
  )
}
