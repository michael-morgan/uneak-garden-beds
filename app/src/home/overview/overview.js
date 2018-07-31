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
            src="/images/home-overview-bg-desktop.png"
            alt=""
          />
        </div>
        <div
          className={cx(
            'col-xs-12',
            'col-md-7',
            'col-lg-6',
            s.fullHeight,
          )}
        >
          <div id={s.overviewPanel} className="panel panel-default">
            <div className="panel-body">
              <h1>SPACES THAT GROW WITH YOU</h1>
              <Spacer value={1} />
              <p>
                {`Uneak Gardens bracket hardware gives you endless growing
                  options! Design any shape for any space, enjoy the fastest
                  DIY set up, and keep building year after year.`}
              </p>
              <Spacer value={0.5} />
              <h3>Grow, Play, Build & Design with Uneak</h3>
              <Spacer value={2} />
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <a href="/how" className={cx('btn btn-primary btn-block', s.mB5)}>How it Works</a>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <a href="/products" className={cx('btn btn-primary btn-block', s.mB5)}>Shop</a>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <a
                    href="/design"
                    className={cx('btn btn-primary btn-block', s.mB5)}
                  >
                    Design One
                  </a>
                </div>
              </div>
              <Spacer value={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
