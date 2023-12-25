import Link from "next/link"
import Information from "./components/Information"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6">
      <Information />
    </main>
  )
}