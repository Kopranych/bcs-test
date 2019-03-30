/* eslint-disable react/prop-types */
import React from 'react';


const Page = ({ children }) => (
  <div className="container-view">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          Search instrument
        </div>
        <div className="col-md-9">
          { children }
        </div>
      </div>
    </div>
  </div>
);

export default Page;
