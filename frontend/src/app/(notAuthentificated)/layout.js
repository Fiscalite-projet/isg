import React from 'react';
import ClientLayout from '../components/ClientLayout';
import { Navbar } from './Navbar';
import { Footer } from './Footer';


export default async function AdminLayout({ children }) {
  return (
    <div lang="en">
      <div
       
      >
        <Navbar/>
        {children}
        <Footer/>
      
      </div>
    </div>
  );
}