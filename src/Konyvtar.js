import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer"; 
import Navbar from "./Components/Navbar";
import {CursorChangeProject2} from "./Components/Cursor";

function Konyvtar() {
  let r = document.querySelector(':root');
  r.style.setProperty('--color', "#8fb9fc");
  return (
    <section onMouseMove={CursorChangeProject2} className="container-fluid d-flex flex-column">
      <div className="parallax-wrapper">

      <Navbar />

        {/* Project Landing Screen Start */}
        <section className="project-landing text-start text-wrap d-flex flex-column">
            <h1>Könyvtári Szoftver - <br />
            Thesis
            </h1>
        </section>
        {/* Project Landing Screen End */}

        <div id='konyvtar' className="parallax-image"></div>
        
        <section className="project-overview row text-wrap d-flex flex-row">
          <h2 className='col-12 col-md-4'><span>Project</span> Overview</h2>
          <div className=" col-12 col-md-8">
            <p>
            While I was in school I learned a lot. Last year we all had to create something bigger that contains a <b>database</b> connection. <br />
             Because I like reading interesting documentation I chose to recreate a Library Software. Not a regular one. <br />
              It is missing functions. But for the final exam, it was more than enough. <br />
               I learned more than I thought I would while I developed this project.
            </p>
            
            <p>
            This was my first ever bigger project with PHP and MySQL. <br />
             Of course, I used as fundamental parts <b>HTML</b> and <b>CSS</b> with a little <b>SASS</b>. For the responsive layout, I used <b>Bootstrap</b>.  <br />
            For the frontend scripts, I used <b>jQuery</b> with mixed <b>JavaScript</b>.
            </p>
            <a href="https://github.com/szkcsgrg/Szakdolgozat">Source code</a>
          </div>
        </section>

        <div id='konyvtar-ui' className="parallax-image-ui"></div>

        <section className="project-arrow row text-wrap text-center d-flex flex-column">
          <h1>
            <Link to='/projects/kincseanda'>
              Previous Project
            </Link>
          </h1>
          <h1>  
            <Link to='/projects/szurmik'>
              Next Project
            </Link>
          </h1>
        </section>

        <Footer/>
        
      </div>
    </section>
  )
}

export default Konyvtar