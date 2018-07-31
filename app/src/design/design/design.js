import React from 'react';
import Spacer from '../../../components/Spacer';
import s from '../../../styles/shared/styles.css';

function Design() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <span id="design" className={s.headerAnchor} />
          <h2>Design Made Easy</h2>
          <p className={s.subHeader}>
            Build & design your own garden, sandbox, or structure. Gardens Made Easy
          </p>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive img-circle center-block"
            src="/images/garden-2.svg"
            width="300"
            height="300"
            alt=""
          />
          <h3>Build With or Without Timbers</h3>
          <p>
            {`You can choose to build with & purchase our composite Timbers
              or build with brackets & buy your own wood later`}
          </p>
          <a href="/" title="Link">
            {'Learn more '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive img-circle center-block"
            src="/images/garden-5.png"
            width="300"
            height="300"
            alt=""
          />
          <h3>Use Our Photo or Upload Your Space</h3>
          <p>
            {`Build on our green grass base photo or upload a photo of the
              space you want to create in; ensuring a perfect fit every time`}
          </p>
          <a href="/" title="Link">
            {'Learn more '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <img
            className="img-responsive img-circle center-block"
            src="/images/garden-6.png"
            width="300"
            height="300"
            alt=""
          />
          <h3>Save, Print & Ship All Products</h3>
          <p>
            {`When you're all done, click save, add to cart & print your
            instructions that tell you how to assemble, and lists all the
            materials & components`}
          </p>
          <a href="/" title="Link">
            {'Learn more '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="row">
        <div
          className="col-xs-12 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 text-center"
        >
          <Spacer value={4} />
          <button className="btn btn-primary btn-block disabled">Enter Design App</button>
          <p><strong>Coming soon!</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Design;
