import React from 'react';
import BarNav from '../students/BarNav';
import Navbar from '../students/Navbar';
// import MainNavigation from './MainNavigation';
// import Footer from './Footer';

const Index = ({ children }) => (
  <>
    {/* <MainNavigation /> */}
    <Navbar />
    {/* <BarNav /> */}
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);

export default Index;
