import React from 'react';
import Spacer from '../../../components/Spacer';

function Features() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>Features</h2>
          <Spacer value={4} />
        </div>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Durable Finish</h3>
              <p>
                {`Solid steel construction accompanied with a UV Powder
                  Coat paint finish ensure these brackets will withstand
                  even the harshest of climates & stay true for years to come`}
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>3 Custom Angle Settings</h3>
              <p>
                {`Each bracket can be set in 3 different angles to
                  maximize your ability to create whatever shape, in any
                  space! With 45, 90 & 180 degree rotation capabilities
                  gone are the days of making a generic square box - get
                  creative and play with your angles`}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Accessories</h3>
              <p>
                {`Each bracket in your set of 4 comes fully equipped
                  with Decorative top caps, for a seamless finish in the
                  garden. Also included are ground cleats which can be
                  removed to enjoy your build on a deck, rock bottom, or
                  other surfaces`}
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>Make Set Up A Snap</h3>
              <p>
                {`These brackets build the frame for you; simply set your
                  brackets in place, slide your timbers into place to
                  connect and screw together! It’s easy to change your
                  design, & there’s no measuring to make even beautiful lines`}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Stacking Joints</h3>
              <p>
                {`Quick fact, your ground cleats act as your stacking
                  joint for endless growth. Simply remove decorative top
                  cap and snap & stack your next level into place! No
                  added tools required & no hassle for additions to your
                  creation each & every year`}
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>Additional Possibilities</h3>
              <p>
                {`The brackets are so durable you can make other items
                  outside the garden, including Sand Boxes, Open Storage,
                  or combine with curved / straight timbers for Edging
                  around any outdoor space.....limitless`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
