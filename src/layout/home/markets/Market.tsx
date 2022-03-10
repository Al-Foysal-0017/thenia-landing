import React from "react";
import { motion } from "framer-motion";
import markets from "../../../assets/image/markets.png";
import { Subtitle } from "../../../components";
import { useScroll } from "../../../hooks/useScroll";
import { cardAnimation } from "../../../utils/Animations";
import SequenceTxt from "./sequenceTxt/LargeTxt/SequenceTxt";
import SequenceTxtMobile from "./sequenceTxt/mobileTxt/SequenceTxt";
import "./_markets.scss";

const Market = () => {
  const [element, controls]: any = useScroll();
  return (
    <>
      <div className="markets" ref={element}>
        <motion.div
          variants={cardAnimation}
          animate={controls}
          transition={{ type: "spring", duration: 0.5 }}
          className="markets__marketsImg"
        >
          <img
            src={markets}
            alt="markets"
            style={{ maxWidth: "600px", maxHeight: "550px" }}
          />
        </motion.div>
        <div className="markets__content">
          <h4> For visionaries</h4>
          <Subtitle className="">Markets</Subtitle>
          <div className="markets__content__paragraph">
            <p className="markets__content__paragraph__item">
              You live in the &nbsp;
              <span className="sequence-txt-desktop" style={{ color: "#fff" }}>
                <SequenceTxt /> &nbsp;
              </span>
              <span className="sequence-txt-mobile" style={{ color: "#fff" }}>
                <SequenceTxtMobile />
                &nbsp;
              </span>{" "}
              rabbit hole.
            </p>
            <p className="markets__content__paragraph__item">
              Become a market founder and onboard the projects you are convinced
              will change the world.
            </p>
            <p className="markets__content__paragraph__item">
              Earn revenue by taking a commission on the projects in your
              market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
