// components/Navbar.js
import Link from 'next/link';
import { LightMode, DarkMode } from '@mui/icons-material';
import Image from 'next/image';

export default function Navbar({ theme, toggleTheme }) {
    return (
        <nav className="bg-transparent backdrop-filter backdrop-blur-md border-b-0 py-4 px-3 flex justify-between items-center absolute top-0 left-0 right-0">
            <Image src='/Logo.37f92ff9.png' alt="CCU logo" width={160} height={40}/>
                
            <ul className=' flex gap-3 min-w-[200px] items-center px-2'>
                <li>
                    <Link href="/" className="text-black py-3 rounded-md px-4 border border-transparent hover:bg-green-600 duration-200 hover:text-white"> Home </Link>
                </li>
                <li>
                    <Link href="/auth/login" className="text-black rounded-lg px-4 border border-transparent hover:bg-green-600 hover:text-white py-3 duration-200">Login / Sign Up</Link>
                </li>
                <li>
                    <button className='p-2 rounded-full hover:bg-green-600/70 duration-100' onClick={toggleTheme} >{theme ? <DarkMode/> : <LightMode/> } </button>
                </li>
            </ul>
        </nav>
    );
}
