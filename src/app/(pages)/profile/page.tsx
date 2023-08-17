"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'


export default function page() {

  const router = useRouter()
  const [data, setData] = useState({
    id: "",
    email: "",
    username: "",

})
  const logout = async () => {
    try {

      await axios.get("/api/users/logout")
      toast.success("logged out successfully!")
      router.push('/signin')

    } catch (error:any) {

      toast.error(error.message)
      
    }
  }
  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    setData({
      id: res.data.data._id,
      email: res.data.data.email,
      username: res.data.data.username
    })
    return Response
  }

  useEffect(() => {
    getUserDetails()
  }, [data])

  return (
    <div className='flex h-screen my-auto flex-col justify-center items-center gap-4'>
      <div>
        {/* <button onClick={getUserDetails}>
          user info */}
        <Link href={`/profile/${data.id}`} className='bg-blue-500 hover:bg-blue-400 px-4 py-2'>
          profile
        </Link>
        {/* </button> */}
        <Link href={`/verifyemail`} className='bg-blue-500 hover:bg-blue-400 px-4 py-2'>
          check verification status
        </Link>
      </div>
    <button onClick={logout} className='px-4 py-2 bg-green-500 hover:bg-green-400'>logout</button>
    </div>
  )
}
