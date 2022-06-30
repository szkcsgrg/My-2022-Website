import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

let CursorChangeLogo;
let CrusorChangeLogoEnd;
let CursorChangeNavbarLinks;
let CursorChangeNavbarLinksEnd;
let CursorChangeFooter;
let CursorChangeFooterEnd;
let CursorChangeProject;
let CursorChangeProjectEnd;
let CursorChangeHamburger;
let CursorChangeHamburgerEnd;

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
    project:{
      x: mousePosition.x-6,
      y: mousePosition.y-6,
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
  CursorChangeProject = () => setCursorVariant("project")
  CursorChangeHamburger = () => setCursorVariant("hamburger");

  CrusorChangeLogoEnd = () => setCursorVariant("default");
  CursorChangeNavbarLinksEnd = () => setCursorVariant("default");
  CursorChangeFooterEnd = () => setCursorVariant("default");
  CursorChangeProjectEnd = () => setCursorVariant("default");
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

export {CursorChangeLogo, CrusorChangeLogoEnd, CursorChangeNavbarLinks, CursorChangeNavbarLinksEnd, CursorChangeFooter, CursorChangeFooterEnd, CursorChangeProject, CursorChangeProjectEnd, CursorChangeHamburger, CursorChangeHamburgerEnd};
export default Cursor