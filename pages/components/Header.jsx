import Link from 'next/link'
import Logo from '../../public/naga_ken_logo.jpeg';
import Image from 'next/image'
import {BiMenuAltRight} from 'react-icons/bi'
import Nav from './nav';

export default function Header({ setNavMobile }) {
  return (
    <header className='bg-black bg-opacity-50 sticky top-0 z-10'>
      <div className='container mx-auto p-3'>
        <div data-aos="fade-down" className='flex justify-between items-center w-[100%]'>
          <Link href='/'><Image src={Logo} alt='長町研磨のロゴ' className='w-14 h-14 rounded-full' /></Link>
          <Nav />
          <BiMenuAltRight onClick={() => setNavMobile(true)} 
          className='text-white md:hidden cursor-pointer text-[35px]' />
        </div>

      </div>
    </header>
  )
}