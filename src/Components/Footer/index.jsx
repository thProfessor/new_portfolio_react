import React from "react";
import "./style.css";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaGithub,
  FaGooglePlusSquare,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="footer container mt-5"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <IconContext.Provider
          value={{
            color: "#ff0a54",
            size: "3em",
            className: "global-class-name",
          }}
        >
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100053190831556"
          >
            <FaFacebookSquare />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "#ff0a54",
            size: "3em",
            className: "global-class-name",
          }}
        >
          <a target="_blank" href="https://github.com/thProfessor">
            <FaGithub />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "#ff0a54",
            size: "3em",
            className: "global-class-name",
          }}
        >
          <a
            style={{ zIndex: 1 }}
            target="_blank"
            href="mailto:utkrs.sukla99@gmail.com"
          >
            <FaGooglePlusSquare />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "#ff0a54",
            size: "3em",
            className: "global-class-name",
          }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/utkarsh-shukla-1259b6139/"
          >
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
      <div
        className="mt-5 py-4 footer__content"
        style={{
          backgroundColor: "#fffbeb",
          display: "flex",
          justifyContent: "center",
          fontSize: "2em",
        }}
      >
        Made using React and Hooks{" "}
        <span className="mt-2 ml-3" style={{ fontSize: "1em" }}>
          <IconContext.Provider
            value={{ color: "#ff0a54", className: "global-class-name" }}
          >
            <FaHeart />
          </IconContext.Provider>
        </span>
      </div>
    </>
  );
}

export default Footer;
