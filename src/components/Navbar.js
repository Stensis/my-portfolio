import React from "react";
import '../../src/stylingCss/Navbar.css'
import '../../src/stylingCss/App.css'
// import '../App.css'

function Navbar() {
  return (
    <div>
      {/* <!-- Navbar Section --> */}
      <nav id="navbar" className="flex s-around bg-color">
        <div className="left-nav">
          <h2 className="t-white mt-3" style={{color:'Pink'}}>My Portfolio</h2>
        </div>
        <div className="right-nav">
          <ul className="flex">
            <li>
              <a href="#home" className="t-white roboto">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="t-white roboto">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="t-white roboto">
                Skills
              </a>
            </li>
            <li>
              <a href="#services" className="t-white roboto">
                services
              </a>
            </li>
            <li>
              <a href="#projects" className="t-white roboto">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
