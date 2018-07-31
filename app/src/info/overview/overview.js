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
            src="/images/how-to-overview-bg.png"
            alt=""
          />
        </div>
        <div className={cx('col-xs-12 col-md-6 col-md-offset-5', s.fullHeight)}>
          <div id={s.overviewPanel} className="panel panel-default">
            <div className="panel-body text-center">
              <h1>Hardware That Holds Up</h1>
              <p>
                {`Uneak Gardens brackets make DIY a snap! Use them year after
                  year, with solid steel construction and a durable powder coat
                  paint finish. Check out all the angles below`}
              </p>
              <Spacer value={2} />
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
                  <a href="/products" className="btn btn-primary btn-block">
                    Shop
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
