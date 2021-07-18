import React from "react";
import "./Code.css";
import Uttu from "../../images/uttu.png";
import { useHistory } from "react-router";
import Resume from "../../resume.pdf";
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import animationData from '../../lotties/code.json';

function Code() {

  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="row container mx-auto align-items-center">
      <div className="col-md-7 px-2">
        <div className="code__title">
          <motion.img
            className="photu"
            src={Uttu}
            drag
            dragConstraints={{ top: 5, left: 5, right: 5, bottom: 5 }}
            style={{ cursor: "grab" }}
          />
          <h2 className="code__title__heading">Software Developer</h2>
        </div>
        <div className="code__content">
          "Remember, repeating an action makes a habit. Your habits create your
          character. And your character is your destiny. May success be your
          destiny"
          <span
            style={{
              color: "#ff0a54",
              fontSize: "18px",
              letterSpacing: "3px",
              fontWeight: "500",
              fontFamily: "code",
            }}
          >
            Full Stack Developer
          </span>
          , willing to solve real-world problems.Industrious approachwith loads
          of{" "}
          <span
            style={{
              color: "#ff0a54",
              fontSize: "18px",
              letterSpacing: "3px",
              fontWeight: "500",
              fontFamily: "code",
            }}
          >
            {" "}
            creativity.
          </span>{" "}
          Socializer and always open for suggestions.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
            flexWrap: "wrap",
          }}
          className="container mt-4"
        >
          <button
            className="press mt-5"
            onClick={() => history.push("/contact")}
          >
            Hire me!
          </button>
          <a
            target="_blank"
            rel="noreferrer"
            href={Resume}
            download
            className="explore-button mt-5"
            style={{ textAlign: "center", width: "300px" }}
          >
            Resume
          </a>
        </div>
      </div>
      <div className="code col-md-5 container-fluid ">
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      </div>
    </div>
  );
}

export default Code;
