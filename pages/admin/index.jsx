import React, { useEffect, useState } from 'react'
import AddPost from '../components/AddPost'
import Layout from '../components/Layout';
import axios from 'axios';
import EditPost from './edit/[...id]';
import { format } from "date-fns";
import Title from '../components/Title';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Index() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('/api/post').then(response => {
      setPosts(response.data)
    });
  }, []);

  function goBack() {
    router.push('/');
  }

  async function handleDelete(id) {
    await axios.delete('/api/post?id=' + id);
    goBack();
  }

  return (
    <Layout>
      <div className='p-8 bg-white'>
        <AddPost />
        <Title subTitle="News" />

        <div className='grid grid-cols-1 gap-8 bg-white max-w-[1100px]'>
          {posts.map(post => (
            <div key={post._id} className='grid grid-cols border-b'>
              <h2 className='text-gray-600 text-lg font-bold'>{post.title}</h2>
              <div className='pl-1 text-gray-500 text-lg' dangerouslySetInnerHTML={{ __html: post.desc }} />
              <p className='text-gray-500 text-sm ml-auto'>掲載日：{format(new Date(post.updatedAt), 'yyyy年M月dd日')}</p>
              <Link href={`/admin/edit/${post._id}`}>編集</Link>
              <button type='button' onClick={() => handleDelete(post._id)}>削除</button>
            </div>
          ))}

        </div>
      </div>
    </Layout>
  )
}
