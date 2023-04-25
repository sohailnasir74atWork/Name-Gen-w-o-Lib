import React from 'react'
import {Link} from "react-router-dom";
import { Sidebar } from './Header';
import logo2 from "../logo1.svg";
import "./Header.css"
import closeButton from "../close.png"
const sidebarItem = [
     {
      text: "Home",
      path: "/"
    },
    {
      text: 'About Us',
      path: '/about-us'
    },
    {
      text: 'Contact Us',
      path: '/contact-us'
    },
    {
      text: 'Privacy Policy',
      path: '/privacy-policy'
    },
  ]
    const HeaderSidebar = ({ close }) => {
    return (
      <div className='sidebar' id="sidebarMenu" >
        <div className="overlay" onClick={close}>
          <nav onClick={(event) => event.stopPropagation()}>
            <div className='top-div'><img src={logo2} alt="logo" height="50px" width=""/></div>
            <ul>
              {sidebarItem.map(item => {
                return (
                  <li>
                    <Link to={item.path} onClick={close} >
                        <span>{item.text}</span>
                    </Link>
                  </li>
                )})}
            </ul>  
            <div className="closebtn" onClick={close}>
            <img src={closeButton} alt='close' height="" width=""/>
          </div>  
          </nav>
         
        </div>
      </div>
    );
  };
   
export default HeaderSidebar