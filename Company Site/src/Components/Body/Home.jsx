import React from "react";
import "./Home.css";
// import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";

const Home = () => {
  return (
    <>
      <div className="main_box">
        <div className="subpart1">
          <img
            src="https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="apple"
          />
        </div>
        <div className="subpart2">
          <h2>
            "Make something people want” includes making a company that people
            want to work for.
          </h2>
          <p>
            We are here to serve the requirements what you actually looking for.
          </p>
          <button className="btn btn-outline-secondary">Hit me</button>
        </div>
      </div>
      <div className="secondBox">
        <div className="cl"></div>
        <div className="heading">
          <h2>
            We build awesome futures through innovation and collective
            knowledge.
          </h2>
        </div>
      </div>

      <div className="secondPhase">
        <img
          src="https://www.updoertechnology.com/static/assets/images/index-meta.gif"
          alt=""
        />
        <h2>
          Our software development company is committed to providing exceptional
          services to our clients. We understand that every project is unique,
          and we work closely with our clients to ensure that we fully
          understand their needs and goals.
        </h2>
      </div>

      <div className="Section3">
        <img
          src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/legacy/future_of_tech_bloggif.gif"
          alt="BannerType"
        />
      </div>
      <div className="Section4">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="web development"
          />
          <div className="card-body">
            <p className="card-text">
              Specialize in full-stack development and focuses on the visual aspects of a website and the user experience .
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="Mobile Application"
          />
          <div className="card-body">
            <p className="card-text">
              Apps are built for specific mobile operating systems and popular
              in recent years.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="web design"
          />
          <div className="card-body">
            <p className="card-text">
              creating and designing the visual elements and overall layout of
              websites and its goals.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="UI/UX Development"
          />
          <div className="card-body">
            <p className="card-text">
              UI development involves designing and building the visual and
              interactive elements of the product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
