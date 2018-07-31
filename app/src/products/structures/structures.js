import React from 'react';
import s from '../../../styles/shared/styles.css';
import Spacer from '../../../components/Spacer';

function Structures() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>Our Structures</h2>
          <p className={s.subHeader}>
            We combined kits to make a few ourselves. Shop our shapes!
          </p>
          <Spacer value={4} />
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/garden-4.png"
            width="200"
            height="200"
            alt=""
          />
          <span><strong>$380.00 USD/$475.00 CAD</strong></span>
          <h3>Farmers Corner</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/5" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/garden-5.png"
            width="200"
            height="200"
            alt=""
          />
          <span><strong>$240.00 USD/$300.00 CAD</strong></span>
          <h3>Crazy Eights</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/6" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/garden-3.svg"
            width="200"
            height="200"
            alt=""
          />
          <span><strong>$360.00 USD/$450.00 CAD</strong></span>
          <h3>Long Landing</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/7" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>


        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/garden-1.svg"
            width="200"
            height="200"
            alt=""
          />
          <span><strong>$360.00 USD/$450.00 CAD</strong></span>
          <h3>Tripple Deck</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/9" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive center-block"
            src="/images/garden-2.svg"
            width="200"
            height="200"
            alt=""
          />
          <span><strong>$599.00 USD/$748.75 CAD</strong></span>
          <h3>Free Form</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/11" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
      </div>
      <Spacer value={8} />
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>Ideas for Play</h2>
          <p className={s.subHeader}>
            Bring the kids in on the action & shop our Uneak Sandboxes, perfect for play
          </p>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <img
            className="img-responsive center-block"
            src="/images/sandbox-3.png"
            width="300"
            height="300"
            alt=""
          />
          <span><strong>$240.00 USD/$300.00 CAD</strong></span>
          <h3>Crazy Eights Sandbox</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/13" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <img
            className="img-responsive center-block"
            src="/images/sandbox-2.svg"
            width="300"
            height="300"
            alt=""
          />
          <span><strong>$119.99 USD/$149.99 CAD</strong></span>
          <h3>Square Kit Sandbox</h3>
          <p><strong>FREE</strong> Shipping</p>
          <a href="/products/15" title="Link">
            {'View '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Structures;
