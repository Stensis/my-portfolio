import React from "react";
import '../App.css'

function Navbar() {
  return (
    <div>
      {/* <!-- Navbar Section --> */}
      <nav id="navbar" class="flex s-around bg-color">
        <div class="left-nav">
          <h2 class="t-white">Irene Njuguna</h2>
        </div>
        <div class="right-nav">
          <ul class="flex">
            <li>
              <a href="#home" class="t-white roboto">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="t-white roboto">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" class="t-white roboto">
                Skills
              </a>
            </li>
            <li>
              <a href="#services" class="t-white roboto">
                services
              </a>
            </li>
            <li>
              <a href="#projects" class="t-white roboto">
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
