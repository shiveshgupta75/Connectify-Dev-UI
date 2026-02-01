import React from 'react';
import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <NavBar/>
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Body
