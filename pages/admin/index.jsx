import React, { useEffect, useState } from 'react'
import AddPost from '../components/AddPost'
import Layout from '../components/Layout';
import axios from 'axios';
import { format } from "date-fns";
import Title from '../components/Title';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="新刃(粉砕、スリッター、裁断、その他の刃物)の販売から、再研磨なら岡山に拠点を置く長町研磨にお任せ！高品質、迅速に対応いたします。" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>(株)長町研磨-admin-</title>
      </Head>
      <div className='p-8 bg-white'>
        <AddPost />
        <Title subTitle="News" />

        <div className='grid grid-cols-1 gap-8 mx-auto bg-white max-w-[1100px]'>
          {posts.map(post => (
            <div key={post._id} className='grid grid-cols border-b'>
              <h2 className='text-gray-600 text-lg font-bold'>{post.title}</h2>
              <div className='pl-1 text-gray-500 text-lg' dangerouslySetInnerHTML={{ __html: post.desc }} />
              <p className='text-gray-500 text-sm ml-auto'>掲載日：{format(new Date(post.updatedAt), 'yyyy年M月dd日')}</p>
              <div className='ml-auto'>
                <Link href={`/admin/edit/${post._id}`} className='mx-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded'>編集</Link>
                <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-3 border border-red-500 hover:border-transparent rounded' type='button' onClick={() => handleDelete(post._id)}>削除</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
