import { MdPermPhoneMsg, MdEmail } from 'react-icons/md'
import { Contact } from '.'

export default function Footer() {
  return (
    <div className='w-screen h-auto bg-gradient-to-b from-title to-blue-600 py-10'>
      <h1 className='w-full text-center text-background mb-12'>Contáctanos</h1>
      <div className='flex flex-col gap-16 w-full items-center justify-center lg:gap-48 lg:flex-row'>
        <Contact contact='+521 998 147 3618' contact2='+521 998 241 5533'>
          <MdPermPhoneMsg className='text-orange-300 text-8xl lg:text-9xl' />
        </Contact>
        <Contact contact='darroyo@vcmcapital.com' contact2='raragon@vcmcapital.com'>
          <MdEmail className='text-orange-300 text-8xl lg:text-9xl' />
        </Contact>
      </div>
    </div>
  )
}
