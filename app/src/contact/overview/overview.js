import React from 'react';
import cx from 'classnames';
import s from './styles.css';

function Overview() {
  return (
    <div id={s.overviewContainer} className="container-fluid">
      <div className={cx('row', s.fullHeight)}>
        <div id={s.imageContainer} className={s.fullHeight}>
          <img
            id={s.overviewImage}
            className={s.fullHeight}
            src="/images/contact-overview-bg.png"
            alt=""
          />
        </div>
        <div className={cx('col-xs-12', s.fullHeight)}>
          <div id={s.contactText} className="text-center">
            <h1>Connect With Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
