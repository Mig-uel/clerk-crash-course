'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  useAuth,
} from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  const user = useAuth()

  return (
    <>
      <nav className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className='text-lg uppercase font-bold text-white'>
              Clerk Crash Course
            </div>
          </Link>
        </div>

        <div className='text-white flex gap-5'>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal' />
            <SignUpButton mode='modal' />
          </SignedOut>
        </div>
      </nav>
    </>
  )
}
export default Header
