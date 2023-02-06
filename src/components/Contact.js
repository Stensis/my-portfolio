import React from "react";
import '../../src/stylingCss/Contact.css'
import '../../src/stylingCss/App.css'

function Contact() {
  return (
    <div>
      {/* <!-- Contact Me Section --> */}
      <section id="contact" class="m-b-1">
        <h1 class=" t-center my-2 t-white f-2">Contact Me</h1>
        <div class="contact-container flex s-around items-centers">
          <div class="form" id="contactForm">
            <form action="" id="contactFrom">
              <div class="name form-div">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="poppins"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="email form-div">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="poppins"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div class="phone form-div">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  class="poppins"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              <div class="textarea form-div">
                <textarea
                  name="text"
                  id="textarea"
                  cols="30"
                  rows="10"
                  class="poppins"
                  placeholder="Enter Messages"
                ></textarea>
              </div>
              <button type="submit" class="btn poppins" id="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
