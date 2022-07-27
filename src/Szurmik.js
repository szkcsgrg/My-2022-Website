import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer"; 
import Navbar from "./Components/Navbar";
import {CursorChangeProject3} from "./Components/Cursor";


function Szurmik() {
  let r = document.querySelector(':root');
  r.style.setProperty('--color', "#cc98fc");
  return (
    <section onMouseMove={CursorChangeProject3} className="container-fluid d-flex flex-column">
      <div className="parallax-wrapper">

      <Navbar />

        {/* Project Landing Screen Start */}
        <section className="project-landing text-start text-wrap d-flex flex-column">
            <h1>Szurmik Marcell - <br />
            Video Editor</h1>
        </section>
        {/* Project Landing Screen End */}

        <div id='szurmik' className="parallax-image"></div>
        
        <section className="project-overview row text-wrap d-flex flex-row">
          <h2 className='col-12 col-md-4'><span>Project</span> Overview</h2>
          <div className=" col-12 col-md-8">
            <p>
            For me, the most time spent on a one-page site that I have ever created.<br />
            This one started back in August 2021. We talked about the whole thing and we created together a good-looking stunning design. After nearly a year gap we managed to finally start the development.
            </p>
            <p>
            Because it was a simple static page I used the basic languages and of course the stuff I always use. <b>HTML</b>, <b>CSS</b>, <b>SASS</b>, <b>Bootstrap</b> with <b>JavaScript</b> and <b>jQuery</b>.
            </p>
            <a href="https://korsotea.hu/">Launch project</a> <br />
            <a href="https://github.com/szkcsgrg/Szurmik-Marcell-Video-Editor">Source code</a>
          </div>
        </section>

        <div id='szurmik-ui' className="parallax-image-ui"></div>
        

        <section className="project-reference row text-wrap d-flex flex-column">
          <p>
          <b>Szurmik Marcell</b> <span>-</span> <br />
            <q>Gergő is one of the smoothest people that I've worked with. <br /> He did exactly what I wanted, and he replied to my needs quickly as well. <br /> If I sent him a message about a change I wanted, he replied as soon as he could and he changed It on the website. <br /> In the future, I will call him again If I need any kind of website development.</q>
          </p>
        </section>

        <section className="project-arrow row text-wrap text-center d-flex flex-column">
          <h1>
            <Link to='/projects/konyvtar'>
              Previous Project
            </Link>
          </h1>
          <h1>  
            <Link to='/projects/sorokmenti'>
              Next Project
            </Link>
          </h1>
        </section>

        <Footer/>
        
      </div>
    </section>
  )
}

export default Szurmik