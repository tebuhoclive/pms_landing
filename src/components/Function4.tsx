import React from "react";
import VerticalLine from "./VerticalLine";

const Function4: React.FC = () => {
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
      <div
        className="uk-container -middle uk-background-primary uk-border-rounded"
        style={{ backgroundColor: "#1c2659" }}
      >
        <div className="uk-flex uk-flex-between">
          <div className="uk-width-1-2 uk-text-left">
            <h1 className="uk-margin-remove-bottom">Heading on Left</h1>
            <p className="uk-margin-remove-top">
              Some text describing the section. function 2
            </p>
          </div>
          <div className="uk-width-1-2 uk-flex uk-flex-center uk-flex-middle">
            <img
              src="./public/Frame.svg"
              alt="Image"
              className="uk-align-center"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>

    <VerticalLine/>
    </section>
  );
};

export default Function4;
