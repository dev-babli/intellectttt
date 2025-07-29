import React, { Fragment } from "react";
import Scrollbar from "./components/scrollbar/scrollbar";
import Footer from "./components/footer/Footer";
import Header5 from "./components/header5/Header5";
// import CtaSection from "./components/Help-Desk-Components/CtaSection/CtaSection";
import { Outlet } from 'react-router-dom';
import MegaMenuIntellectt from "./components/megaMenu/MegaMenuIntellectt";

function App() {
  return (
    <>
      {/* <Header5 /> */}
      <MegaMenuIntellectt />
      <main>
        <Outlet />
      </main>
     
      <Footer />
      {/* <Scrollbar /> */}
    </>
  );
}

export default App;
