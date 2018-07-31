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
            src="/images/products-overview-bg.png"
            alt=""
          />
        </div>
        <div className={cx('col-xs-12 col-md-6 col-md-offset-5', s.fullHeight)}>
          <div id={s.overviewPanel} className="panel panel-default">
            <div className="panel-body text-center">
              <h1>What Will You Build?</h1>
              <p>
                {`With so many options, use Uneak for this, or use it for that!
                  Visit our Gallery for design ideas and see what customers just
                  like you can build when they combine kits!`}
              </p>
              <h2>Get Creative with your Uneak Experience</h2>
              <Spacer value={1} />
              <div className="row">
                <div
                  className={cx(
                    'col-xs-12',
                    'col-sm-6',
                    'col-md-5 col-md-offset-1',
                    'col-lg-4 col-lg-offset-2',
                  )}
                >
                  <a href="/gallery" className="btn btn-primary btn-block">
                    Visit Gallery
                  </a>
                  <Spacer value={1} />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                  <a href="#brackets" className="btn btn-primary btn-block">
                    Get Started
                  </a>
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
