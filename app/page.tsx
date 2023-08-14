import { First, Fourth, Second, Third } from '@/components/home'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </main>
  )
}
