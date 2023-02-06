import React from "react";
import "../../src/stylingCss/Project.css";
import "../../src/stylingCss/App.css";

function Project() {
  return (
    <div>
      {/* <!-- Projects Section --> */}
      <section id="projects">
        <h1 className=" t-center my-2 t-white f-2">Projects</h1>
        <div className="projects-container flex s-center">
          <div className="projects-item flex f-col s-center items-center">
            <div className="border">
              <img src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <h1 className="t-white poppins">Shopie App</h1>
            <p className="t-white poppins">
              {" "}
            E-commerce App using HTML, Bootstrap, ReactJs & Ruby On Rails. You can Purchase Your products online
            </p>
            <div className="buttons flex s-around">
              <a href="https://github.com/Stensis/shopie" target="_blanks" className="btn mx-1 m-top">
                GitHub
              </a>
              <a href="#" target="_blanks" className="btn m-top live">
                Live Link
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
