import React from 'react';
import s from '../../../styles/shared/styles.css';
import Spacer from '../../../components/Spacer/Spacer';

function Creations() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>Customer Creations</h2>
          <p className={s.subHeader}>
            Get inspired and share your creations with us! You could be featured on our site
          </p>
          <Spacer value={3} />
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <img src="https://via.placeholder.com/300x300" alt="" className="center-block" />
          <p>Submitted By <strong>John</strong></p>
          <p><strong>Coming soon!</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Creations;
