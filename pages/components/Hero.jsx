import Image from 'next/image'
import HeroImg from '../../public/images/hero.png'


export default function Hero() {
  return (
      <div className="relative w-full items-center flex justify-center mt-[-80px]">
        <Image src={HeroImg} alt='長町研磨のメイン動画' 
        className="w-full brightness-50" />
     </div>
   
  )
}