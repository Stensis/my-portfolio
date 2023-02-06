import React from "react";
import "../../src/stylingCss/Skills.css";
import "../../src/stylingCss/App.css";

function Skills() {
  return (
    <>
      {/* <!-- Skills Section --> */}
      <section id="skills">
        <h1 class="t-center my-2 t-white f-2">Skills</h1>
        <div class="services-container flex s-around h-50">
          <div class="skills-left flex s-center items-center">
            <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          </div>

          <div class="skills-right flex items-center">
            <div class="skillss-container">
              <div class="html bar p-relative">
                <span class="bar-content left t-white">HTML</span>
                <span class="bar-content right-skills t-white">90%</span>
              </div>
              <div class="css bar p-relative">
                <span class="bar-content left t-white">CSS</span>
                <span class="bar-content right-skills t-white">80%</span>
              </div>
              <div class="js bar p-relative">
                <span class="bar-content left t-white">JavaScript</span>
                <span class="bar-content right-skills t-white">75%</span>
              </div>
              <div class="html bar p-relative">
                <span class="bar-content left t-white">Bootstrap</span>
                <span class="bar-content right-skills t-white">90%</span>
              </div>
              <div class="css bar p-relative">
                <span class="bar-content left t-white">ReactJs</span>
                <span class="bar-content right-skills t-white">80%</span>
              </div>

              <div class="css bar p-relative">
                <span class="bar-content left t-white">Ruby</span>
                <span class="bar-content right-skills t-white">80%</span>
              </div>

              <div class="html bar p-relative">
                <span class="bar-content left t-white">Ruby On Rails</span>
                <span class="bar-content right-skills t-white">90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
