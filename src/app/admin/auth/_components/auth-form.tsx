'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'


export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async(data) => {
    console.log(data)

    await signIn('email', { email: data.email })
  })


  return (
    <div className="authForm">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your admin account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" { ...form.register('email')} />
        </div>
        {/* <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" required type="password" />
        </div>
        <Link href="#">
          Forgot your password?
        </Link> */}
        <Button className="w-full">Login</Button>
      </div>
      </form>
    </div>
  )
}
