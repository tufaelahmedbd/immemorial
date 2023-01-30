import { useRef } from "react";
import { useGsapNotFoundHeadline } from "../hooks/gsap";
const NotFound = ({ needFullHeight }) => {
  const leftHeadlineRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef, 1.4);
  return (
    <section className={`not-found wrapper ${needFullHeight && "min-h-100vh"}`}>
      <h2 className="section-title">Not found</h2>
      <div className="headline-1" ref={leftHeadlineRef}>
        Sorry, we couldn't find that page
      </div>
    </section>
  );
};

export default NotFound;
