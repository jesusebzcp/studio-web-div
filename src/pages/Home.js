import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/banner_home.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="lottie">
        <Lottie options={defaultOptions} />
      </div>
      <div className="ContParrafo">
        <p>
          Te ofrecemos la mejor alternativa del mercado para el desarrollo de
        </p>
        <p>
          {" "}
          imagen corporativa, diseño de página web y estrategia digital para tú
        </p>
        <p> empresa</p>
      </div>
      <div className="ContBtn">
        <a href="!#" className="btnP">
          Creeemos algo juntos
        </a>
      </div>
    </>
  );
};

export default Home;
