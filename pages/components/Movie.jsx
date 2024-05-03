import Title from './Title';
import Image from 'next/image';
import { movie } from '../../data'
import { TikTokEmbed, YouTubeEmbed } from 'react-social-media-embed';


export default function Movie() {
  return (
    <section id='movie' className='my-7 p-6'>
      <div className='py-2 bg-white'>
        <Title subTitle="Movie" />
        <h1 data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-5'>動画</h1>

        <div className='container mx-auto p-3 grid md:grid-cols-2 lg:grid-cols-3 bg-white rounded-xl'>
          {movie.map(({ id, url }) => (
            <div key={id} style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
              <TikTokEmbed url={url} className='' width={325} height={560} />
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}