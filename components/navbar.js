// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="container mx-auto flex justify-between items-center">
        <li>
          <Link href="/"
             className="text-white">Home
          </Link>
        </li>
        <li>
          <Link href="/login"
             className="text-white">Login / Sign Up
          </Link>
        </li>
        {/* Additional navigation links */}
      </ul>
    </nav>
  );
}
