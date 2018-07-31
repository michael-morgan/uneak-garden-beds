import React from 'react';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';
import { title } from './index.md';
import s from './styles.css';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <Spacer value={4} />
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>About Us</h1>
              <Spacer value={4} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className={s.titleContainer}>
                <h2>Problem Solving</h2>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="oct-bg text-center center-block">
                <i id="oct-content" className="fa fa-question fa-5x" aria-hidden="true" />
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className={s.textContainer}>
                <p>All of our products have a common theme</p>
                <p>We strive to bring you truly unique products that give you better solutions</p>
              </div>
            </div>
          </div>
          <Spacer value={6} />
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className={s.textContainer}>
                <p>We use only the strongest & most durable materials</p>
                <p>Everything is sourced from USA & Canada</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="oct-bg text-center center-block">
                <i id="oct-content" className="fa fa-search fa-5x" aria-hidden="true" />
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className={s.titleContainer}>
                <h2>Quality</h2>
              </div>
            </div>
          </div>
          <Spacer value={6} />
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className={s.titleContainer}>
                <h2>Lasting Solutions</h2>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="oct-bg text-center center-block">
                <i id="oct-content" className="fa fa-clock-o fa-5x" aria-hidden="true" />
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className={s.textContainer}>
                <p>You need it next year too?<br />{'Don\'t buy it twice'}</p>
                <p>Use Uneak Gardens year after year</p>
              </div>
            </div>
          </div>
          <Spacer value={6} />
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className={s.textContainer}>
                <p>With so many applications you can build or design almost anything</p>
                <p>Use it for this, or use it for that!</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="oct-bg text-center center-block">
                <i id="oct-content" className="fa fa-puzzle-piece fa-5x" aria-hidden="true" />
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className={s.titleContainer}>
                <h2>Versatility</h2>
              </div>
            </div>
          </div>
          <Spacer value={4} />
          <div className="row">
            <div className="col-xs-12 text-center">
              <h3>Uneak is who we are, Unique is what we aim for</h3>
              <h4>we strive to deliver the industries best in solutions & customer service</h4>
              <img
                src="/images/about-grass.png"
                alt="Grass on the ground"
                className="img-responsive img-rounded"
              />
            </div>
          </div>
          <Spacer value={8} />
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
