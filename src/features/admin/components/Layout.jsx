import React from "react";
import Navbar from "../../components/Navbar";

function Layout(props) {
  return <>
    <Navbar/>
    <div className="container" style={{display:'flex', height:'80vh', alignItems:'center'}}>
      {props.children}
    </div>
  </>;
}

export default Layout;
