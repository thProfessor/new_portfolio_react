import React, { useEffect, useState } from "react";
import "./Home.css";
import Code from "../Code/Code";
import Gdesign from "../Gdesign";
import PuffLoader from "react-spinners/PuffLoader";

function Home() {
  const [loading, setLoading] = useState(false);
  let spansSlow = "";
  let spansFast = "";
  let width = window.innerWidth;

  function handleMouseMove(e) {
    let normalizePosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizePosition;
    let speedFast = 200 * normalizePosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`;
    });
  }

  useEffect(() => {
    spansSlow = document.querySelectorAll(".spanSlow");
    spansFast = document.querySelectorAll(".spanFast");
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            zIndex: 10000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PuffLoader loading={loading} size={150} />
        </div>
      ) : (
        <>
          <div className="home__text__container container-fluid">
            <div
              className="wrap container-fluid mx-auto"
              onMouseMove={handleMouseMove}
            >
              <div className="line">
                <div className="left">
                  <div className="content">
                    <span className="spanSlow">"I drink</span>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <span className="spanSlow">"I drink</span>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left">
                  <div className="content">
                    <span className="spanSlow">coffee and</span>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <span className="spanSlow">coffee and</span>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left">
                  <div className="content">
                    <span className="spanFast">i do</span>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <span className="spanFast">i do</span>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="left">
                  <div className="content">
                    <span className="spanSlow">coding"</span>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <span className="spanSlow">coding"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Code />
          <Gdesign />
        </>
      )}
    </>
  );
}

export default Home;
