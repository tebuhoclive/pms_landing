import React from "react";

const MyComponent: React.FC = () => {
  return (
    <header className="uk-text-center uk-padding">
      <div className="uk-flex uk-flex-wrap">
        <div className="uk-width-1-1 uk-width-1-2@s uk-flex-middle">
          {/* Content for the first div */}
          <div className="uk-width-expand uk-text-left">
            <h1>Save time, Manage, Motivate and Develop Human Resources</h1>
            <p>
              Enhance Organizational Strategy Implementation and Reporting
              Efficiency with a Digital Performance Management System.
            </p>
            <a
              className="uk-button uk-button-primary"
              style={{
                backgroundColor: "transparent",
                borderRadius: "23px",
                border: "4px solid #EB1717",
              }}
              href="#"
            >
              Sign Up Now
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Arrow 1"
                  d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z"
                  fill="#EB1717"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="uk-width-1-1 uk-width-1-2@s uk-flex-middle">
          {/* Content for the second div */}
          <img
            src="./public/Rectangle.png"
            alt="Image"
            className="uk-align-center uk-width-1-1"
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </header>
  );
};

export default MyComponent;
