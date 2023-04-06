import '@/styles/globals.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(()=> {
    Aos.init({
      duration: 2000,
      delay: 400,
    });
  });
  return <Component {...pageProps} />
}
