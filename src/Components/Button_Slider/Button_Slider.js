import React, { useRef } from "react";
import "./style.css";

import { IconContext } from "react-icons";
import {RiArrowRightSLine as Right } from 'react-icons/ri';
import {RiArrowLeftSLine as Left} from 'react-icons/ri';

const Button_Slider = (props) => {
  let elements = React.Children.toArray(props.children);
  console.log(props.scrollAmount);
  const scroll = props.scrollAmount!==undefined ?props.scrollAmount: 200;
  // const itemwidth = props.itemWidth!==undefined?props.itemWidth:'10rem';

  if (elements.length === 1) {
    elements = React.cloneElement(elements[0])
  }
  else if (elements.length > 0) {
    let lastElement = elements[elements.length - 1]
    elements =
      [React.cloneElement(elements[0])]
        .concat(elements.slice(1, -1))
        .concat(React.cloneElement(lastElement))
  }

  const listRef = useRef(null);

  const showIcons = elements.length > 2;

  const scrollLeft = () => {
    
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left:-scroll,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {

    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left:scroll,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="slide-container">
        {showIcons && (
          <IconContext.Provider value={{color:'red',fontSize:'40px', className: "global-class-name" }}>
            <div>
              <Left 
              onClick={scrollLeft}
              />
            </div>
          </IconContext.Provider>
        )}
        {elements.length > 0 && (
          <div className="items-container" ref={listRef}>
            {
              elements.map((item) => {
                return (
                  <div key={item.id} className="single-item-container">
                    {item}
                  </div>
                );
              })}
          </div>
        )}


        {showIcons && (
          <IconContext.Provider value={{color:'red',fontSize:'40px', className: "global-class-name" }}>
          <div>
            <Right 
            onClick={scrollRight}
            />
          </div>
        </IconContext.Provider>
        )}
      </div>
    </>
  );
};

export default Button_Slider;