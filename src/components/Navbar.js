import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/create-diet-plan">Create Diet Plan</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        background: #333;
        color: white;
        padding: 1rem;
      }
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
      }
      li {
        margin: 0 1rem;
      }
      a {
        color: white;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </nav>
);

export default Navbar;
