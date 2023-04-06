import React from 'react'
import Image from 'next/image'
import Line from '../../public/line.png';
import {CgArrowRight} from "react-icons/cg"


const Contact_Line = () => {
  return (
    <div data-aos="zoom-in" data-aos-offset='300'
    data-aos-delay='500' className='flex justify-center items-center mt-3'>
      <p className='text-gray-500 text-md md:text-2xl'>Lineからお問い合わせ<CgArrowRight className='inline md:ml-3' /></p>
      <a href="https://lin.ee/WVbDfQJ" target='blank'>
        <Image src={Line} alt="友だち追加" className='w-20 h-20 cursor-pointer' />
      </a>
    </div>
  )
}

export default Contact_Line