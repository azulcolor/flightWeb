import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='headerContainer'>
      <Image src={'/images/desktopLogo.png'} alt='logo' width={150} height={100} />
      <nav>
        <Link href='/'>Inicio</Link>
        <Link href='/'>Miembros</Link>
        <Link href='/'>Populares</Link>
        <Link href='/'>Acerca de</Link>
      </nav>
    </header>
  )
}
