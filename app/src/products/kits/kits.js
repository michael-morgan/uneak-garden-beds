import React from 'react';
import s from '../../../styles/shared/styles.css';
import Spacer from '../../../components/Spacer';

function Kits() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>Kits</h2>
          <p className={s.subHeader}>
            Premium & durable! Combine kits to make larger, custom shapes & structures
          </p>
          <Spacer value={4} />
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/brackets-black-copper.png"
            width="200"
            height="200"
            alt=""
          />
          <h3>4 Brackets</h3>
          <p>
            Includes complete set of 4 Uneak Brackets. Choose from 2 colours
          </p>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/lumber-1.png"
            width="200"
            height="200"
            alt=""
          />
          <h3>4 Timbers</h3>
          <p>
            Includes 4 Uneak Premium Composite Timbers in 2 colours
          </p>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/screws-1.png"
            width="200"
            height="200"
            alt=""
          />
          <h3>All Screws Included</h3>
          <p>
            No need to shop for quality screws, we have it covered, all 32
          </p>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <img
            className="img-responsive center-block"
            src="/images/bed-grey-1.png"
            width="300"
            height="300"
            alt=""
          />
          <span><strong>$119.99 USD/$149.99 CAD</strong></span>
          <h3>Grey Timber Black Bracket</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/3" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <img
            className="img-responsive center-block"
            src="/images/bed-brown-2.png"
            width="300"
            height="300"
            alt=""
          />
          <span><strong>$119.99 USD/$149.99 CAD</strong></span>
          <h3>Chestnut Timber Copper Bracket</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/4" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Kits;
