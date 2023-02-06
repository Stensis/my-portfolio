import React from "react";
import "../../src/stylingCss/Services.css";
import "../../src/stylingCss/App.css";

function Services() {
  return (
    <div>
      {/* <!-- Services Section --> */}
      <section id="services">
        <h1 className=" t-center my-2 t-white f-2">Services</h1>
        <div className="services-container flex s-center">
          <div className="test-item flex f-col items-center">
            <img src="./Images//developer.png" alt="" />
            <h1 className="t-white poppins">Web Development</h1>
            <p className="t-white poppins">
              Web Development is envolving everywhere. Every startup and every
              bussines have their own websites. As my passion I will help you to
              build your clean and fast website for your startup or your
              bussines.
            </p>
          </div>

          <div className="test-item flex f-col items-center">
            <img src="./Images//startup.png" alt="" />
            <h1 className="t-white poppins">Growth Strategies</h1>
            <p className="t-white poppins">
              As a web developer also I will help your brand to grow up . I will
              provide the growth strategies for your brand. And also help in
              searching techniques for your brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
