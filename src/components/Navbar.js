import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <ul className="flex justify-around items-center">
      <li>
        <Link href="/" className="text-white hover:text-gray-300 transition duration-200">
          Home
        </Link>
      </li>
      <li>
        <Link href="/create-diet-plan" className="text-white hover:text-gray-300 transition duration-200">
          Create Diet Plan
        </Link>
      </li>
      <li>
        <Link href="/profile" className="text-white hover:text-gray-300 transition duration-200">
          Profile
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;