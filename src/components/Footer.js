import React from 'react';

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Diet Plan Sharing Platform. All rights reserved.</p>
    <style jsx>{`
      footer {
        background: #333;
        color: white;
        padding: 1rem;
        text-align: center;
        position: fixed;
        width: 100%;
        bottom: 0;
      }
    `}</style>
  </footer>
);

export default Footer;
