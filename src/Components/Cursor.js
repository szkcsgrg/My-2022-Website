import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

let CursorChangeLogo,
 CrusorChangeLogoEnd,
 CursorChangeNavbarLinks,
 CursorChangeNavbarLinksEnd,
 CursorChangeFooter,
 CursorChangeFooterEnd,
 CursorChangeHamburger,
 CursorChangeHamburgerEnd, 
 CursorChangeProject1,
 CursorChangeProject1End,
 CursorChangeProject2,  
 CursorChangeProject2End,
 CursorChangeProject3,
 CursorChangeProject3End,
 CursorChangeProject4,
 CursorChangeProject4End;

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  })
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(()=>{
    const mouseMove = e =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return () =>{
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])
  const variants = {
    default:{
      backgroundColor: "black",
      x: mousePosition.x-6,
      y: mousePosition.y-6
    },
    logo:{
      height: 75,
      width: 75,
      x: mousePosition.x-37.5,
      y: mousePosition.y-37.5,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    navbarLinks:{
      height: 100,
      width: 100,
      x: mousePosition.x-50,
      y: mousePosition.y-50,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    footer:{
      x: mousePosition.x-6,
      y: mousePosition.y-6,
      backgroundColor: "white"
    },
    project1:{
      x: mousePosition.x-6,
      y: mousePosition.y-6,
      backgroundColor: "pink"
    },
    project2:{
      x: mousePosition.x-6,
      y: mousePosition.y-6,
      backgroundColor: "#8fb9fc"
    },
    project3:{
      x: mousePosition.x-6,
      y: mousePosition.y-6,
      backgroundColor: "#cc98fc"
    },
    project4:{
      x: mousePosition.x-6,
      y: mousePosition.y-6,
      backgroundColor: "orange"
    },
    hamburger: {
      x: mousePosition.x-6,
      y: mousePosition.y-6,
      visibility: "hidden",
      opacity: 0
    }
  }
  CursorChangeLogo = () => setCursorVariant("logo");
  CursorChangeNavbarLinks = () => setCursorVariant("navbarLinks");
  CursorChangeFooter = () => setCursorVariant("footer");
  CursorChangeProject1 = () => setCursorVariant("project1")
  CursorChangeProject2 = () => setCursorVariant("project2")
  CursorChangeProject3 = () => setCursorVariant("project3")
  CursorChangeProject4 = () => setCursorVariant("project4")
  CursorChangeHamburger = () => setCursorVariant("hamburger");

  CrusorChangeLogoEnd = () => setCursorVariant("default");
  CursorChangeNavbarLinksEnd = () => setCursorVariant("default");
  CursorChangeFooterEnd = () => setCursorVariant("default");
  CursorChangeProject1End = () => setCursorVariant("default");
  CursorChangeProject2End = () => setCursorVariant("default");
  CursorChangeProject3End = () => setCursorVariant("default");
  CursorChangeProject4End = () => setCursorVariant("default");
  CursorChangeHamburgerEnd = () => setCursorVariant("default");
  return (
    <motion.div
    id="cursor" 
    className="cursor d-none d-lg-block"
    variants={variants}
    animate={cursorVariant}
    >
    </motion.div> 
  )
}

export {CursorChangeLogo, CrusorChangeLogoEnd,
   CursorChangeNavbarLinks, CursorChangeNavbarLinksEnd, 
   CursorChangeFooter, CursorChangeFooterEnd, 
   CursorChangeHamburger, CursorChangeHamburgerEnd, 
   CursorChangeProject1, CursorChangeProject1End,
   CursorChangeProject2, CursorChangeProject2End,
   CursorChangeProject3, CursorChangeProject3End,
   CursorChangeProject4, CursorChangeProject4End};
export default Cursor