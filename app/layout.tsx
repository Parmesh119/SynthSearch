import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SynthSearch - The open-source Search Engine',
  description: '@WikiRocket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" className="rounded-full" href="https://i.ibb.co/ckCZycR/Synth-Search.png" />
      </head>
      <Navbar />
      <body>{children}</body>
    </html>
  )
}
