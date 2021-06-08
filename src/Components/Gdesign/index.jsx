import React from "react";
import { useHistory } from "react-router";
import "./style.css";

function Gdesign() {
  const history = useHistory();

  return (
    <div
      className="design__section m-0 mt-5 row pt-3 container-fluid"
      style={{ overflow: "hidden" }}
    >
      <div class="center col-md-6">
        <div class="group1">
          <h2 class="title__graphic border-botto border-to">Graphic</h2>
        </div>
        <div class="group2">
          <h2 class="border-righ">Designer</h2>
          <h3>Motion</h3>
          <h3>Graphics</h3>
        </div>
      </div>

      <div
        className="col-md-6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="code__content">
          “Focus on the user and all else will follow." Designing imperfectly
          perfect stuff.{" "}
          <span
            style={{
              color: "#ff0a54",
              fontSize: "18px",
              letterSpacing: "3px",
              fontWeight: "500",
              fontFamily: "code",
              lineHeight: "32px",
            }}
          >
            Characters, animations, logo design and video editing.
          </span>
          More of a Hobby! For More details visit About Page
        </div>
        <div className="design__button">
          <button className="press mt-5" onClick={() => history.push("/about")}>
            More About Me!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gdesign;
