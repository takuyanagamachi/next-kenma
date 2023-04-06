import React from 'react'
import Image from 'next/image'
import { dansais } from '../../data'


const Dannsais = () => {
  return (
    <>
    {dansais.map(({id, image, title}) => ( 
      <div key={id} className='relative w-[360px] h-[200px]' data-aos="zoom-in">
        <Image src={image} width={350} height={500} className="rounded" />
        <p className='bg-emerald-400 rounded m-2 p-1 absolute bottom-0 font-medium text-white md:text-lg'>
          {title}
        </p> 
      </div>
    ))}
    </>
  )
}

export default Dannsais