import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <header className="uk-text-center uk-padding">
      <div className="uk-flex uk-flex-wrap">
        <div className="uk-width-1-1 uk-width-1-2@s uk-flex-middle">
          {/* Content for the first div */}
          <div className="uk-width-expand uk-text-left">
            <h1>Save time, Manage, Motivate and Develop Human Resources</h1>
            <p>Enhance Organizational Strategy Implementation and Reporting Efficiency with a Digital Performance Management System.</p>
            <a className="uk-button uk-button-primary" href="#">
              View Products
            </a>
          </div>
        </div>

        <div className="uk-width-1-1 uk-width-1-2@s uk-flex-middle">
          {/* Content for the second div */}
          <img src="./public/Rectangle.png" alt="Image" className="uk-align-center uk-width-1-1" style={{ height: 'auto' }} />
        </div>
      </div>
    </header>
  );
}

export default MyComponent;
