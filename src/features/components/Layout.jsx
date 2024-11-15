import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return <>
    <Navbar/>
    <div className="container" style={{display:'flex', height:'80vh', alignItems:'center'}}>
      {props.children}
    </div>
  </>;
}

export default Layout;
