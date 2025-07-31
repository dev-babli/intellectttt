import React, { Fragment } from "react";
import Scrollbar from "./components/scrollbar/scrollbar";
import Footer from "./components/footer/Footer";
import Header5 from "./components/header5/Header5";
// import CtaSection from "./components/Help-Desk-Components/CtaSection/CtaSection";
import { Outlet } from 'react-router-dom';
import MegaMenuIntellectt from "./components/megaMenu/MegaMenuIntellectt";
import ResponsiveSwitch from "./components/ResponsiveSwitch/ResponsiveSwitch";
import "./css/mobile.css";

function App() {
  return (
    <ResponsiveSwitch>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* <Header5 /> */}
          <MegaMenuIntellectt />
          <main>
            <Outlet />
          </main>
         
          <Footer />
          {/* <Scrollbar /> */}
        </div>
      </div>
    </ResponsiveSwitch>
  );
}

export default App;
