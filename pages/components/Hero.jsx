import Image from 'next/image'
import HeroImg from '../../public/images/hero.png'


export default function Hero() {
  return (
      <div className="relative w-full items-center flex justify-center mt-[-80px]">
        <Image src={HeroImg} alt='長町研磨のメイン動画' className='w-full' />
        <div className="absolute">
          <h1 className=" text-4xl text-white font-bold">Go next Stage</h1>
          <div className="mt-1 border-b-2"></div>
          <p>60年以上の経験と創意工夫で21世紀の刃物業界に穴を開ける！</p>
        </div>
     </div>
   
  )
}