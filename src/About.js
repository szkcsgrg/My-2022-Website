import React from 'react'
import Footer from "./Components/Footer";

import {Link} from 'react-router-dom';
import {CursorChangeFooter, CursorChangeFooterEnd} from "./Components/Cursor";
//Images
import Image_01 from "./Images/me/01.png";
import Image_02 from "./Images/me/02.png";
import Image_03 from "./Images/me/03.png";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';



function About() {
  return (
    <section className="container-fluid min-vh-100 d-flex flex-column">

      {/* About Landing Screen Start */}
      <section className="about-landing text-start text-wrap d-flex flex-column">
          <h1>
            This is not just a work. <br />
            This is an experience.
          </h1>
      </section>
      {/* About Landing Screen End */}

      {/* About Me Start */}
      <section className="about-me d-flex justify-content-center flex-column flex-md-row-reverse align-items-center">
        <div className="col-12 col-md-6 image-wrap text-center">
          <img id='aboutmeImage' loading="lazy" src={Image_01} alt="Image of Gergő Szakács" />
        </div>
        <div className="col-12 col-md-6 text-wrap my-4 mx-4">
        <h3>Szakács Gergő</h3>
        <p>
          Six years ago I officially started to learn IT in school. <br />
          When I first met with HTML and CSS I knew I want to work in that kind of area. <br />
          Detailed information about my knowledge can be seen in my <a href="https://drive.google.com/drive/folders/1sAdNNc-l2TDtQUWr9vv6opq0c2EAIzT_" target="_blank">Resume</a>.
        </p>
        <p>
          I am a believer in simplicity. <br />
          If I have to create something new, I always start from the minimal side and build up in small steps to achieve the goal I imagined.
        </p>
        <p>
          Now I am here to make some awesome web pages. If you have any ideas or any questions, feel free to get in touch with me. <br />
        </p>
        <p>
          Could you view the <Link to='/#projects'>Latest Projects</Link> or make <Link to='/contact'>Contact</Link> with me?
        </p>
        </div>
      </section>
      {/* About Me End */}

      {/* Reference Start */}
      <section className="row reference align-items-center" id="references" onMouseEnter={CursorChangeFooter} onMouseLeave={CursorChangeFooterEnd}>
        <Swiper className='swiper-wrapper'
        modules={[Navigation]}
        //navigation
        simulateTouch
        loop="true"
        >
          <SwiperSlide className='swiper-slide align-items-center d-flex flex-column flex-md-row'>
            <div className="col-10 col-md-8 text-wrap">
              <h3>Szurmik Marcell - Video Editor</h3>
              <p>"Gergő is one of the smoothest people that I've worked with. <br /> He did exactly what I wanted, and he replied to my needs quickly as well. <br /> If I sent him a message about a change I wanted, he replied as soon as he could and he changed It on the website. <br /> In the future, I will call him again If I need any kind of website development."</p>
            </div>
            <div className="col-12 col-md-4 button-wrap text-center text-md-start m-3">
              <Link to='/projects/szurmik' id='button_1'>View the Project</Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide align-items-center d-flex flex-column flex-lg-row'>
            <div className="col-10 col-md-8 text-wrap">
              <h3>Sorokmenti Mezőgazdasági Szövetkezet</h3>
              <p>"I believe despite young age you have done everything very thoughtfully and purposefully. <br /> You have done the work with due consideration for my requests and with the necessary creativity. <br /> Thank you once again!" (Translated to English)</p>
            </div>
            <div className="col-12 col-md-4 button-wrap text-center text-md-start m-3">
              <Link to='/projects/sorokmenti' id='button_1'>View the Project</Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide align-items-center d-flex flex-column flex-lg-row'>
            <div className="col-10 col-md-8 text-wrap">
              <h3>Kincse Anda - Csokor, Koszorú, Dekor</h3>
              <p>"The creation of the website went very smoothly with Gergő, after the first discussion of my ideas, I got the overall picture I expected almost immediately. <br /> He was flexible, kind, and knowledgeable throughout and I could turn to him with confidence at any time. <br /> My site became easy to use and sophisticated." (Translated to English)</p>
            </div>
            <div className="col-12 col-md-4 button-wrap text-center text-md-start m-3">
              <Link to='/projects/kincseanda' id='button_1'>View the Project</Link>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
      {/* Reference End */}

      {/* Images Start */}
      <section className="about-images row align-items-center justify-content-center">
        <div className="col-12 col-md-6 image-wrap text-center">
          <img id='aboutmeImage' loading="lazy" src={Image_02} alt="Image of Gergő Szakács" />
        </div>
        <div className="col-12 col-md-6 image-wrap text-center">
          <img id='aboutmeImage' loading="lazy" src={Image_03} alt="Image of Gergő Szakács" />
        </div>
      </section>
      {/* Images End */}
      <Footer />
    </section>
  )
}

export default About