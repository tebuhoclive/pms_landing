import React from "react";

import VerticalLine from "./VerticalLine";

const Testimonies: React.FC = () => {
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
          <div
            className="uk-flex uk-flex-between"
            style={{ backgroundColor: "white", borderRadius: "23px" }}
          >
            <div className="uk-width-1-2 uk-text-left">
              <h1
                className="uk-margin-remove-bottom"
                style={{
                  color: "#EB1717",
                  fontFamily: "Lato",
                  fontSize: "39.67px",
                  fontStyle: "normal",
                  fontWeight: 900,
                  lineHeight: "150%" /* 59.505px */,
                  letterSpacing: "-0.873px",
                }}
              >
                Achieve Effective Strategy Execution with Real-Time Monitoring
              </h1>

              <p
                className="uk-margin-remove-top"
                style={{
                  color: "rgba(0, 0, 0, 0.80)",
                  fontFamily: "Lato",
                  fontSize: "21.67px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "150%" /* 32.505px */,
                  letterSpacing: "-0.477px",
                }}
              >
                Our performance management systems provide reliable, real-time
                data to inform decision-making and strategy design, enabling you
                to monitor the effectiveness of existing strategies and align
                them with organizational goals.
              </p>
            </div>
            <div className="uk-width-1-2 uk-flex uk-flex-center uk-flex-middle">
              <img
                src="./public/lots.png"
                alt="Image"
                className="uk-align-center"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <VerticalLine />
    </section>
  );
};

export default Testimonies;
