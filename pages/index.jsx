import Head from 'next/head'
import Hero from './components/Hero';
import About from './components/About';
import Layout from './components/Layout';
import Work from './components/Work';
import Company from './components/Company';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
  return (
    <Layout>
      <Head>
      <title>(株)長町研磨-Official WebSite-</title>
     </Head>
     <ToastContainer position="top-center" />
      <Hero />
      <div className='container mx-auto'>
        <About />
        <Work />
        <Company />
        <Contact />
     </div>
    </Layout>
  )
}