import { First, Fourth, Second, Third } from '@/components/home'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
    </main>
  )
}
