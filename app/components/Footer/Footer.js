import React from 'react';
import cx from 'classnames';
import s from './styles.css';

function Footer() {
  return (
    <footer id={s.mainFooter}>
      <div className="container">
        <div className={cx('row', s.FooterRow)}>
          <div className="col-sm-3">
            <a href="/">
              <img
                src="/images/logo.png"
                alt="Uneak Gardens Logo"
                id={s.footerImage}
                className="img-responsive center-block"
                width="150"
              />
            </a>
          </div>
          <div className="col-sm-2">
            <h5>Get started</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/how">How To</a></li>
              <li><a href="/products">Shop</a></li>
              <li><a href="/design">Design</a></li>
              <li><a href="/gallery">Gallery</a></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>About us</h5>
            <ul>
              <li><a href="/about">Company Information</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a href="">Reviews</a></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>Support</h5>
            <ul>
              <li><a href="">FAQ</a></li>
              <li><a href="">Help desk</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div className={s.footerSocials}>
              <a href="" id={s.footerTwitter}><i className="fa fa-twitter" /></a>
              <a href="" id={s.footerFacebook}><i className="fa fa-facebook" /></a>
              <a href="" id={s.footerGoogle}><i className="fa fa-google-plus" /></a>
            </div>
            <a href="/contact" id={s.footerBtn} className="btn btn-default">Contact us</a>
          </div>
        </div>
      </div>
      <div className={s.footerCopyright}>
        <p>© 2017 Uneak Gardens</p>
      </div>
    </footer>
  );
}

export default Footer;
