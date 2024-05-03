import Head from 'next/head'
import Hero from './components/Hero';
import About from './components/About';
import Layout from './components/Layout';
import Work from './components/Work';
import Company from './components/Company';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import News from './components/News';
import Movie from './components/Movie';

export default function Index() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="新刃(粉砕、スリッター、裁断、その他の刃物)の販売から、再研磨なら岡山に拠点を置く長町研磨にお任せ！高品質、迅速に対応いたします。" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>(株)長町研磨-Official WebSite-</title>
      </Head>
      <ToastContainer position="top-center" />
      <Hero />
      <div className='container mx-auto'>
        <News />
        <About />
        <Work />
        <Movie />
        <Company />
        <Contact />
      </div>
    </Layout>
  )
}