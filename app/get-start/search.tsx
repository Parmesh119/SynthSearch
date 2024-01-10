"use client"
import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '../components/Footer'

export default function Start() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }
  return (
    <>
      <main className="backdrop-blur-sm">
        <div style={{
          width: "20rem",
          height: "6rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          backgroundColor: "darkblue",
          opacity: "90%",
          marginTop: "2rem",
          backdropFilter: "25%",
          borderRadius: "5px",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem"
        }}>
          <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Start typing to search" className="rounded-full w-[70%] left-0 p-2 " style={{
              backgroundColor: "darkblue",
              opacity: "90%",
              border: "1px solid white",
              color: "white"
            }} required />
            <button type="submit" value="🚀" className="ml-2 bg-white text-black p-2 rounded-xl w-[20%] hover:bg-sky-900 hover:text-white">Go</button>
          </form>
        </div>
      </main>
    </>
  )
}
