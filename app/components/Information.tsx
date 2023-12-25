import Link from 'next/link'
export default function Information() {
  return (
    <>
        <div className="relative overflow-hidden">
        <img src="https://www.ubackup.com/resource/images/image-deployment-software/ub-id-img-banner.webp" alt="" className="rounded-xl object-cover" />
        <div className="absolute top-10 left-5 right-5 text-white text-3xl text-center leading-4 font-bold">
          <img src="https://i.ibb.co/Px7J3R8/Synth-Search2.png" className="rounded-full" alt="@WikiRocket" style={{ width: "10rem", height: "10rem", justifyContent: "center", alignItems: "center", marginLeft: "38rem" }} />
          <br />
          <h2>Welcome🙏, to SynthSearch - The Open-Source Search Engine</h2>
          <br />
          <br />
          <p className="text-lg font-normal">Where information comes to life with the speed of thought. In a world where time is of the essence, WikiZoom propels your search experience into overdrive, ensuring you access the vast knowledge of Wikipedia in the blink of an eye.</p>
          <br />
          <br />
          <Link href="/partner" className="text-white rounded-md px-3 py-2 text-lg font-medium" aria-current="page">Become Partner</Link>
          <Link href="/get-start" className="text-black rounded-md px-3 py-2 text-lg font-medium bg-white hover:bg-sky-900 hover:text-white" aria-current="page">Get Start</Link>
        </div>
      </div>
    </>
  )
}
