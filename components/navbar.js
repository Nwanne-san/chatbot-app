// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { Brightness7, DarkMode } from '@mui/icons-material';


export default function Navbar() {
    const [theme, setTheme] = useState(false)
    const toggleTheme = () => setTheme(!theme)

  return (
    <nav className="bg-gray-800 py-4 flex justify-between items-center ">
      <ul className="container mx-auto px-3 flex justify-between">
        <li>
          <Link href="/"
             className="text-white"> Home
          </Link>
        </li>
        <li>
          <Link href="/auth/login" className="text-white hover:text-white">Login / Sign Up</Link>
        </li>
      </ul>
      <ul className='px-2'>
        <li>
            <button onClick={toggleTheme}> {theme ? <Brightness7/> : <DarkMode/>} </button>
        </li>
      </ul>
    </nav>
  );
}
