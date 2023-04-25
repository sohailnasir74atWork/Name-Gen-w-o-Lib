import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo1.svg"
// import HeaderSidebar from './HeaderSideBar'
import "../../src/App.css"
import { useLockBodyScroll } from './ScrollCustomHook'
import "./Header.css"
// export const Sidebar = styled(Box)({
//   position: 'fixed',
//   display: 'flex',
//   width: '100%',
//   height: '100vh',
//   transition: "all 0.5s ease !important",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 5,
//   cursor: 'pointer',
//   overFlow: "hidden",
//   "& .overlay": {
//     position: 'fixed',
//     width: '100%',
//     height: '100vh',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     overFlow: "hidden",
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     zIndex: 5,
//     '& nav': {
//       fontFamily: "var(--text-font)",
//       fontSize: '18px !important',
//       fontWeight: '600 !important',
//       width: '85%',
//       height: '100%',
//       background: "white",
//       right: "0",
//       position: "absolute",
//       '& .top-div': {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         background: "rgba(0, 0, 0, 0.8)",
//         height: '100px',
//         width: '100%',
//        },
//       '& .sidebar-footer': {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         height: '100px',
//         position: "absolute",
//         width: '100%',
//         borderTop: '3px solid #A8A8A8',
//         borderBottom: '3px solid #A8A8A8',
//       },
//       '& ul': {
//         height: '100%',
//         width: '100%',
//         listStyle: 'none',
//         padding: '0px',
//         marginTop: "0px",
//         '& li': {
//           minHeight: '60px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'flex-start',
//           padding: '10px 12px',

//           '& a': {
//             position: 'relative',
//             color: "var(--primary-color)",
//             fontFamily: "var(--text-font)",
//             textDecoration: 'none',
//             fontSize: '1rem',
//             fontWeight: '700',
//             display: 'block',
//             width: '100%',
//             textAlign: "left",
//           },
//             '& a.click span::before': {
//             content: '"\f068"',
//           },
//         },
//         '& li:hover': {
//           background: 'rgba(0, 0, 0, .1)',

//         },
//       },
//     },

//     "& .closebtn": {
//       border: "none",
//       background: "#36454F",
//       height: "40px",
//       width: "15%",
//       padding: "10px auto",
//       position: "absolute",
//       right: "85%",
//       "& i": {
//         fontSize: "20px",
//         textStroke: '1px black',
//       }
//     }
//   }
// })



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
        {/* <div id="slide" style={{ transform: "translateX(100%)" }}>
          {isSidebarOpen && <HeaderSidebar isOpen={isSidebarOpen} close={closeSidebar} />}</div> */}
        <div className="grid-container">
          <div className="grid-item">
           
              <div className='logo-destop'>
                <Link to="/">
                  <img src={logo} alt="logo" />
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
            <div className='bars'>
              {/* <MenuIcon style={{ color: "white" }} className='icon' onClick={openSidebar}/> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header