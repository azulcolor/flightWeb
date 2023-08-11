'use client'

export default function Scroll() {
  const scroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const section = document.querySelector('#secondSection')
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <span className='scroll-btn mt-16' onClick={scroll}>
      <a>
        <span className='mouse'>
          <span></span>
        </span>
      </a>
      <p>scroll me</p>
    </span>
  )
}
