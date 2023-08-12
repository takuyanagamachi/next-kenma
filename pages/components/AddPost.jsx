import React, { useState } from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import Quill from './Quill';

export default function AddPost({ _id, title: existingTitle, desc: existingDesc }) {
  const router = useRouter();
  const [title, setTitle] = useState(existingTitle || '');
  const [desc, setDesc] = useState(existingDesc || '');
  const [goToHome, setGoToHome] = useState(false);

  async function handlePost(e) {
    e.preventDefault();
    const data = { title, desc };
    if (_id) {
      await axios.put('/api/post', { ...data, _id });
    } else {
      await axios.post('/api/post', data);
    }
    setGoToHome(true);
  }
  if (goToHome) {
    router.push('/')
  }

  return (
    <form onSubmit={handlePost} className='max-w-[1100px] mx-auto'>
      <label className='block text-gray-700 text-lg font-bold mb-2'>タイトル</label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        required
        type="text"
        placeholder='タイトル'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label className='block text-gray-700 text-lg font-bold my-2'>内容</label>
      <Quill setDesc={setDesc} desc={desc} />

      {_id ?
        <button type='submit' className='my-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 border border-green-500 hover:border-transparent rounded'>
          編集する
        </button>
        :
        <button type='submit' className='my-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 border border-green-500 hover:border-transparent rounded'>
          投稿する
        </button>
      }
    </form>
  )
}
