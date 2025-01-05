import Confetti from 'react-confetti';
export default function Kenma() {
  return (
    <>
      {/* <Confetti className='w-full h-full' /> */}
      <div className='py-5'>
        <div className='text-center py-5' data-aos='fade-down'>
          <h1 className='text-emerald-400 font-bold text-[35px]'>おめでとうございます。<br />
            あなたは長町研磨のメールを発見しました！
          </h1>
        </div>
        <h1 data-aos='fade-up' className='text-gray-500 text-center font-bold text-[45px] p-5'>
          nagamachi.create.team@gmail.com
        </h1>
      </div >
    </>
  )
}
