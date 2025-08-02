import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MegaMenuIntellectt from "./components/megaMenu/MegaMenuIntellectt";

function App() {
  return (
    <Fragment>
      <MegaMenuIntellectt />
      <div className="help_desk" style={{ margin: 0, padding: 0 }}>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default App;
