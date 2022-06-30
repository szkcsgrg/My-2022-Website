import React from 'react'
import {Link} from 'react-router-dom';
import {CursorChangeProject, CursorChangeProjectEnd} from "./Components/Cursor";
//Images
import Konyvtar from './Images/projects/konyvtar/konyvtar.png';
import KincseAnda from './Images/projects/kincseanda/kincseanda.png';
import Szurmik from './Images/projects/szurmik/szurmik.png';
import Sororkmenti from './Images/projects/sorokmenti/sorokmenti.png';

function Home() {
  
  return (
    <section  id="body" className="container-fluid min-vh-100">
      
      {/* Home Landing Screen Start */}
      <section className="home-landing text-wrap d-flex flex-column justify-content-around align-items-center">
        <div>
          <h1><span>Frontend</span> Website Developer</h1>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-wrap text-lg-center">
          <p>If you are looking for a <span>Frontend</span> Website Developer you are at the right place.
          Together we can create your ideas and form it for the best version, for you and your customers.</p>
        </div>  
      </section>
      {/* Home Landing Screen End */}

      {/* Home Projects Screen Start */}
      <section className="home-projects text-wrap d-flex flex-column justify-content-center align-items-start">
        <h2>Featured <span>Projects</span></h2>
        <span className="behind d-none d-md-block">Featured <span>Projects</span></span>

        <Link onMouseEnter={CursorChangeProject} onMouseLeave={CursorChangeProjectEnd} id='Project1' className='row mt-3 min-vw-100 d-flex flex-column text-center flex-md-row align-items-center' to='/projects/kincseanda'>
          <div className="col-12 col-md-4 col-lg-4 text-wrap text-center">
            <h3>Kincse Anda - Csokor, Koszorú, Dekor</h3>
          </div>
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <img id='home-projectImage' src={KincseAnda} alt="Project Image" />
          </div>
        </Link>

        <Link onMouseEnter={CursorChangeProject} onMouseLeave={CursorChangeProjectEnd} id='Project2' className='row mt-3 min-vw-100 d-flex flex-column text-center flex-md-row align-items-center' to='/projects/konyvtar'>
          <div className="col-12 col-md-4 col-lg-4 text-wrap text-center">
            <h3>Könyvtári Szoftver</h3>
          </div>
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <img id='home-projectImage' src={Konyvtar} alt="Project Image" />
          </div>
        </Link>

        <Link onMouseEnter={CursorChangeProject} onMouseLeave={CursorChangeProjectEnd} id='Project3' className='row mt-3 min-vw-100 d-flex flex-column text-center flex-md-row align-items-center' to='/projects/szurmik'>
          <div className="col-12 col-md-4 col-lg-4 text-wrap text-center">
            <h3>Szurmik Marcell - Video Editor</h3>
          </div>
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <img id='home-projectImage' src={Szurmik} alt="Project Image" />
          </div>
        </Link>

        <Link onMouseEnter={CursorChangeProject} onMouseLeave={CursorChangeProjectEnd} id='Project4' className='row mt-3 min-vw-100 d-flex flex-column text-center flex-md-row align-items-center' to='/projects/sorokmenti'>
          <div className="col-12 col-md-4 col-lg-4 text-wrap text-center">
            <h3>Sorokmenti Mezőgazdasági Szövetkezet</h3>
          </div>
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <img id='home-projectImage' src={Sororkmenti} alt="Project Image" />
          </div>
        </Link>

      </section>
      {/* Home Projects Screen End */}
      
    </section>
  )
}

export default Home 