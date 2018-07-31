import React from 'react';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';
import Overview from './overview/overview';
import s from './styles.css';
import { title } from './index.md';

class ContactPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const style = {
      iframe: {
        border: '0',
        width: '100%',
        height: '382px',
      },
      gotcha: {
        display: 'none',
      },
    };

    return (
      <Layout>
        <div>
          <Overview />
          <Spacer value={2} />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <h2>Send Us A Message</h2>

                <form action="https://formspree.io/uneakprojects@gmail.com" method="POST">
                  <div className="form-group">
                    <label htmlFor="first_name">First name</label>
                    <input
                      type="text"
                      id="first_name"
                      className="form-control"
                      name="first_name"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last_name">Last name</label>
                    <input
                      type="text"
                      id="last_name"
                      className="form-control"
                      name="last_name"
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="form-control"
                      name="company"
                      placeholder="Company"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="_replyto">Email</label>
                    <input
                      type="text"
                      id="_replyto"
                      className="form-control"
                      name="_replyto"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className="form-control"
                      name="message"
                      placeholder="Write us your message..."
                      required
                    />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="newsletters">
                      <input
                        type="checkbox"
                        id="newsletters"
                        name="newsletters"
                      />
                      {' Send me newsletters'}
                    </label>
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://uneak-garden-beds.firebaseapp.com/"
                  />
                  <input
                    type="text"
                    name="_gotcha"
                    style={style.gotcha}
                  />
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-xs-12 col-md-6">
                <Spacer value={4.5} />
                <div className={s.contactInfo}>
                  <span>Uneak Products</span><br />
                  <span>20 Columbus Street</span><br />
                  <span>Perth-Andover, NB E7H 1T3</span><br /><br />
                  <span><i className="fa fa-phone" aria-hidden="true" /> 1-506-273-9492</span><br />
                  <span><i className="fa fa-phone" aria-hidden="true" /> 1-800-666-4911</span><br />
                  <span><i className="fa fa-fax" aria-hidden="true" /> 1-506-273-3273</span><br />
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    {' office@bolstercanada.com'}
                  </span>
                  <br />
                </div>

                <Spacer value={2} />

                <iframe
                  frameBorder="0"
                  style={style.iframe}
                  src="https://www.google.com/maps/embed/v1/place?q=20%20Columbus%20Street%20Perth-Andover%2C%20NB%20E7H%201T3&key=AIzaSyBkIZNRhfLtZtOnsfMLLWzd-4fX9X9gzuI"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <Spacer value={6} />
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
