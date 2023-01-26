import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll_down">
      <a href="#about" className="mouse__wrapper">
        <span className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="mouse__wheel"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
