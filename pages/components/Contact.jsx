import Title from "./Title";
import Contact_Form from "./Contact_Form";
import Contact_Line from "./Contact_Line";

const Contact = () => {
  
  return (
    <section id='contact' className='my-7 p-6'>
      <div className='p-8 bg-white'>
        <Title subTitle="Contact" />
        <h1 data-aos='fade-down' className='text-emerald-600 text-center font-bold text-[35px] mb-5'>お問い合わせ</h1>
        < Contact_Form />
        <Contact_Line />
      </div>
    </section>
  )
}

export default Contact