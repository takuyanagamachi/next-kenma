
export default function Modal({ setShowModal }) {

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-gray-700 mx-auto">
                お取り扱い口座一覧
              </h3>
              <button
                className="outline outline-gray-400 rounded-md"
                onClick={() => setShowModal(false)}
              >
                <span className="text-gray-400 text-4xl px-1 leading-6">
                  ×
                </span>
              </button>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <div className="flex flex-col mx-5">
                <div className="text-3xl font-bold text-center py-1">
                  <h1 className="text-gray-600">三井住友銀行</h1>
                </div>
                <p className="text-2xl py-1 text-gray-600">口座名：ｶ）ﾅｶﾞﾏﾁｹﾝﾏ</p>
                <p className="text-2xl py-1 text-gray-600">支店番号：651（岡山支店）</p>
                <p className="text-2xl py-1 text-gray-600">当座：2418873</p>
              </div>
              <div className="flex flex-col mx-5">
                <div className="text-3xl font-bold text-center py-1">
                  <h1 className="text-gray-600">中国銀行</h1>
                </div>
                <p className="text-2xl py-1 text-gray-600">口座名：ｶ）ﾅｶﾞﾏﾁｹﾝﾏ</p>
                <p className="text-2xl py-1 text-gray-600">支店番号：111（岡山南支店）</p>
                <p className="text-2xl py-1 text-gray-600">当座：12851</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
