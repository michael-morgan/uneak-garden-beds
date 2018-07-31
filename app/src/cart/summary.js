import React from 'react';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';

class SummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.paid = localStorage.getItem('paid');

    if (!this.paid) {
      window.location.href = '/';
    } else {
      localStorage.removeItem('paid');
      localStorage.removeItem('cart');
    }
  }

  componentDidMount() {
    document.title = 'Order Summary';
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <Spacer value={4} />
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <h3>Your order has been placed</h3>
            </div>
          </div>
          <Spacer value={1} />
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <p>Your receipt will be emailed to you shortly.</p>
              <p>
                {'If you notice any issues with your order, please '}
                <a href="/contact" title="Contact">contact</a>
                {' us immediately.'}
              </p>
            </div>
          </div>
          <Spacer value={6} />
        </div>
      </Layout>
    );
  }
}

export default SummaryPage;
