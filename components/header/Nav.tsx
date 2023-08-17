import Link from 'next/link'
import { HamburguerMenu } from '.'
export default function Nav() {
  return (
    <>
      <nav>
        <Link href='/'>¿Qué es?</Link>
        <Link href='/'>¿Por qué usarlo?</Link>
        <Link href='/'>ADD ON</Link>
        <Link href='/'>Contáctanos</Link>
      </nav>
      <HamburguerMenu />
    </>
  )
}
