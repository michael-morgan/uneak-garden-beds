import React from 'react';
import s from '../../../styles/shared/styles.css';
import Spacer from '../../../components/Spacer';

function Brackets() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <span id="brackets" className={s.headerAnchor} />
          <h2>Brackets</h2>
          <p className={s.subHeader}>
            DIY with Uneak Corner Brackets, Just add 2x6 timbers or composite
          </p>
          <Spacer value={4} />
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <img
            className="img-responsive center-block"
            src="/images/bracket-black-1.png"
            width="300"
            height="300"
            alt=""
          />
          <span><strong>$34.95 USD/$43.69 CAD</strong></span>
          <h3>Black - Set of 4</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/1" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <img
            className="img-responsive center-block"
            src="/images/bracket-copper-1.png"
            width="300"
            height="300"
            alt=""
          />
          <span><strong>$34.95 USD/$43.69 CAD</strong></span>
          <h3>Copper - Set of 4</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/2" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brackets;
