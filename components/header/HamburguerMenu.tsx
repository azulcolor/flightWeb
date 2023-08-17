'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function HamburguerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  let menuRef = useRef<HTMLDivElement>(null)

  const switchMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const node = menuRef.current

    let handler = (e: { target: any }) => {
      if (!node?.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div className='hamburguer__menu' onClick={switchMenuState} ref={menuRef}>
      <div className='w-6 hamburguer__line' />
      <div className='w-4 hamburguer__line' />
      <div className='w-6 hamburguer__line' />
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} menu__mobile`}>
        <Link href='#'>¿Qué es?</Link>
        <Link href='#'>¿Por qué usarlo?</Link>
        <Link href='#'>ADD ON</Link>
        <Link href='#'>Contáctanos</Link>
      </div>
    </div>
  )
}
