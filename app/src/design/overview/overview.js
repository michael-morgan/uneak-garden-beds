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
            src="/images/design-overview-bg.png"
            alt=""
          />
        </div>
        <div className={cx('col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3', s.fullHeight)}>
          <div id={s.overviewPanel} className="panel panel-default">
            <div className="panel-body text-center">
              <h1>Calling All Creators</h1>
              <p>
                {`Finally you can unleash those design ideas! With Uneak’s APP
                  build any structure you want, and choose to order hardware or
                  the complete work of art`}
              </p>
              <h2>Grow, Play, Build & Design with Uneak</h2>
              <Spacer value={1} />
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4 col-lg-offset-2">
                  <a href="#design" className="btn btn-primary btn-block">Learn More</a>
                  <Spacer value={1} />
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
