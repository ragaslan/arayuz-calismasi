import React, { useState } from "react";
import OutlineButton from "./OutlineButton";
import menuIcon from "../assets/navbar/menu-icon.png";
function Navbar() {
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    if(isMobileMenuOpen){
        setIsMobileMenuOpen(false);
    }else{
        setIsMobileMenuOpen(true);
    }
  }
  return (
    <div className="navbar flex px-6 lg:px-24 h-24 items-center relative">
      <a href="/" className="logo flex roboto-bold color-brown">
        Collers
      </a>
      <div className="ml-auto items-center gap-4 hidden lg:flex">
        <ul className="flex gap-4 color-brown roboto-medium">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
        <OutlineButton color={'amber-900'} borderColor={'amber-900'}>Sign up now</OutlineButton>
      </div>
      <a className="menu-icon ml-auto cursor-pointer lg:hidden" onClick={toggleMenu}>
        <img src={menuIcon} width={24} height={24} />
      </a>
      {isMobileMenuOpen ? (
        <div className="mobile-menu absolute top-24 left-0 bg-amber-100 lg:hidden">
        <ul className="flex flex-col color-brown roboto-medium  w-screen h-auto p-4 gap-8">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
      ): null}
      


    </div>
  );
}

export default Navbar;
