import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='p-4  flex justify-between align-center bg-blue-200'>
            <Link href='/'>
            <h1 className='text-3xl font-bold cursor-pointer hover:opacity-85'>Job</h1>
            </Link>
            <div className='flex justify-evenly gap-6'>

            <Link href="/post">
                <button className='bg-green-600 hover:opacity-85 md:px-8 px-4 py-2 text-white font-semibold rounded-full'>Post</button>
            </Link> 
               
            <button className='bg-blue-600 text-white rounded-full hover:opacity-85 transition-all duration-200 md:px-8 px-4 py-2 shadow-md font-semibold'>
                <SignedIn>
                    <SignOutButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </button>
                 
            </div>
        </header>
    </div>
  )
}
