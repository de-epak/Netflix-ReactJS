import React ,{useState,useEffect}from 'react'
import image from "./Images/Logo.svg"
import Avatar from "./Images/Avatar.png"
import "./Nav.css"

function Nav() {
  const [show,handleShow]=useState(false);
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if (window.scrollY > 100){
          handleShow(true);
        } else handleShow(false);
      });
      return()=>{
          window.removeEventListener("scroll");
      }
  },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
         className='nav_logo'
         src={image}
         alt="Netflix Logo"/>
        <img
         className='nav_avatar'
         src={Avatar}
         alt="Profile Logo"/>
    </div>
  )
}

export default Nav