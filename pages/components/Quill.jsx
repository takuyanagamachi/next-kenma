import React from 'react'
import dynamic from "next/dynamic";

import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean'],
    [{ color: ["red", "blue", "yellow", "green"], },
    ],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color'
];

export default function Quill({ desc, setDesc }) {
  return (
    <>
      <ReactQuill
        className="bg-white border-2 rounded-lg"
        placeholder="内容"
        required
        value={desc}
        onChange={newValue => setDesc(newValue)}
        theme="snow"
        modules={modules}
        formats={formats}
      />
    </>
  )
}
