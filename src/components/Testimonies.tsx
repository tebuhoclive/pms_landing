import React from "react";

const Testimonies: React.FC = () => {
  const sectionStyle = {
    marginLeft: "100px",
    marginRight: "100px",
    //width: '1207px',
    height: "700px",
    flexShrink: 0,
  };

  const headingStyle = {
    color: "red", // Set font color to black
  };

  const paragraphStyle = {
    color: "black", // Set font color to black
  };

  return (
    <section
      className="uk-section uk-section-muted uk-border-rounded uk-flex uk-flex-center uk-padding"
      style={sectionStyle}
    >
      <div className="uk-flex">
        <div className="uk-width-1-2">
          {/* Content for the first div */}
          <div className="uk-flex uk-flex-left uk-width-1-1 uk-text-left">
            <h1 style={headingStyle}>
              Achieve Effective Strategy Execution with Real-Time Monitoring
            </h1>
          </div>
          <div className="uk-flex uk-flex-right uk-width-1-1 uk-text-left">
            <p style={paragraphStyle}>
              Our performance management systems provide reliable, real-time
              data to inform decision-making and strategy design, enabling you
              to monitor the effectiveness of existing strategies and align them
              with organizational goals.
            </p>
          </div>
        </div>

        <div className="uk-width-1-2 uk-flex-right">
          <img
            src="./public/stat.png"
            alt="Image"
            className="uk-align-right"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          {/* Content for the second div */}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
