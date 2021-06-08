import React, { useState } from "react";
import "./About.css";
import { SiRedux, SiMongodb, SiMysql, SiFlask } from "react-icons/si";
import { FaHtml5, FaJava, FaReact, FaNode } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import aboutme from "../../images/aboutme.png";

function About() {
  const [detail, setDetail] = useState("perfect");

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: "6px 16px",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className="about row container-fluid mt-5">
        <div className="col-md-6 image__container__about">
          <img src={aboutme} alt="my image" className="my_about_image" />
        </div>
        <div className="col-md-6 about__back">
          <div className="about__title">
            <h1 contenteditable className="about-title" data-heading="About">
              ABOUT
            </h1>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <button
          onClick={() => setDetail("short")}
          className="small__btn press mt-5"
        >
          Short Version
        </button>
        <button
          onClick={() => setDetail("perfect")}
          className="small__btn press mt-5"
        >
          Perfect!
        </button>
        <button
          onClick={() => setDetail("long")}
          className="small__btn press mt-5"
        >
          Too detailed
        </button>
      </div>

      <div className="row mt-5 " style={{ justifyContent: "center" }}>
        <div
          className="intro col-md-6"
          style={{ border: "2px solid rgb(255, 10, 84)", padding: "10px" }}
        >
          {(detail === "short" && (
            <div
              className="footer__content"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                fontSize: "2em",
              }}
            >
              Just Another IITian!
            </div>
          )) ||
            (detail === "perfect" && (
              <div
                className="footer__content"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  fontSize: "2em",
                }}
              >
                Utkarsh here, student at IIt BHU, i speacialize in react and
                redux on frontend and node for the backend (MERN Stack). For
                more check the skills below.
              </div>
            )) ||
            (detail === "long" && (
              <div
                className="footer__content"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  fontSize: "2em",
                }}
              >
                Hey Utkarsh here! Currently pursuing B.Tech from IIT (BHU).
                Qualified as Full Stack developer and also have an interest in
                Stock Trends and Business Markets and try to utilise my idle
                time in exploring various aspects about them. "A deferential and
                quintessential soul" - that is how my friends and acquaintances
                would describe me. Been on board with events and clubs of the
                college, I have achieved a sense of commitment and
                comprehensiveness towards anything and everything that I take up
                professionally. I love to make my workplace and fellow team
                mates ebullient [because a positive workplace makes your energy
                move into the right direction and that is how it works ;) ].
                Acing communication skills, Bosting management and planning
                skills and spiffing executive competency are some of the knacks
                that I have been able to acquire with time and I still continue
                to grow and learn in whatever ways I can
              </div>
            ))}
        </div>
      </div>

      <h2
        className="mt-5 pt-3 tech__stack"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "code",
          textAlign: "center",
        }}
      >
        Tech Stack
      </h2>
      <div className="row skills mt-5">
        <div className="col-md-6">
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 251, 235)" }}>
                  <FaHtml5
                    style={{ fontSize: "32px", color: "rgb(255, 10, 84)" }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    Nothing Special Usual start with HTML5, CSS3, JS <br />
                    <b style={{ color: "red" }}>( JS developer )</b>
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 10, 84)" }}>
                  <FaReact
                    style={{ fontSize: "32px", color: "rgb(255, 251, 235)" }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    React came to me as a fancy word took and dropped it many
                    times but eventually <br />{" "}
                    <b style={{ color: "red" }}>( React developer )</b>{" "}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 251, 235)" }}>
                  <SiRedux
                    style={{ fontSize: "32px", color: "rgb(255, 10, 84)" }}
                  />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    leveled up with <br />{" "}
                    <b style={{ color: "red" }}> hooks and redux</b>
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 10, 84)" }}>
                  <FaJava
                    style={{ fontSize: "32px", color: "rgb(255, 251, 235)" }}
                  />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    Java for programming ( not a pro at it ) but <br />{" "}
                    <b style={{ color: "red" }}>
                      {" "}
                      exploring oppurtunities to become better!
                    </b>{" "}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        <div className="col-md-6">
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 251, 235)" }}>
                  <FaNode
                    style={{ fontSize: "32px", color: "rgb(255, 10, 84)" }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    Started backend with node.js (express) <br />
                    <b style={{ color: "red" }}>( API developer )</b>
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 10, 84)" }}>
                  <SiMongodb
                    style={{ fontSize: "32px", color: "rgb(255, 251, 235)" }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    Worked with non-relational databases <br />{" "}
                    <b style={{ color: "red" }}>( MongoDB )</b>{" "}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 251, 235)" }}>
                  <SiMysql
                    style={{ fontSize: "32px", color: "rgb(255, 10, 84)" }}
                  />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    Medium level expertise in relational databases <br />{" "}
                    <b style={{ color: "red" }}> ( MySql )</b>
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(255, 10, 84)" }}>
                  <SiFlask
                    style={{ fontSize: "32px", color: "rgb(255, 251, 235)" }}
                  />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography>
                    Made personal projects requiring ML using <br />{" "}
                    <b style={{ color: "red" }}> FLASK </b>{" "}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
}

export default About;
