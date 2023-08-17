"use client"
import React, { useState } from 'react'
import {getUserDetails} from '@/helpers/getDataForProfile'
import Link from 'next/link'
export default function page({params}: any) {
  // const [data, setData] = useState({
  //   id: "",
  //   username: "",
  //   email: ""
  // })
  // const res = await getUserDetails()
  // setData({
  //   id: res.data._id,
  //   email: res.data.email,
  //   username: res.data.username
  // })

  return (
    <div className='flex flex-col gap-y-8 ml-8'>
        <div>
        user id :  
        <span className='ml-2 bg-orange-500 text-black text-2xl p-4'>{params.id}</span>
        </div>
        <div>
          <Link href={"/profile"} className='px-4 py-2 bg-gray-500 hover:bg-gray-400 rounded'>Go back</Link>
        </div>
    </div>
  )
}
