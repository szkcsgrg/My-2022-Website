import React from 'react'
import {CursorChangeFooter, CursorChangeFooterEnd} from "./Cursor";

function Footer() {
  return (
    <footer className="mt-auto row text-center d-flex justify-content-center align-items-center py-2" id="contact" onMouseEnter={CursorChangeFooter} onMouseLeave={CursorChangeFooterEnd}>   
      <div className="col-12 col-md-6 text-center footer-wrap my-2">
          <p title="Click to copy" id='click-to-copy' onClick={() =>  navigator.clipboard.writeText('info@szakacsgergo.com')}>info@szakacsgergo.com</p>
      </div>
      <div className="col-12 col-md-6 text-center footer-wrap my-2">
          <p><a href="https://github.com/szkcsgrg">GitHub</a></p>
      </div>
    </footer>
  )
}

export default Footer