import React, { useState } from 'react'
import { useRouter } from "next/router";
import axios from "axios";

export default function AddPost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [goToHome, setGoToHome] = useState(false);

  async function handlePost(e) {
    e.preventDefault();
    const data = { title, desc };
    await axios.post('/api/post', data);
    setGoToHome(true);
  }
  if (goToHome) {
    router.push('/')
  }

  return (
    <form onSubmit={handlePost}>
      <label>タイトル</label>
      <input
        required
        type="text"
        placeholder='タイトル'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label>内容</label>
      <textarea
        required
        type="text"
        placeholder='内容'
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />

      {/* {
        editPost
          ? <>
            <ButtonSubmit value="update" />
            <button type='button' onClick={() => setEditPost()}>Cancel</button>
          </>
          : <ButtonSubmit value="Create" />
      } */}

      <button type='submit' className='btn-primary'>
        投稿する
      </button>
    </form>
  )
}
