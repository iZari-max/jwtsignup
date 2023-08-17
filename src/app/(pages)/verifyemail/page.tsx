"use client"

import axios from "axios"
import Link from "next/link"
import React, { useState, useEffect} from 'react'

export default function VerifyEmailPage (){
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", {token})
            setVerified(true)
        } catch (error:any) {
            setError(true)
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")
    }, [])

    useEffect(() => {
        if(token.length>0){
            verifyUserEmail()
        }
    }, [token])

    return(
        <div className="flex flex-col justify-center items-center h-screen my-auto">
            <span>{verified ? "Not verfied yet! check mail": "verification done!"}</span>
            {verified &&(
                <div>
                    <h2 className="text-2xl bg-green-500 text-white">Email Verified!</h2>
                    <Link href={'/signin'} className="text-2xl bg-blue-500 text-white">login</Link>
                </div>
            )}
            {error &&(
                <div>
                    <h2 className="text-2xl bg-red-500 text-white">There was an Error!</h2>
                </div>
            )}
            <Link href={'/profile'} className="text-2xl bg-blue-500 text-white">back to profile</Link>
        </div>
    )

}

