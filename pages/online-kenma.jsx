import Title from './components/Title';
import Image from 'next/image';
import Head from 'next/head'
import Layout from './components/Layout';
import Logo from '../public/naga_ken_logo.jpeg';
import { AiOutlineArrowDown } from 'react-icons/ai'
import SE from '../public/images/slitter_example.jpg';
import FE from '../public/images/funsai_example.jpg';
import NagareFunsai from '../public/images/NagareFunsai.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BsBoxSeam } from 'react-icons/bs'
import { FaYenSign } from 'react-icons/fa'
import { LiaFileInvoiceSolid, LiaToolsSolid } from 'react-icons/lia'
import Contact from './components/Contact';
import { Link as Scroll } from 'react-scroll';
import Modal from './components/Modal';
import { useState } from 'react';


export default function Online() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal)
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="新刃(粉砕、スリッター、裁断、その他の刃物)の販売から、再研磨なら岡山に拠点を置く長町研磨にお任せ！高品質、迅速に対応いたします。" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>-オンライン研磨-(株)長町研磨-Official WebSite-</title>
      </Head>
      {showModal ? (<Modal setShowModal={setShowModal} />) : null}
      <div id="online" data-aos="zoom-in" className='p-5 bg-white'>
        <Title subTitle="オンライン研磨の流れ" />
        <div className="container grid lg:grid-cols-7 gap-5 mx-auto">

          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow">
            <Image src={NagareFunsai} alt='長町研磨のロゴ' className='mx-auto w-full rounded-sm' />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Step 1</h5>
              <p className="mb-3 text-lg font-normal text-gray-500">研磨品の寸法を、
                <Scroll className='font-bold text-green-500 duration-300 cursor-pointer' to="contact" smooth={true} offset={-50}>
                  お問い合わせ
                </Scroll>
                もしくは、ラインで送ります。
              </p>
            </div>
          </div>

          <span className='hidden lg:inline-block align-middle lg:col-span-1 m-auto col-span-1'><AiOutlineArrowRight size={50} color={'#969696'} /></span>
          <span className='lg:hidden grid place-items-center col-span-1'><AiOutlineArrowDown size={50} color={'#969696'} /></span>

          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow">
            <span><LiaFileInvoiceSolid className='mx-auto pt-2' size={100} color={'#969696'} /></span>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Step 2</h5>
              <p className="mb-3 text-lg font-normal text-gray-500">研磨品の寸法を確認後、御見積書をお送ります。</p>
            </div>
          </div>

          <span className='lg:hidden grid place-items-center col-span-1'><AiOutlineArrowDown size={50} color={'#969696'} /></span>

          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow">

            <span><LiaShippingFastSolid className='mx-auto' size={100} color={'#969696'} /></span>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Step 3</h5>
              <p className="mb-3 text-lg font-normal text-gray-500">
                御見積書確認後、よろしければ研磨品を<span className='font-bold text-red-600'>元払い</span>で発送してください。
                <div class="rounded-lg bg-green-100 text-green-700 px-2 py-1">
                  <p class="font-bold">送り先住所<br />　〒700-0943　岡山県岡山市南区新福1-8-4　長町研磨（第一工場）</p>
                </div>
              </p>
            </div>
          </div>

          <span className='hidden lg:inline-block align-middle lg:col-span-1 m-auto col-span-1'><AiOutlineArrowRight size={50} color={'#969696'} /></span>
          <span className='lg:hidden grid place-items-center col-span-1'><AiOutlineArrowDown size={50} color={'#969696'} /></span>

          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow">
            <span><LiaToolsSolid className='mx-auto pt-2' size={100} color={'#969696'} /></span>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Step 4</h5>
              <p className="mb-3 text-lg font-normal text-gray-500">到着後、確認して作業開始。</p>
            </div>
          </div>

          <span className='lg:hidden grid place-items-center col-span-1'><AiOutlineArrowDown size={50} color={'#969696'} /></span>
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow">

            <span><FaYenSign className='mx-auto' size={100} color={'#969696'} /></span>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Step 5</h5>
              <p className="mb-3 text-lg font-normal text-gray-500">作業完了後、メールで納品書、請求書を送ります。<br />
                <button type="button" onClick={() => setShowModal(true)}>
                  <p className="font-bold text-green-500 cursor-pointer">入金（取り扱い口座一覧）</p>
                </button>
                をお願いします。</p>
            </div>
          </div>

          <span className='hidden lg:inline-block align-middle lg:col-span-1 m-auto col-span-1'><AiOutlineArrowRight size={50} color={'#969696'} /></span>
          <span className='lg:hidden grid place-items-center col-span-1'><AiOutlineArrowDown size={50} color={'#969696'} /></span>

          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow">
            <span><BsBoxSeam className='mx-auto pt-2' size={100} color={'#969696'} /></span>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Step 6</h5>
              <p className="mb-3 text-lg font-normal text-gray-500">入金確認後、<span className='font-bold text-red-600'>元払い</span>で発送します。</p>
            </div>
          </div>


        </div>

        <div className="mx-auto w-11/12 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-5 rounded-lg">
          <p className="font-bold text-xl">注意事項</p>
          <ul className='p-2 text-lg'>
            <li>
              ・ 送料は、<span className='font-bold'>お互い元払い</span>になります。
            </li>
            <li>
              ・ 刃先に大きな破損がある場合、価格が変動する事があります。
            </li>
          </ul>
        </div>
      </div>

      <div className='py-5 container mx-auto'>
        <Title subTitle="価格表" />
        <h1 id="slitter" data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-2 mt-[10px]'>
          スリッター刃
        </h1>

        <div data-aos="zoom-in" className='grid lg:grid-cols-3'>
          <div className="lg:col-span-2 mr-2 mb-2 lg:mb-0 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-lg text-gray-600 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    外径
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SKH & SDK
                  </th>
                  <th scope="col" className="px-6 py-3">
                    超硬
                  </th>
                  <th scope="col" className="px-6 py-3">
                    最少枚数
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    ~50Φ
                  </th>
                  <td className="px-6 py-4">
                    350円~
                  </td>
                  <td className="px-6 py-4">
                    600円~
                  </td>
                  <td className="px-6 py-4">
                    10枚~
                  </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    51Φ~100Φ
                  </th>
                  <td className="px-6 py-4">
                    600円~
                  </td>
                  <td className="px-6 py-4">
                    900円~
                  </td>
                  <td className="px-6 py-4">
                    8枚~
                  </td>
                </tr>

                <tr class="bg-white border-b hover:bg-gray-50">
                  <th scope="row" class="px-6 py-4 whitespace-nowrap">
                    101Φ~150Φ
                  </th>
                  <td class="px-6 py-4">
                    1000円~
                  </td>
                  <td class="px-6 py-4">
                    1600円~
                  </td>
                  <td class="px-6 py-4">
                    6枚~
                  </td>
                </tr>

                <tr class="bg-white border-b hover:bg-gray-50">
                  <th scope="row" class="px-6 py-4 whitespace-nowrap">
                    151Φ~200Φ
                  </th>
                  <td class="px-6 py-4">
                    1400円~
                  </td>
                  <td class="px-6 py-4">
                    2300円~
                  </td>
                  <td class="px-6 py-4">
                    5枚~
                  </td>
                </tr>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <th scope="row" class="px-6 py-4 whitespace-nowrap">
                    201Φ~250Φ
                  </th>
                  <td class="px-6 py-4">
                    1900円~
                  </td>
                  <td class="px-6 py-4">
                    2900円~
                  </td>
                  <td class="px-6 py-4">
                    5枚~
                  </td>
                </tr>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <th scope="row" class="px-6 py-4 whitespace-nowrap">
                    251Φ~300Φ
                  </th>
                  <td class="px-6 py-4">
                    2500円~
                  </td>
                  <td class="px-6 py-4">
                    3800円~
                  </td>
                  <td class="px-6 py-4">
                    5枚~
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Image src={SE} alt='スリッター刃の寸法' className='w-100 h-64 mx-auto rounded' />
          </div>
        </div>


        <h1 id="funsai" data-aos='fade-down' className='mt-5 text-emerald-600 text-center font-bold text-[35px] mb-2 mt-[60px]'>
          粉砕,チッパー,製袋
        </h1>
        <div data-aos="zoom-in" className='grid lg:grid-cols-3'>

          <div className="lg:col-span-2 mr-2 mb-2 lg:mb-0 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-lg text-gray-600 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    全長
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SKH & SKD
                  </th>
                  <th scope="col" className="px-6 py-3">
                    超硬
                  </th>
                  <th scope="col" className="px-6 py-3">
                    最低枚数
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    ~100㎜
                  </th>
                  <td className="px-6 py-4">
                    600円~
                  </td>
                  <td className="px-6 py-4">
                    1000円~
                  </td>
                  <td className="px-6 py-4">
                    5枚~
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    101㎜~200㎜
                  </th>
                  <td className="px-6 py-4">
                    1000円~
                  </td>
                  <td className="px-6 py-4">
                    1500円~
                  </td>
                  <td className="px-6 py-4">
                    5枚~
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    201㎜~300㎜
                  </th>
                  <td className="px-6 py-4">
                    1500円~
                  </td>
                  <td className="px-6 py-4">
                    2500円~
                  </td>
                  <td className="px-6 py-4">
                    4枚~
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    301㎜~400㎜
                  </th>
                  <td className="px-6 py-4">
                    2500円~
                  </td>
                  <td className="px-6 py-4">
                    3500円~
                  </td>
                  <td className="px-6 py-4">
                    2枚~
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    401㎜~500㎜
                  </th>
                  <td className="px-6 py-4">
                    3500円~
                  </td>
                  <td className="px-6 py-4">
                    4500円~
                  </td>
                  <td className="px-6 py-4">
                    2枚~
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap">
                    501㎜~600㎜
                  </th>
                  <td className="px-6 py-4">
                    4500円~
                  </td>
                  <td className="px-6 py-4">
                    5500円~
                  </td>
                  <td className="px-6 py-4">
                    2枚~
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Image src={FE} alt='粉砕刃の寸法' className='w-100 h-64 mx-auto rounded' />
          </div>
        </div>
        <Contact />
      </div>
    </Layout>
  )
}

// 西尾総合印刷 ミシン刃研磨 220
// 　　　スリッター上刃研磨  250

// チッパー上下刃両刃ハイス研磨184  2,700

// チッパーナイフハイス研磨200 1,500

// チッパーナイフ超硬研磨300  3,000
// チッパーナイフ超硬研磨300  3,500

// チッパーナイフ超硬研磨370  3,000
// チッパーナイフハイス研磨370  2,500
// チッパーナイフ超硬研磨370 4,000
