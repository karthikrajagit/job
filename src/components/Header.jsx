'use client'

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'


export default function Header() {
  const { user } = useUser();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    router.push('/post');
  };

  return (
    <div>
      <header className="p-4 flex justify-between align-center bg-blue-200 border-b border-gray-500">
        <Link href="/">
          <h1 className="text-3xl font-bold cursor-pointer hover:opacity-85">Jobs</h1>
        </Link>
        <div className='md:flex gap-8 align-center justify-center mt-2 sm: hidden md:ml-10'>
          <Link href='/'>
          <span className='font-bold cursor-pointer hover:text-blue-600'>Home</span>
          </Link>
          <Link href={`/post/cart/${user?.username}`}>
         
          <span className='font-bold cursor-pointer hover:text-blue-600'>Cart</span>
          </Link>
          
          <Link href={`/post/yourpost/${user?.username}`}>
          <span className='font-bold cursor-pointer hover:text-blue-600'>Your Post</span>
          </Link>
        </div>
        <div className="flex justify-evenly gap-6">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <button
            onClick={handleClick}
            className="bg-green-600 hover:opacity-85 md:px-8 px-4 py-2 text-white font-semibold rounded-full"
          >
            Post
          </button>

          {/* Separate buttons for SignedIn and SignedOut */}
          <SignedIn>
            <button className="bg-blue-600 text-white rounded-full hover:opacity-85 transition-all duration-200 md:px-8 px-4 py-2 shadow-md font-semibold">
              <SignOutButton />
            </button>
          </SignedIn>
          <SignedOut>
            <button className="bg-blue-600 text-white rounded-full hover:opacity-85 transition-all duration-200 md:px-8 px-4 py-2 shadow-md font-semibold">
              <SignInButton />
            </button>
          </SignedOut>
          
          <nav className="relative">
      {/* Hamburger Menu Icon */}
      <button
        className="md:hidden flex items-center p-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <GiHamburgerMenu className="text-3xl cursor-pointer hover:text-blue-600" />
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 shadow-lg flex flex-col gap-2 p-4 rounded-md border border-gray-200 z-50 bg-slate-200"
          onClick={() => setIsMenuOpen(false)}
        >
           <Link href='/'>
          <span className='font-bold cursor-pointer hover:text-blue-600'>Home</span>
          </Link>
          <Link href={`/post/cart/${user?.username}`}>
         
          <span className='font-bold cursor-pointer hover:text-blue-600'>Cart</span>
          </Link>
          
          <Link href={`/post/yourpost/${user?.username}`}>
          <span className='font-bold cursor-pointer hover:text-blue-600'>Your Post</span>
          </Link>
        </div>
      )}

    </nav>
        </div>
      </header>
    </div>
  );
}
