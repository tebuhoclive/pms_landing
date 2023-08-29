import React from "react";
import VerticalLine from "./VerticalLine";

const Hero: React.FC = () => {
  return (
    <section
      className="uk-section uk-section-large uk-flex uk-flex-middle uk-background-cover uk-light"
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto", // Center the section horizontally
        textAlign: "center", // Align the text in the center
      }}
    >
      <div className="uk-container">
      <h1>
  Embrace{" "}
  <span style={{
    color: "#EB1717",
    fontFamily: "Press Start 2P",
    fontSize: "40.67px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "-0.895px"
  }}>
    Digital Transformation
  </span>
</h1>

        <p>
          Streamline Data Extraction and Reporting. Our performance management
          systems leverage automation to eliminate reliance on environmentally
          unsustainable paper-based processes. Instead of laboriously sifting
          through countless forms, our system effortlessly provides the required
          employee information, enabling efficient data extraction and precise
          reporting.
        </p>
        <a className="uk-button uk-button-primary" style={{ backgroundColor: "white",borderRadius:"23px", border:  "4px solid #EB1717"}} href="#">
        Download Brochure
        </a>
        <a className="uk-button uk-button-primary" style={{ backgroundColor: "white",borderRadius:"23px", border:  "4px solid #EB1717"}} href="#">
        Contact Us for demo
        </a>
        
      </div>

      <VerticalLine/>
    </section>
  );
};

export default Hero;
