import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <Marquee pauseOnHover={true} speed={50}>
        <p>hello! world. I am a marquee component from react-fast-marquee</p>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
