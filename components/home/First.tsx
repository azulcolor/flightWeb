import Image from 'next/image'

export default function First() {
  return (
    <div className='sloganContainer'>
      <div className='slogan'>
        <Image src={'/images/desktopLogo.png'} alt='logo' width={400} height={100} className='shadow-white	' />
        <h1>Bienvenido A tu mejor Opción</h1>
      </div>
    </div>
  )
}
