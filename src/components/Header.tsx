import React from 'react';

const MyComponent: React.FC = () => {
    return (
        <header className="uk-text-center uk-padding">
        <div className="uk-flex">
          <div className="uk-width-1-2">
            {/* Content for the first div */}
            <div className="uk-flex uk-flex-left uk-width-1-2 uk-text-left">
              <h1>Save time, Manage, Motivate and Develop Human Resources</h1>
            </div>
            <div className="uk-flex uk-flex-right uk-width-1-2 uk-text-left">
              <p>Enhance Organizational Strategy Implementation and Reporting Efficiency with a Digital Performance Management System.</p>
            </div>
            <a className="uk-button uk-button-primary  uk-flex-left" href="#">
          View Products
        </a>
          </div>

          <div className="uk-width-1-2 uk-flex-right">
         
         <img src="./public/Rectangle.png" alt="Image" className="uk-align-right" style={{ maxWidth: '100%', height: 'auto' }} />
   

            {/* Content for the second div */}
           
            </div>
        </div>
      </header>
      

    );
}

export default MyComponent;
