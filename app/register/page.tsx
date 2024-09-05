'use client'

import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const RegisterPage = () => {
  const router = useRouter()
  const { isLoaded, signUp, setActive } = useSignUp()

  // states
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [pendingVerification, setPendingVerification] = useState<boolean>(false)
  const [code, setCode] = useState<string>('')

  // form submit
  const handleSubmit = async (e: FormEvent) => {}

  // verify user email code
  const onPressVerify = async (e: FormEvent) => {}

  return (
    <div className='border p-5 rounded w-[500px]'>
      <h1 onSubmit={handleSubmit} className='text-2xl mb-4'>
        Register
      </h1>
      {!pendingVerification && (
        <form action=''>
          <div>
            <label
              htmlFor='firstName'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='John'
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
              required
            />
          </div>

          <div>
            <label
              htmlFor='lastName'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Doe'
              onChange={(e) => setLastName(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
              required
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='john@email.com'
              onChange={(e) => setEmail(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
              required
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center'
          >
            Register
          </button>
        </form>
      )}

      {pendingVerification && (
        <div>
          <form className='space-y-4 md:space-y-6'>
            <input
              value={code}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
              placeholder='Enter Verification Code...'
              onChange={(e) => setCode(e.target.value)}
            />

            <button
              type='submit'
              onClick={onPressVerify}
              className='w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Verify Email
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
export default RegisterPage
