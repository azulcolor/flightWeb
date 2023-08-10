import { WhyUse } from '.'
import { whyUse } from '@/utils/constants'

export default function Third() {
  return (
    <div className='h-auto w-screen grid grid-cols-3 pt-12 px-36 gap-24 mb-12'>
      {whyUse.map((info) => (
        <WhyUse key={info.title} {...info} />
      ))}
    </div>
  )
}
