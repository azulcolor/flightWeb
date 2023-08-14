import { IContact } from '@/types/home'

export default function Contact({ children, contact, contact2 }: IContact) {
  return (
    <div className='flex gap-7 items-center'>
      {children}
      <div>
        <h3 className='text-base lg:text-lg text-orange-300'>Daniel Arroyo Schoener</h3>
        <p className='text-background pb-2'>{contact}</p>
        <h3 className='text-base lg:text-lg text-orange-300'>Rosy Aragón</h3>
        <p className='text-background'>{contact2}</p>
      </div>
    </div>
  )
}
