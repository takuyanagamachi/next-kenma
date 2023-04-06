import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact_Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    emailjs.sendForm( serviceID,
                      templateID,
                      form.current,
                      publicKey )
      .then((result) => {
          console.log(result.text);
          toast.success("お問い合わせありがとうございます！返信まで少々お待ちください。");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <form data-aos="zoom-in" data-aos-offset='300'
      data-aos-delay='500' id="contact-form" role="form" ref={form} onSubmit={sendEmail}>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="mb-4">
          <label htmlFor="form_companyName" className="flex text-2xl text-gray-500">会社名 *</label>
          <input id="form_companyName" type="text" name="companyName" className="focus:outline-none w-[90%] pt-2 border-b-2 border-green-200" placeholder="株式会社 長町研磨" required="required" data-error="Firstname is required." />  
        </div>
        <div className="mb-4">
          <label htmlFor="form_name" className="flex text-2xl text-gray-500">お名前 *</label>
          <input id="form_name" type="text" name="name" className="focus:outline-none w-[90%] pt-2 border-b-2 border-green-200" placeholder="長町 太郎" required="required" data-error="Firstname is required." />  
        </div>
        <div className="mb-4">
          <label htmlFor="form_email" className="flex text-2xl text-gray-500">メールアドレス *</label>
          <input id="form_email" type="email" name="email" className="focus:outline-none w-[90%] pt-2 border-b-2 border-green-200" placeholder="example@gmail.com" required="required" data-error="Valid email is required." />    
        </div>
          <div className="form-group pb-3">
            <label htmlFor="form_need" className="flex text-2xl text-gray-500">お問い合わせの種類 *</label>
            <select id="form_need" name="need" className="focus:outline-none pt-2 border-b-2 border-green-200" required="required" data-error="Please specify your need.">
              <option selected disabled>選択してください</option>
              <option >スリッター刃について</option>
              <option >粉砕刃について</option>
              <option >断裁刃について</option>
              <option >その他</option>
            </select>     
          </div>
        </div>
          <div className="grid grid-cols-1">
            <div>
              <label htmlFor="form_message" className="text-2xl text-gray-500">お問い合わせ内容 *</label>
              <textarea
                id="form_message" 
                name="message" 
                className="p-3 resize-none mt-3 rounded focus:outline-none w-full border-2 border-green-200" 
                placeholder="お問い合わせ内容" 
                rows="8"
                required="required"
                data-error="Please, leave us a message.">
              </textarea>
            </div>
          <input type="submit" className="mt-3 py-3 rounded-full bg-green-200 text-emerald-600  hover:text-white hover:bg-green-500 hover:cursor-pointer duration-300" value="送信する" /> 
          </div>    
    </form>
  )
}

export default Contact_Form