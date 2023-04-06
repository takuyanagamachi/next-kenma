import Title from './Title';
import Image from 'next/image';
import Item1 from '../../public/images/item1.jpg'


export default function About() {
  return (
    <section id="about" className='p-3 my-7'>
      <div className='p-8 bg-white'>
        <Title subTitle="About us" />
      <div className='grid md:grid-cols-2 gap-3 bg-white'>
      <Image src={Item1} className='rounded' data-aos='fade-right' />
      <div className='w-[75%] md:w-[85%] mx-auto my-auto md:text-left' data-aos='fade-left'>
        <h1 className='text-emerald-600 font-bold md:text-[35px] text-[29px]'>長町研磨について</h1>
        <p className='text-gray-500 md:p-3 mx-auto my-auto text-xl leading-8'>
        私たち株式会社長町研磨は、1960年に岡山県岡山市に創業して以来、主に印刷関連の機械や工業用刃物
        （裁断、チッパー、ホットカット、粉砕刃、スリッター etc...）
          の研削をメインに事業を行っています。
        </p>
        </div>
        </div>
      </div>
    </section>
  )
}