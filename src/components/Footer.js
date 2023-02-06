import React from "react";
import "../../src/stylingCss/Footer.css";
import "../../src/stylingCss/App.css";

function Footer() {
  return (
    <div>
      {/* <!-- Footer Section --> */}
      <footer id="footer">
        <ul className="flex s-center w-80 m-auto my-2 res">
          <li>
            <a href="#home" className="poppinss">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="poppinss">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="poppinss">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="poppinss">
              Projects
            </a>
          </li>
        </ul>
        <ul className="flex s-center w-80 font-awesome ">
          <a href="http://linkedin.com/in/irene-njuguna98" className="text-decoration-none" target="_blank">
            <li>
              <i className="fa-brands fa-linkedin-in">linkedin</i>
            </li>
          </a>
          <a href="https://github.com/Stensis" className="text-decoration-none" target="_blank">
            <li>
              <i className="fa-brands fa-github">GitHub</i>
            </li>
          </a>
          <a href="https://www.instagram.com/irene_njugunaa/" className="text-decoration-none" target="_blank">
            <li>
              <i className="fa-brands fa-instagram">instagram</i>
            </li>
          </a>
        </ul>
        <p className="t-center my-2 poppins">
          &copy; All Rights Reserved -{" "}
          <span className="cpy-white poppins">Irene Njuguna</span>
        </p>
      </footer>

      <div id="scroll-top" onclick="scrolltop()">
        <span>
          <i className="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </div>
  );
}

export default Footer;
