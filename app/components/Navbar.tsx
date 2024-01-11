import Link from 'next/link';
import Footer from '../components/Footer'
import contact from './contact';
const Navbar = () => {

    return (
        <html lang="en">
            <body>
                <nav className="bg-gray-800 rounded-sm">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="h-8 w-auto text-black rounded-full" src="https://i.ibb.co/Px7J3R8/Synth-Search2.png" alt="SynthSeach" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <Link href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">SynthSearch</Link>
                                        <Link href="/history" className="text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">History</Link>
                                        <Link href="/discuss" className=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Discuss</Link>
                                        <Link href="/about" className=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">About</Link>
                                        {/* <Link href="/contact" className=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Contact</Link> */}
                                        <Link href="/contact" className=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Contact</Link>
                                        <Link href="/pricing" className="text-black rounded-md px-3 py-2 text-sm font-medium bg-white hover:bg-sky-900 hover:text-white" aria-current="page">Pricing</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="space-x-2">
                                <Link href="/get-start" className="text-black rounded-md px-3 py-2 text-sm font-medium bg-white hover:bg-sky-900 hover:text-white" aria-current="page">Get Start</Link>
                                <Link href="/login" className="text-black rounded-md px-3 py-2 text-sm font-medium bg-white hover:bg-sky-900 hover:text-white" aria-current="page">Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </body>
        </html>
    );
};

export default Navbar;
