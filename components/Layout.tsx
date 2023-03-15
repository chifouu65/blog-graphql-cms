
import { Navbar, Footer } from './index'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
        <main className='container mx-auto h-screen'>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout