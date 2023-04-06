import Link from 'next/link'
import { useRouter } from 'next/router';
import { Link as Scroll } from 'react-scroll';

export default function Nav() {

const router = useRouter();
const path = router.pathname;
  return (
    <nav className='hidden md:flex'>
      <ul className='flex items-center ml-auto md:text-[22px]'>
        {path === "/" ?
          (<>
            <Scroll to="about" smooth={true} offset={-50}>
           <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>長町研磨について</li>
          </Scroll>
          <Scroll to="work" smooth={true} offset={-50}>
            <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>事業内容</li>
          </Scroll>
          <Scroll to="company" smooth={true} offset={-50}>
            <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>会社概要</li>
          </Scroll>
          <Scroll to="contact" smooth={true} offset={-50}>
            <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>お問い合わせ</li>
          </Scroll>
          <Link href='/kenma' 
            className='mr-5 text-white hover:text-green-300 duration-300 rounded border-2 px-2 hover:border-green-500 border-white'>
              研磨一覧
          </Link>
             </>
             ):(<>
          <Scroll to="slitter" smooth={true} offset={-50}>
              <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>スリッター刃</li>
            </Scroll>
            <Scroll to="funsai" smooth={true} offset={-50}>
              <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>粉砕/製袋刃</li>
            </Scroll>
            <Scroll to="dansai" smooth={true} offset={-50}>
              <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>断裁刃</li>
            </Scroll>
            <Scroll to="other" smooth={true} offset={-50}>
              <li className='mr-5 text-white hover:text-green-300 duration-300 cursor-pointer'>その他刃物</li>
            </Scroll>
            <Link href='/' 
              className='mr-5 text-white  hover:text-green-300 duration-300 rounded border-2 px-2 hover:border-green-500 border-white'>
              長町研磨について
            </Link>
             </>)
            } 
      </ul>
     </nav>
  )
}