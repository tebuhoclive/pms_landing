import React from "react";


const BackgroundPictureComponent = () => {
  const sectionStyle = {
    backgroundImage: `url(./public/young-man.png)`, // Use the provided image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "60vh", // Set a minimum height to cover the entire viewport

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section style={sectionStyle}>
      
     
    </section>
  );
};

export default BackgroundPictureComponent;
