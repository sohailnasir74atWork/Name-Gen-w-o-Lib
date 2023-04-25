import React, { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo1.svg"
import "../../src/App.css"
import { useLockBodyScroll } from './ScrollCustomHook'
import "./Header.css"
import bars from "../bars.png"
 
const HeaderSidebar = lazy(()=> import("./HeaderSideBar"))

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    const sidebarMenu = document.getElementById("slide");
    if (sidebarMenu) {
      sidebarMenu.style.transition = "all 0.9s ease";
      sidebarMenu.style.transform = "translateX(0%)";
    }
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    const sidebarMenu = document.getElementById("slide");
    if (sidebarMenu) {
      sidebarMenu.style.transition = "all 0.9s ease";
      sidebarMenu.style.transform = "translateX(100%)";
    }
    setIsSidebarOpen(false);
  }
  useLockBodyScroll(isSidebarOpen)
  return (
    <div className='wrapper-header'>
      <Suspense>
        <div id="slide" style={{ transform: "translateX(100%)" }}>
          {isSidebarOpen && <HeaderSidebar isOpen={isSidebarOpen} close={closeSidebar} />}</div></Suspense>
        <div className="grid-container">
          <div className="grid-item">
           
              <div className='logo-destop'>
                <Link to="/">
                  <img src={logo} alt="logo" height="100%" width="100%"/>
                </Link>
              </div>
           
          </div>
          <div className="grid-item menu">
          </div>
          <div className="grid-item menu">
            {/* <div className='logo'>
                                <Link to="/">
                                <span>Home</span>
                                </Link>
                            </div> */}
          </div>
          <div className="grid-item menu">
            {/* <div className='logo'>
                                <Link to="/">
                                <span>Home</span>
                                </Link>
                            </div> */}
          </div>
          <div className="grid-item menu">
            {/* <div className='logo'>
                                <Link to="/">
                                <span>Home</span>
                                </Link>
                            </div> */}
          </div>
          <div className="grid-item container-logo menu">
            <div className='logo p-l-40'>
              <Link to="/about-us">
                <span className='hide'>ABOUT US</span>
              </Link>
            </div>
          </div>
          <div className="grid-item container-logo menu">
            <div className='logo'>
              <Link to="/contact-us">
                <span className='hide'>CONTACT US</span>
              </Link>
            </div>
          </div>
          <div className="grid-item container-logo menu">
            <div className='hide'>
              <div className='logo'>
                <Link to="/privacy-policy">
                  <span>PRIVACY POLICY</span>
                </Link>
              </div>
            </div>
            
          </div>
          <div className='bars'>
          {!isSidebarOpen && <img src={bars} alt='Menu' onClick={openSidebar} height="100%" width="100%"/>}
            </div>
        </div>
    </div>
  )
}

export default Header