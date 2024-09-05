import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
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
            <UserButton showName />
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
