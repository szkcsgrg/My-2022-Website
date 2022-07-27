import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {CursorChangeNavbarLinks, CursorChangeNavbarLinksEnd, CursorChangeHamburger, CursorChangeHamburgerEnd} from "./Cursor";

function NavbarDiff() {
  return (
    <nav>
      <div className="burger" id='burger' onClick={() =>{
       let navigationMenu = document.getElementById("navigation-menu").classList.toggle("d-not");
       navigationMenu = document.getElementById("navigation-menu").classList.toggle("d-show");
       let burger = document.getElementById('burger').classList.toggle("burger-active");
      }} onMouseEnter={CursorChangeHamburger} onMouseLeave={CursorChangeHamburgerEnd}>
        <span id="line1"></span>
        <span id="line2"></span>
      </div>
      <div id='navigation-menu' className="navigation-menu row d-not col-12 col-md-6 col-lg-4">
        <div className="d-flex justify-content-center">
            <ul className="d-flex flex-column align-items-center" onClick={() =>{
              let navigationMenu = document.getElementById("navigation-menu").classList.toggle("d-not");
              navigationMenu = document.getElementById("navigation-menu").classList.toggle("d-show");
              let burger = document.getElementById('burger').classList.toggle("burger-active");
            }}>
                <li onMouseEnter={CursorChangeNavbarLinks} onMouseLeave={CursorChangeNavbarLinksEnd} onMouseDown={CursorChangeNavbarLinksEnd}><Link to='/'>Home</Link></li>
                <li onMouseEnter={CursorChangeNavbarLinks} onMouseLeave={CursorChangeNavbarLinksEnd} onMouseDown={CursorChangeNavbarLinksEnd}><Link to='/about'>About</Link></li>
                <li onMouseEnter={CursorChangeNavbarLinks} onMouseLeave={CursorChangeNavbarLinksEnd} onMouseDown={CursorChangeNavbarLinksEnd}><HashLink to='/about#references'>References</HashLink></li>
                <li onMouseEnter={CursorChangeNavbarLinks} onMouseLeave={CursorChangeNavbarLinksEnd} onMouseDown={CursorChangeNavbarLinksEnd}><HashLink to='#contact'>Contact</HashLink></li>
                <li onMouseEnter={CursorChangeNavbarLinks} onMouseLeave={CursorChangeNavbarLinksEnd} onMouseDown={CursorChangeNavbarLinksEnd}><HashLink to='/#projects'>Projects</HashLink></li>
            </ul>
        </div>
      </div>
    </nav>  
  )
}


export default NavbarDiff;