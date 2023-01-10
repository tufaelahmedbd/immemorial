import { useRef } from "react";

const Hero = () => {
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  return (
    <section className="hero wrapper">
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;
