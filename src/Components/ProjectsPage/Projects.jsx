import React, { useState, useEffect } from "react";
import "./Projects.css";
import Works from "./Works/Works";

import { NikeCard } from "../nikeCard/index1";
import { NikeCard2 } from "../nikeCard/index2";
import { NikeCard3 } from "../nikeCard/index3";
import { NikeCard4 } from "../nikeCard/index4";
import Lottie from 'react-lottie';
import animationData from '../../lotties/yoga.json';

function Projects() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
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
           <Lottie 
	      options={defaultOptions}
        height={400}
        width={400}
      />
        </div>
      ) : (
        <>
          <div className="projects container mx-auto mt-5 pt-5" style={{    justifyContent: "center",rowGap:'60px',columnGap:'100px',display:'flex',flexWrap:'wrap',overflow:'hidden'}}>
          <h3 style={{position:'absolute',zIndex:'-1',display:'flex',justifyContent:'center',alignItems:'center'}}>DESTROYED</h3>
              <div><NikeCard /></div>
              <div><NikeCard2 /></div>
              <div><NikeCard3 /></div>
              <div><NikeCard4 /></div>

          </div>

          <Works />
        </>
      )}
    </>
  );
}

export default Projects;
