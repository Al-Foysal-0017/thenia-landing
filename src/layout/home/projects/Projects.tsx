import React from "react";
import { motion } from "framer-motion";
import projects from "../../../assets/image/projects.png";
import { Subtitle } from "../../../components";
import { useScroll } from "../../../hooks/useScroll";
import { cardAnimation } from "../../../utils/Animations";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "./_projects.scss";

const BlogCommunity = () => {
  const [element, controls]: any = useScroll();
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 919 && (
        <div className="projects" ref={element}>
          <div className="projects__content">
            <h4> For creators</h4>
            <Subtitle className="">Projects</Subtitle>
            <div className="projects__content__paragraph">
              <p className="projects__content__paragraph__item">
                You have an idea that will solve a challenging problem.
              </p>
              <p className="projects__content__paragraph__item">
                Become a project creator and get onboarded by a market you
                trust.
              </p>
              <p className="projects__content__paragraph__item">
                Raise money from investors to turn your idea into reality.
              </p>
            </div>
          </div>
          <motion.div
            className="projects__projectImg"
            variants={cardAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <img
              src={projects}
              alt="projects"
              style={{ maxWidth: "600px", maxHeight: "550px" }}
            />
          </motion.div>
        </div>
      )}
      {width < 920 && (
        <div className="projectsForTablet">
          <div className="projects" ref={element}>
            <motion.div
              variants={cardAnimation}
              animate={controls}
              transition={{ type: "spring", duration: 0.5 }}
              className="projects__projectsImg"
            >
              <img
                src={projects}
                alt="projects"
                style={{ maxWidth: "600px", maxHeight: "550px" }}
              />
            </motion.div>
            <div className="projects__content">
              <h4> For creators</h4>
              <Subtitle className="">Projects</Subtitle>
              <div className="projects__content__paragraph">
                <p className="projects__content__paragraph__item">
                  You have an idea that will solve a challenging problem.
                </p>
                <p className="projects__content__paragraph__item">
                  Become a project creator and get onboarded by a market you
                  trust.
                </p>
                <p className="projects__content__paragraph__item">
                  Raise money from investors to turn your idea into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCommunity;
