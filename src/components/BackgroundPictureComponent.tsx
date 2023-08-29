

const BackgroundPictureComponent = () => {
  const sectionStyle = {
    backgroundImage: `url(./public/young-man.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "60vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section className="uk-section uk-flex uk-flex-middle" style={sectionStyle}>
      {/* ... */}
    </section>
  );
};

export default BackgroundPictureComponent;
