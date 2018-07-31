import React from 'react';
import Spacer from '../../../components/Spacer';

function Details() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>App Details</h2>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h3>Build with Uneak Timbers</h3>
          <p>
            {`Once you begin building, you’ll drag & drop Uneak
              Timbers & Brackets to create your structure - you have
              the option once you’re finished to buy all the
              components from us or hit up your local hardware store.
              To build and buy the entire kit including our Uneak
              Wood Composite Timbers simply click "Add Timbers to Cart"`}
          </p>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h3>Buy Your Own Timbers</h3>
          <p>
            {`When choosing this option, remember to unlick "Add
            Timbers to Cart" once you’re finished building your
            garden. This will remove any of our Uneak Timbers from
            your shopping cart when you purchase - but it will still
            generate the instruction guide telling you how many
            timbers you'll need & what lengths they need to be`}
          </p>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h3>Save Your Build for Later</h3>
          <p>
            {`Haven't quite decided if you’re satisfied with your
            build? No worries at all, you can easily come back & edit
            later by clicking "Save my Build for Later" it's that easy`}
          </p>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h3>Perfect Space for Design</h3>
          <p>
            {`If you want a quick build you can design on our generic
              green space background; or if you really want the Uneak
              Experience, upload a photo of the space you want your
              structure & build it to a perfect fit`}
          </p>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h3>Save & Add to Cart</h3>
          <p>
            {`When you have the perfect look & your structure is ready
              to go click the "Save & Add to Cart" button. Be sure to
              check over the summary of purchases before clicking to
              be certain you have all the materials to construct your
              garden when it arrives`}
          </p>
        </div>
        <div className="col-xs-12 col-sm-6">
          <h3>Print Your PDF</h3>
          <p>
            {`Once you've built the perfect structure, click "Save"
            and "Print". The print feature unlocks your tailored
            assembly sheet and bill of all materials needed; length
            & number of timbers, number of brackets & angles to set
            them and lastly how to assemble which pieces & where`}
          </p>
          <Spacer value={8} />
        </div>
        <div className="col-xs-12 col-md-6">
          <h3>
            {`App in Action! Watch As we create a 2 Tier Square Garden
              with Dimensions of 40 Inches X 40 Inches`}
          </h3>
          <p>
            {`This quick demo takes you through all the steps of
              building; from setting different angles, to adding
              multiple tiers & even choosing the right mix of colours`}
          </p>
          <p><strong>Video coming soon!</strong></p>
        </div>
        <div className="col-xs-12 col-md-6">
          <img
            className="img-responsive img-thumbnail"
            src="https://via.placeholder.com/600x600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
