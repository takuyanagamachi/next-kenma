import Head from 'next/head'
import Layout from './components/Layout';
import Slitters from './components/Slitters';
import Funsais from './components/Funsais';
import Others from './components/Others';
import Title from './components/Title';
import Dannsais from './components/Dannsais';

export default function Kenma() {
  return (
    
    <Layout>
      <Head>
      <title>-オンライン研磨-(株)長町研磨-Official WebSite-</title>
     </Head>

      <div className='py-5 bg-white' id="slitter">
        <Title subTitle="Slitter Knives" />
        <h1 data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-5'>
          スリッター刃
        </h1>
        <div className='section flex flex-wrap justify-evenly gap-y-5 mx-auto max-w-[1400px]'>
          <Slitters />
        </div>
       </div>

       <div className='py-5' id="funsai">
        <Title subTitle="Crushing Knives" />
        <h1 data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-5'>
          粉砕刃
        </h1>
        <div className='section flex flex-wrap justify-evenly gap-y-5 mx-auto max-w-[1400px]'>
          <Funsais />
        </div>
       </div>

       <div className='py-5 bg-white' id="dansai">
        <Title subTitle="Cutting Knives" />
        <h1 data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-5'>
          断裁刃
        </h1>
        <div className='section flex flex-wrap justify-evenly gap-y-5 mx-auto max-w-[1400px]'>
          <Dannsais />
        </div>
       </div>

       <div className='py-5' id="other">
        <Title subTitle="Other Knives" />
        <h1 data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-5'>
        その他刃物
        </h1>
        <div className='section flex flex-wrap justify-evenly gap-y-5 mx-auto max-w-[1400px]'>
          <Others />
        </div>
       </div>
    </Layout>
  )
}