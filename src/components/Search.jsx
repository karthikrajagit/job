'use client'

import React from 'react'
import {useState} from 'react'
import { useRouter } from 'next/navigation';
export default function Search() {
  const [input, setInput] = useState('');
  const router = useRouter();
     const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/${input}`);
        setTimeout(() => {
          router.refresh();
        }, 100);
      };
  return (
    <div >
      <form onSubmit={handleSubmit}>
      <input
      name='search'
      id='search'
      placeholder='Search...'
      onChange={(e) => setInput(e.target.value)}
      className='border border-gray-300 rounded-full p-4 md:ml-10 sm:ml-6 mt-6 sm:w-[80%] md:w-full h-12'
      />
      </form>
    </div>
  )
}
