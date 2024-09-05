'use client'

import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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

  return <div>RegisterPage</div>
}
export default RegisterPage
