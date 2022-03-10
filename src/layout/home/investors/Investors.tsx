import React from "react";
import { motion } from "framer-motion";
import investors from "../../../assets/image/investors.png";
import { Subtitle } from "../../../components";
import { useScroll } from "../../../hooks/useScroll";
import { cardAnimation } from "../../../utils/Animations";
import "./_investors.scss";

const Investors = () => {
  const [element, controls]: any = useScroll();
  return (
    <>
      <div className="investors" ref={element}>
        <motion.div
          variants={cardAnimation}
          animate={controls}
          transition={{ type: "spring", duration: 0.5 }}
          className="investors__investorsImg"
        >
          <img
            src={investors}
            alt="investors"
            style={{ maxWidth: "600px", maxHeight: "550px" }}
          />
        </motion.div>
        <div className="investors__content">
          <h4>For Believers</h4>
          <Subtitle>Investors</Subtitle>
          <div className="investors__content__paragraph">
            <p className="investors__content__paragraph__item">
              You are passionate about a topic.
            </p>
            <p className="investors__content__paragraph__item">
              Support the ideas and people you believe in.
            </p>
            <p className="investors__content__paragraph__item">
              Invest in projects and markets to share in the economic growth of
              the communities you’ve helped build.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;
