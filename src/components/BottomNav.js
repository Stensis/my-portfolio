import React from "react";
import '../../src/stylingCss/BottomNav.css'
import '../../src/stylingCss/App.css'

function BottomNav() {
  return (
    <div>
      {/* <!-- Bottom Navigator --> */}
      <section id="bottom">
        <div class="bottom-nav flex s-center items-center">
          <ul class="flex s-around items-center">
            <a href="#home">
              <li class="bottomo-hover flex s-center items-center">
                <i class="fa-solid fa-house"></i>
              </li>
            </a>
            <a href="#about">
              <li class="bottomo-hover flex s-center items-center">
                <i class="fa-solid fa-user"></i>
              </li>
            </a>
            <a href="#skills">
              <li class="bottomo-hover flex s-center items-center">
                <i class="fa-solid fa-code"></i>
              </li>
            </a>
            <a href="#services">
              <li class="bottomo-hover flex s-center items-center">
                <i class="fa-solid fa-rocket"></i>
              </li>
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default BottomNav;
