import Link from "next/link"
import Information from "./components/Information"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 bg-stone-300" style={{
      position: "fixed",
    }}>
      <Information />
      <Footer />
    </main>
  )
}