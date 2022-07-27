import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer"; 
import Navbar from "./Components/Navbar";
import {CursorChangeProject1} from "./Components/Cursor";

function Kincseanda() {
  let r = document.querySelector(':root');
  r.style.setProperty('--color', "pink");
  return (
    <section onMouseMove={CursorChangeProject1} className="container-fluid d-flex flex-column">
      <div className="parallax-wrapper">

      <Navbar />

        {/* Project Landing Screen Start */}
        <section className="project-landing text-start text-wrap d-flex flex-column">
            <h1>Kincse Anda - <br />
            Csokor, Koszorú, Dekor
            </h1>
        </section>
        {/* Project Landing Screen End */}

        <div id='kincseanda' className="parallax-image"></div>
        
        <section className="project-overview row text-wrap d-flex flex-row">
          <h2 className='col-12 col-md-4'><span>Project</span> Overview</h2>
          <div className=" col-12 col-md-8">
            <p>
            The past months and every free hour went into this project. I spent days and lots of effort finishing this one.  <br />
            When you have to create a big project you have to create a stunning plan to follow. In this case, we managed to form a good-looking <b>florist e-commerce</b> site. <br />
            To achieve the plan that we think of I had to create the back end and the front end as well.
            </p>

            <p>
            I tried to make it easier for myself and go with the regular <b>PHP</b> with <b>MySQL</b> and the basic things like <b>HTML</b> <b>CSS</b> with a little <b>SASS</b> and of course <b>jQuery</b> helped to create easier the <b>JavaScript</b> files. <br />
            Besides these, I used <b>Bootstrap</b> for responsive layout. 
            </p>
            
            <p>
            Currently, the page is only available on GitHub. In September you can see the final product on their domain. 
            </p>
            <a href="https://github.com/szkcsgrg/Kincse-Anda">Source code</a>
          </div>
        </section>

        <div id='kincseanda-ui' className="parallax-image-ui"></div>

        <section className="project-arrow row text-wrap text-center d-flex flex-column">
          <h1>  
            <Link to='/projects/konyvtar'>
              Next Project
            </Link>
          </h1>
        </section>

        <Footer/>
        
      </div>
    </section>
  )
}

export default Kincseanda