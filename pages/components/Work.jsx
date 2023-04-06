import Title from './Title';
import Image from 'next/image';
import HeroImg from '../../public/images/hero.png'
import Item3 from '../../public/images/programing.jpg'

export default function Work() {
  return (
    <section id="work" className='my-7 p-5'>
    <div className='my-6'>
      <Title subTitle="Business"  />
    </div>
    <h1 data-aos='fade-down' className='text-emerald-600 font-bold text-[35px] text-center mb-5 mt-[-30px]'>事業内容</h1>
    <div className='grid md:grid-cols-2 text-center gap-3'>
        <h2 data-aos="zoom-in" className='w-[90%] md:w-[90%] text-emerald-600 font-bold text-[35px] mx-auto'>
          研削・機械販売事業
          <Image src={HeroImg} alt='刃物研削事業' className='rounded' />
        </h2>
        <h2 data-aos="zoom-in" data-aos-offset='300'
        data-aos-delay='500' className='w-[90%] md:w-[90%] text-emerald-600 font-bold text-[35px] mx-auto'>
          テクノロジー事業
          <Image src={Item3} alt='テクノロジー事業' className='rounded' />
        </h2>
      </div>
  </section>
  )
}