import Header from './Header'
import Footer from './Footer'
import NavMobile from './NavMobile'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Content({ children }) {
  const [navMobile, setNavMobile] = useState(false);
  
  return (
    <>
    <Header setNavMobile={setNavMobile} navMobile={navMobile} />
     {/* モバイルメニュON OFF */}
     <div className={`${
        navMobile ? 'right-0 z-10' : '-right-full'
      } fixed top-0 bottom-0 w-48 transition-all`}>
     <NavMobile setNavMobile={setNavMobile} />
     </div>
     <div className='main bg-green-50'>
     <ToastContainer position="top-center" />
      { children }
     </div>
     <Footer />
    </>
  )
}