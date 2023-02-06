import React from "react";
import '../../src/stylingCss/Home.css'
// import '../../src/stylingCss/App.css'

function Home() {
  return (
    <div>
      {/* <!-- Home Section --> */}
      <section id="home" className="flex s-around sw-80 m-auto">
        <div className="home-left flex items-center">
          <div className="home-content">
            <h4 className="poppinss">Hi, I'm</h4>
            <h1 className="t-white">Irene Njuguna</h1>
            <h4 className="poppinss">Full stack web Developer & Designer from   <br/>Nairobi, Kenya.</h4>
            <a href="#m" target="_blank">
              <button className="btn poppins">Resume</button>
            </a>
            <a
              className="m-3 btn live poppins"
              id="hireme"
              href="http://linkedin.com/in/irene-njuguna98"
              without rel="noreferrer" 
              target="_blank"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="home-right flex s-center items-center">
          <div className="circle flex s-center items-center" id="mainImage">
            <img src="https://images.unsplash.com/photo-1589933767411-38a58367efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="me"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
