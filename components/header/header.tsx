import Image from 'next/image'
import { Nav } from '.'

export default function Header() {
  return (
    <header className='headerContainer'>
      <Image src={'/images/logos/desktopLogo.png'} alt='logo' width={150} height={100} className='hidden lg:block' />
      <Image src={'/images/logos/mobileLogo.png'} alt='logo' width={90} height={100} className='block lg:hidden' />
      <Nav />
    </header>
  )
}
