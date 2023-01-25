import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gspa";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  useGsapFooterHeadline(footerHeadlineRef, footerRef);
  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadlineRef}>Bonjour</h1>
      <p>
        &copy;{new Date().getFullYear()} Immemorial. Crafted by yours truely
      </p>
    </section>
  );
};

export default Footer;
