import React from 'react';
import s from '../../../styles/shared/styles.css';
import Spacer from '../../../components/Spacer';

function How() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>How It Works</h2>
          <Spacer value={1.5} />
          <p className={s.subHeader}>
            {`The bracket system is built with the highest quality of
              materials. The solid steel construction can rotate 3 angles
              45, 90, and 180 degrees, and stack for multiple levels! You
              can alternate angles which is how you build any garden with
              any shape. It doesn’t stop there, build gardens, sandboxes,
              edging, open storage and more! Built to last year over year,
              we know you’ll love your Uneak Experience`}
          </p>
          <Spacer value={4} />
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <i className="fa fa-check-circle-o fa-3x" aria-hidden="true" />
          <h3>Choosing the Angle</h3>
          <Spacer value={1.5} />
          <p>
            {`Pull brackets apart following arrows rotate to desired angle
              and snap down into place`}
          </p>
          <Spacer value={1} />
          <img
            className="img-responsive center-block"
            src="/images/how-to-1.png"
            width="300"
            height="300"
            alt=""
          />
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <i className="fa fa-check-circle-o fa-3x" aria-hidden="true" />
          <h3>Stacking</h3>
          <Spacer value={1.5} />
          <p>
            {`Remove the top cap on the base bracket & snap 2nd tier bracket
              into top cap slot. Stacked, locked & ready`}
          </p>
          <Spacer value={1} />
          <img
            className="img-responsive center-block"
            src="/images/how-to-2.png"
            width="300"
            height="300"
            alt=""
          />
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <i className="fa fa-check-circle-o fa-3x" aria-hidden="true" />
          <h3>Adding Timbers</h3>
          <Spacer value={1.5} />
          <p>
            {`Align timbers with slot opening, push timbers into opening,
              screw timbers into place`}
          </p>
          <Spacer value={1} />
          <img
            className="img-responsive center-block"
            src="/images/how-to-3.png"
            width="300"
            height="300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default How;
