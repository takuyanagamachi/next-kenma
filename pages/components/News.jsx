import React, { useEffect, useState } from 'react'
import Title from './Title'
import axios from 'axios';
import { format } from "date-fns";

export default function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/post').then(response => {
      setPosts(response.data)
    });
  }, []);

  return (
    <section data-aos="zoom-in" id="news" className='p-3 my-7'>
      <div className='p-8 bg-white'>
        <Title subTitle="News" />

        <div className='grid grid-cols-1 gap-8 bg-white max-w-[1100px]'>
          {posts.map(post => (
            <div key={post._id} className='grid grid-cols border-b'>
              <h2 className='text-gray-600 text-lg font-bold'>{post.title}</h2>
              <p className='pl-1 text-gray-500 text-lg'>{post.desc}</p>
              <p className='text-gray-500 text-sm ml-auto'>掲載日：{format(new Date(post.updatedAt), 'yyyy年M月dd日')}</p>
            </div>
          ))}

          {/* <div className='grid grid-cols border-b'>
            <h2 className='text-gray-600 text-lg font-bold'>GW期間中の営業について</h2>
            <p className='pl-1 text-gray-500 text-lg'>お休み期間「5月5日～7日」</p>
            <p className='text-gray-500 text-sm ml-auto'>掲載日：2023/4/1</p>
          </div>

          <div className='grid grid-cols border-b'>
            <h2 className='text-gray-600 text-lg font-bold'>営業時間の変更について</h2>
            <p className='pl-1 text-gray-500 text-lg'>8:30～17:00　「2023年4月開始」</p>
            <p className='text-gray-500 text-sm ml-auto'>掲載日：2023/3/1</p>
          </div> */}

        </div>
      </div>


    </section>
  )
}