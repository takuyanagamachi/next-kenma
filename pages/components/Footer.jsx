import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/naga_ken_logo.png';
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

export default function Header() {
  return (
    <footer className='w-full'>
      <div className='grid grid-1 md:grid-cols-3 items-center justify-center text-center text-[33px]'>
      <Link href='/'><Image src={Logo} width={60} alt='長町研磨のロゴ' className='mx-auto' /></Link>
        <Link href='/' className='text-gray-500 text-[22px] hover:text-green-300 duration-300'>研磨一覧</Link>
        <Link href='/home' className='text-gray-500 text-[22px] hover:text-green-300 duration-300'>長町研磨について</Link>
      </div>
      <hr className='mt-5' />
      <div className='flex justify-around w-[70%] mx-auto my-10 text-[33px]'>
          <Link href='/' className={styles.insta}><AiOutlineInstagram /></Link>
          <Link href='/' className={styles.twitter}><AiOutlineTwitter /></Link>
          <Link href='/' className=''><AiFillGithub /></Link>
        </div>
     <div>
     <p className='text-center'>&copy;1955 -{new Date().getFullYear()}  株式会社 長町研磨</p>
     </div>
     
    </footer>
  )
}