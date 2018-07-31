import React from 'react';
import Spacer from '../../../components/Spacer';

function Discover() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>Discover</h2>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <img
            className="center-block img-responsive"
            src="/images/garden-1.svg"
            width="300"
            height="300"
            alt=""
          />
          <i className="fa fa-check-circle-o fa-3x" aria-hidden="true" />
          <h3>Kit Connection</h3>
          <Spacer value={1.5} />
          <p>The ultimate all you need set up</p>
          <p>DIY never looked so good and set up is a snap</p>
          <Spacer value={1} />
          <a href="/products" className="btn btn-primary">Shop Kits</a>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <img
            className="center-block img-responsive"
            src="/images/bracket-black-3.png"
            width="300"
            height="300"
            alt=""
          />
          <i className="fa fa-check-circle-o fa-3x" aria-hidden="true" />
          <h3>Hardware Like Never Before</h3>
          <Spacer value={1.5} />
          <p>Find out how Uneak keeps you growing year after year</p>
          <p>Grow, Play & Design</p>
          <Spacer value={1} />
          <a href="/how" className="btn btn-primary">How It Works</a>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <img
            className="center-block img-responsive"
            src="/images/sandbox-1.svg"
            width="300"
            height="300"
            alt=""
          />
          <i className="fa fa-check-circle-o fa-3x" aria-hidden="true" />
          <h3>Ideas You Need To See</h3>
          <Spacer value={1.5} />
          <p>Out of the box and into your space</p>
          <p>See our design ideas brought to life</p>
          <Spacer value={1} />
          <a href="/products" className="btn btn-primary">Shop Structures</a>
        </div>
      </div>
      <Spacer value={6} />
      <div className="row">
        <div className="col-xs-12">
          <a href="/products" title="Shop All Products" className="pull-left">
            Shop All Products
          </a>
        </div>
        <div className="col-xs-12 hidden-xs hidden-sm">
          <div id="gardenCarouselLg" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#gardenCarouselLg" data-slide-to="0" className="active" />
              <li data-target="#gardenCarouselLg" data-slide-to="1" />
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="row">
                  <div className="col-xs-4">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-1.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-4">
                    <img
                      className="center-block img-responsive"
                      src="/images/sandbox-1.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-4">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-2.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-xs-4">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-3.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-4">
                    <img
                      className="center-block img-responsive"
                      src="/images/sandbox-2.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-4">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-4.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="left carousel-control"
              href="#gardenCarouselLg"
              role="button"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#gardenCarouselLg"
              role="button"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="col-xs-12 hidden-md hidden-lg">
          <div id="gardenCarouselSm" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#gardenCarouselSm" data-slide-to="0" className="active" />
              <li data-target="#gardenCarouselSm" data-slide-to="1" />
              <li data-target="#gardenCarouselSm" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="row">
                  <div className="col-xs-6">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-1.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-6">
                    <img
                      className="center-block img-responsive"
                      src="/images/sandbox-1.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-xs-6">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-2.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-6">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-3.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-xs-6">
                    <img
                      className="center-block img-responsive"
                      src="/images/sandbox-2.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-6">
                    <img
                      className="center-block img-responsive"
                      src="/images/garden-4.svg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#gardenCarouselSm"
              role="button"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#gardenCarouselSm"
              role="button"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
