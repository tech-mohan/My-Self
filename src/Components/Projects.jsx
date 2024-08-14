import React from "react";
import avatar from "../assets/project-page.avif";
import tech from "../assets/tech.avif";
import home from "../assets/home.jpg";
import quicksearch from "../assets/quicksearch.jpg";
import login from "../assets/login.jpg";
import filter from "../assets/filter.jpg";
import details from "../assets/details.jpg";
import order from "../assets/order-model.jpg";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <div className="row project">
        <div className="col-lg-6 col-md-12 col-sm-12 leftside">
          <h1>Project Name : Zomatoo</h1>
          <p>
            <b>Overview</b> : Zomatoo is a comprehensive web application
            designed to facilitate the online ordering of food from various
            restaurants. The platform provides users with a seamless experience
            in discovering, filtering, and ordering their favorite meals.
            Leveraging modern web technologies like React, Node.js, Express.js,
            and MongoDB. Zomatoo offers a user-friendly interface, efficient
            data handling, and scalable backend services.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 rightside">
          <img src={avatar}></img>
        </div>
      </div>
      <div className="row tech">
        <div className="col-lg-6 col-md-12 col-sm-12 tech-stack">
          <h2>Technical Stack :</h2>
          <dl>
            <dt>
              <u>Front End</u>
            </dt>
            <dd>
              <b>HTML & CSS :</b> For the structure and styling of the user
              interface. <br />
              <b>React :</b> For building a dynamic, component-based UI that
              updates efficiently with user interactions.
            </dd>
            <dt>
              <u>Back End</u>
            </dt>
            <dd>
              <b>Node.js & Express.js :</b> For server-side logic, API
              development, and handling client-server communication.
              <br />
              <b>MongoDB:</b> As a NoSQL database for storing user data, orders,
              and restaurant information.
            </dd>

            <dt>
              <u>Additional Technologies</u>
            </dt>
            <dd>
              <b>Axios:</b> For making HTTP requests from the frontend to the
              backend.
              <br />
              <b>Mongoose:</b> For MongoDB object modeling, providing a
              schema-based solution to model application data.
            </dd>
          </dl>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 tec-image">
          <img src={tech} className="tech-img"></img>
        </div>
      </div>
      <div className="row screenshots">
        <h1>Screenshots</h1>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={login} alt="" />
          <img src={filter} alt="" />
          <img src={quicksearch} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={home} alt="" />
          <img src={details} alt="" />
          <img src={order} alt="" />
        </div>
      </div>
      <footer class="bg-dark text-white text-center py-3 ">
        <h4>
          <a href="https://zomatoo.onrender.com/" target="_blank">
            Click here
          </a>{" "}
          <span> </span>
          to visit my project.
        </h4>
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

export default Projects;
