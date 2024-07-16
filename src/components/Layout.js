import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
    <style jsx>{`
      main {
        padding: 1rem;
        min-height: 80vh;
      }
    `}</style>
  </div>
);

export default Layout;
