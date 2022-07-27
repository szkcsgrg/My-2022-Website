import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer"; 
import Navbar from "./Components/Navbar";
import {CursorChangeProject4} from "./Components/Cursor";


function Sorokmenti() {
  let r = document.querySelector(':root');
  r.style.setProperty('--color', "orange");
  return (
    <section onMouseMove={CursorChangeProject4} className="container-fluid d-flex flex-column">
      <div className="parallax-wrapper">

      <Navbar />

        {/* Project Landing Screen Start */}
        <section className="project-landing text-start text-wrap d-flex flex-column">
            <h1>Sorokmenti <br />
            Mezőgazdasági <br />
            Szövetkezet</h1>
        </section>
        {/* Project Landing Screen End */}

        <div id='sorokmenti' className="parallax-image"></div>
        
        <section className="project-overview row text-wrap d-flex flex-row">
          <h2 className='col-12 col-md-4'><span>Project</span> Overview</h2>
          <div className=" col-12 col-md-8">
            <p>This project started back in the Summer of 2019. This was my <b>first project</b> ever. <br />
              That was the point in my life, where I officially chose to follow this path. <br />
              It was a simple static website with a few links in a single folder. <br />
              But time has gone... To make it more modern and good looking I thought it would be a great idea to design and develop a new webpage for them.
            </p>
            
            <p>
            Because it is a simple informational static site I used <b>HTML CSS</b> and a little <b>SASS</b> and for the faster environment I used <b>Bootstrap</b> to make it responsive.
            For the additional script, I used <b>jQuery</b> to achieve the design goals.
            </p>
            <a href="https://www.sorkiszovetkezet.hu/">Launch project</a> <br />
            <a href="https://github.com/szkcsgrg/Sorokmenti-Mezogazdasagi-Szovetkezet">Source code</a>
          </div>
        </section>

        <div id='sorokmenti-ui' className="parallax-image-ui"></div>
        

        <section className="project-reference row text-wrap d-flex flex-column">
          <p>
          <b>Sorokmenti Mezőgazdasági Szövetkezet</b> <span>-</span> <br />
            <q>I believe despite young age you have done everything very thoughtfully and purposefully.
               <br /> You have done the work with due consideration for my requests and with the necessary creativity.
               <br /> Thank you once again!
            </q>  (Translated to English)
          </p>
        </section>

        <section className="project-arrow row text-wrap text-center">
          <h1>
            <Link to='/projects/szurmik'>
              Previous Project
            </Link>
          </h1>

        </section>

        <Footer/>
        
      </div>
    </section>
  )
}

export default Sorokmenti