import React, { useState } from "react";
import emailjs from "emailjs-com";

import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import card_uttu from "../../images/card_uttu2.png";
import logo_final from "../../images/logo_final.png";
import "./Contact.css";

const StyledRating = withStyles({
  iconFilled: {
    color: "pink",
  },
  iconHover: {
    color: "rgb(255, 10, 84)",
  },
})(Rating);

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState(2);
  const isMobile = useMediaQuery("(max-width:540px)");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tq3tn6q",
        "template_jk2sx45",
        e.target,
        "user_tbf7dgINSIo0LtRhZIENJ"
      )
      .then(
        (result) => {
          setSubmit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {submit ? (
        <div className="mt-5 pt-5 container mx-auto">
          <h2 style={{ color: "rgb(255, 10, 84)" }}>
            thanks for your text will get back soon!
          </h2>
        </div>
      ) : (
        <div className="row container mt-4 contact__form mx-auto">
          <div
            className="mt-5 col-md-4 mx-auto pt-4 contact__form__wrapper"
            style={{
              backgroundColor: "#ff5d8f",
            }}
          >
            <form className="contact-form" onSubmit={sendEmail}>
              <input
                className="text__area__fields"
                type="hidden"
                name="subject"
              />
              <label className="top__heading">Name</label>
              <input className="text__area__fields" type="text" name="name" />
              <label className="top__heading mt-5">Email</label>
              <input className="text__area__fields" type="email" name="email" />
              <label className="top__heading mt-5">Message</label>
              <textarea className="text__area__fields" name="message" />
              <label className="top__heading mt-5">
                Rating:select hearts before sending :)
              </label>

              <input
                className="text__area__fields"
                type="text"
                name="rating"
                placeholder={rating}
                disabled="disabled"
              />

              <input className="press mt-3" type="submit" value="Send" />
            </form>
            {isMobile && (
              <Box component="fieldset" mt={2} borderColor="transparent">
                <StyledRating
                  name="customized-color"
                  defaultValue={2}
                  getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={1}
                  icon={<FavoriteIcon style={{ fontSize: "1.2em" }} />}
                  onClick={(e) => {
                    setRating(e.target.value);
                  }}
                />
              </Box>
            )}
            {isMobile || (
              <Box component="fieldset" mt={2} borderColor="transparent">
                <StyledRating
                  name="customized-color"
                  defaultValue={2}
                  getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={1}
                  icon={<FavoriteIcon style={{ fontSize: "0.6em" }} />}
                  onClick={(e) => {
                    setRating(e.target.value);
                  }}
                />
              </Box>
            )}
          </div>

          <div
            className="col-md-6  mt-5 pl-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateX(-10%)",
            }}
          >
            <div className="wrapper">
              <div
                className="card card--19"
                style={{ boxShadow: "2px 2px 5px 5px pink" }}
              >
                <div className="card__header card__header--19">
                  <div className="card__watermark" data-watermark="US"></div>

                  <img
                    src={logo_final}
                    alt="Nike"
                    className="card__logo card__will-animate"
                  />

                  <span className="card__price card__will-animate">IITian</span>

                  <span className="card__subtitle card__will-animate">
                    "Glad to see You reached here! Do Write"
                  </span>
                </div>

                <div className="card__body">
                  <img
                    src={card_uttu}
                    alt="Nike 19"
                    className="card__image card__will-animate"
                  />

                  <span className="card__category card__will-animate">Mee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
