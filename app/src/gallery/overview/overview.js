import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Spacer from '../../../components/Spacer';

function Overview() {
  return (
    <div id={s.overviewContainer} className="container-fluid">
      <div className={cx('row', s.fullHeight)}>
        <div id={s.imageContainer} className={s.fullHeight}>
          <img
            id={s.overviewImage}
            className={s.fullHeight}
            src="/images/gallery-overview-bg.png"
            alt=""
          />
        </div>
        <div className={cx('col-xs-12 col-md-6 col-md-offset-3', s.fullHeight)}>
          <div id={s.overviewPanel} className="panel panel-default">
            <div className="panel-body text-center">
              <h1>Your Garden, Your Way</h1>
              <p>
                {`Get inspired and see what our customers are building! Upload
                  your own garden and you could be featured on our website. Mix
                  and match kits, add multiple levels and get creative`}
              </p>
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4 col-lg-offset-2">
                  <a href="/products" className="btn btn-primary btn-block">Shop Kits</a>
                  <Spacer value={0.5} />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <button className="btn btn-primary btn-block disabled">Upload</button>
                  <p><strong>Coming soon!</strong></p>
                  <p><i>For A Chance To Be Featured</i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
