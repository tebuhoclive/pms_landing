import React from "react";

const Function2: React.FC = () => {
  const sectionStyle = {
   marginTop:'150px',
    //width: '1207px',
    height: "500px",
    flexShrink: 0,
  };
  return (
    <section
      className="uk-section uk-section-muted uk-border-rounded uk-flex uk-flex-center"
      style={sectionStyle}
    >
      <div className="uk-container uk-text-center">
        <h2>Function 2</h2>
        
        {/* Testimonies content */}
      </div>
    </section>
  );
};

export default Function2;
