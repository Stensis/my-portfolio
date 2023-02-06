import React from "react";
import '../../src/stylingCss/About.css'
import '../../src/stylingCss/App.css'

function About() {
  return (
    <div>
      {/* <!-- About Section --> */}
      <section id="about">
        <h1 className="t-center my-2 t-white f-2">About Me</h1>
        <div className="about-container flex s-around ">
          <div className=" about-left flex s-center items-center">
            {/* <!-- Here in src replade the given link with your secondary image link --> */}
            <img src="https://images.unsplash.com/photo-1589933767411-38a58367efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" style={{width:'400px'}}/>
          </div>

          <div className="about-right flex">
            <div className="about-content">
              <p className="t-white poppins fs-4">
              Fueled by a love for problem-solving and technology, I am a driven and innovative software developer ready to take on new challenges. With a solid foundation in programming languages and software development methodologies, I am eager to bring my skills and passion to the table and make a positive impact in the industry. Let's build amazing things together!
              </p>
              {/* <a
                className="btn live poppins"
                id="hireme"
                href="http://linkedin.com/in/irene-njuguna98"
              >
                Hire Me
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
