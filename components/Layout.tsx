
import { Navbar, Footer } from './index'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div 
    className='
      bg-gray-100 font-sans leading-normal tracking-normal flex flex-col min-h-screen
    '
    >
      <Navbar />
        <main className='container mx-auto min-h-screen'>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout