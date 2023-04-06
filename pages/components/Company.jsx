import Title from './Title';
import CompanyTable from './CompanyTable'
import styles from '@/styles/Company.module.css'


export default function Company() {
  return (
    <section id='company' className='my-7 p-6'>
      <div className='p-8 bg-white'>
        <Title subTitle="Company" />
        <h1 data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-5'>会社概要</h1>
        <div className='grid lg:grid-cols-2 gap-3'>
          <CompanyTable />
          <div data-aos="zoom-in" data-aos-offset='300'
        data-aos-delay='500' className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d474.12657566169065!2d133.93309676815673!3d34.6296626899694!3m2!1i1024!2i768!4f60!3m3!1m2!1s0x35540711802c1117%3A0xd6adf5bdadfd0aa!2zKOagqinplbfnlLrnoJTno6g!5e0!3m2!1sja!2sjp!4v1679400625358!5m2!1sja!2sjp"
           className={styles.iframe} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}