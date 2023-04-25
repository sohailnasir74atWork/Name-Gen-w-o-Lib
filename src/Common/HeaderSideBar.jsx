// import React from 'react'
// import {Link} from "react-router-dom";
// import CloseIcon from '@mui/icons-material/Close';
// import { Sidebar } from './Header';
// import logo2 from "../logo1.svg";


// const sidebarItem = [
//      {
//       text: "Home",
//       path: "/"
//     },
//     {
//       text: 'About Us',
//       path: '/about-us'
//     },
//     {
//       text: 'Contact Us',
//       path: '/contact-us'
//     },
//     {
//       text: 'Privacy Policy',
//       path: '/privacy-policy'
//     },
//   ]
//     const HeaderSidebar = ({ close }) => {
//     return (
//       <Sidebar id="sidebarMenu" >
//         <div className="overlay">
//           <nav onClick={(event) => event.stopPropagation()}>
//             <div className='top-div'><img src={logo2} alt="logo" style={{height:"50px"}}/></div>
//             <ul>
//               {sidebarItem.map(item => {
//                 return (
//                   <li>
//                     <Link to={item.path} onClick={close} >
//                         <span>{item.text}</span>
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>    
//           </nav>
//           <div className="closebtn" onClick={close}>
//             <CloseIcon style={{fontSize:"40px", color:"White"}}/>
//           </div>
//         </div>
//       </Sidebar>
//     );
//   };
   
// export default HeaderSidebar