import React from "react";
import Siyahi from "../../../images/siyahi.png";
import Mte from "../../../images/mte.jpg";
import Skilzen from "../../../images/skilzen.png";
import Resume from "../../../resume.pdf";
import "./Works.css";

export default function Works() {
  return (
    <>
      <h3 className="mt-5 heading" style={{ textAlign: "center" }}>
        Experience:
      </h3>
      <div className="cards__company row mx-auto container mt-5">
        <div class="box-wrapper2 col-md-3">
          <img src={Siyahi} alt="rhcp" />
          <div class="box-content2">
            <div class="title2">Siyahi Vocals</div>
            <div class="desc2">Graphic Designer Intern</div>
            <div class="price2">3 Months</div>
          </div>
        </div>

        <div class="box-wrapper2 col-md-3">
          <img src={Mte} alt="rhcp" />

          <div class="title2 mt-2">MedTourEasy</div>
          <div class="desc2">Data Engineer Trainee.</div>
          <div class="price2">1 Month</div>
        </div>

        <div class="box-wrapper2 col-md-3">
          <img src={Skilzen} alt="rhcp" />
          <div class="box-content2">
            <div class="title2">Skilzen</div>
            <div class="desc2">Software Dev</div>
            <div class="price2">3 Months</div>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", width: "300px" }}
        className="container mt-4"
      >
        <a
          target="_blank"
          href={Resume}
          download
          class="explore-button"
          style={{ textAlign: "center" }}
        >
          Resume
        </a>
      </div>
    </>
  );
}
