import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container-fluid">
      <div className="conclusion">
        <h1>Conclusion</h1>

        <p>
          Thank you for taking the time to view my portfolio. As a motivated and
          enthusiastic fresher, I am eager to contribute to a dynamic team and
          further develop my skills. I am looking forward to discussing how my
          background and skills can benefit your company. Please feel free to
          reach out to me using the contact information below.
        </p>
      </div>
      <div className="row contact">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-solid fa-mobile-screen-button"></i>
          <h2>Call me at</h2>
          <a href="tel:+91 7010287843" target="_blank">
            7010287843
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-brands fa-whatsapp"></i>
          <h2>Chat with me</h2>

          <a href="https://wa.me/917010287843" target="_blank">
            <button className="btn btn-success">Chat</button>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-regular fa-envelope"></i>
          <h2>Send mail to</h2>
          <a href="mailto:mohanapandian2003@gmail.com" target="_blank">
            mohanapandian2003@gmail.com
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i class="fa-solid fa-location-dot"></i>
          <h2>Meet me at</h2>
          <p>51 | Middle Street</p>
          <p>Koolaiyanur</p>
          <p>Theni 65515</p>
          <a href="https://maps.app.goo.gl/cyQA9ePaXP4HPZy27" target="_blank">
            View on map
          </a>
        </div>
      </div>
      <div className="declaration">
        <h2>Declaration</h2>
        <p>
          I hereby declare that the information provided in my portfolio is true
          and accurate to the best of my knowledge and belief.
        </p>
      </div>
      <footer class="bg-dark text-white text-center py-3 ">
        <h2>Thank You</h2>
        <ul className="contact-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/mohanashanmugapandian"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/msp_k_/" target="_blank">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/tech-mohan/" target="_blank">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:mohanapandian003@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p>&copy; 2024 Mohanashanmugapandian. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
