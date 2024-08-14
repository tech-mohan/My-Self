import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "./Home.css";
import me from "../assets/picture.avif";
// import TypingEffect from "./TypingEffect";

function Home() {
  return (
    <section className="container">
      <div className="row body">
        <div className="col-lg-6 col-sm-12 lh-side">
          <div className="text">
            <h2>Hello!...</h2>
            <br />
            <h1>
              I am <h1>Mohan.</h1>
            </h1>
            <br />
            <p>
              full name <h2>Mohanashanmugapandian.</h2>
              <h4>Full Stack Web Developer.</h4>
            </p>
          </div>
          <div className="buttons">
            <button className="btn btn-primary">
              <a href="/About">About Me</a>
            </button>
            <button className="btn btn-success">
              <a
                href="https://drive.google.com/file/d/1Zx2MeM2TSoockeQgPgkza3ctACjDdVjv/view?usp=drive_link"
                target="_blank"
              >
                My Resume
              </a>
            </button>
          </div>
          <ul className="social">
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
          </ul>
        </div>
        <div className="col-lg-6 col-sm-12 rh-side">
          <img src={me} className="avatar" width="300px" height="300px"></img>
        </div>
      </div>
    </section>
  );
}
export default Home;
