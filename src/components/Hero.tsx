import React from "react";

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
        <h2>Embrace Digital Transformation</h2>
        <p>
          Streamline Data Extraction and Reporting. Our performance management
          systems leverage automation to eliminate reliance on environmentally
          unsustainable paper-based processes. Instead of laboriously sifting
          through countless forms, our system effortlessly provides the required
          employee information, enabling efficient data extraction and precise
          reporting.
        </p>
        <a className="uk-button uk-button-primary" href="#">
          View Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
