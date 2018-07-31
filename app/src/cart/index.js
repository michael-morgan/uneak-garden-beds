import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import cx from 'classnames';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';
import s from './styles.css';
import { title } from './index.md';
import { remove as removeItem, changeQuantity } from './cart';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.pullCartItems();
  }

  componentDidMount() {
    document.title = title;
  }

  onToken = (token) => {
    const amount = this.cartItems.reduce(
      (a, item) => a + (item.price * item.quantity),
      0,
    );

    let description = '';

    this.cartItems.forEach((element) => {
      description += `${element.title} x ${element.quantity},`;
    });

    console.log(JSON.stringify({ ...token, amount, description }));

    fetch('https://us-central1-uneak-garden-beds.cloudfunctions.net/charge', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ ...token, amount, description }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        if (data.err == null && data.charge.paid) {
          localStorage.setItem('paid', true);
          window.location.href = '/cart/summary';
        }
      });
    });
  }

  pullCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    this.cartItems = this.cartItems.map(
      item => Object.assign(
        {},
        this.props.data.products.find(p => p.id === item.id),
        { quantity: item.quantity }),
    );
  }

  handleRemove = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem(
      'cart',
      JSON.stringify(removeItem(cart, id)),
    );
    this.forceUpdate();
  };

  handleQuantity = (id) => {
    const quantity = document.getElementById(`quantity${id}`).value;
    const cart = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem(
      'cart',
      JSON.stringify(changeQuantity(cart, id, quantity, true)),
    );
    this.forceUpdate();
  };

  cartItem = (item, key) => (
    <div key={key} className="row">
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <div className="col-xs-12 col-md-3">
          <img
            src={item.thumb}
            alt="Product Thumbnail"
            width="150"
            className="center-block"
          />
        </div>
        <div className="col-xs-12 col-md-9">
          <div className="col-xs-12">
            <h4>{item.title}</h4>
          </div>
          <div className="col-xs-12">
            <p>Price: <strong>${item.price}</strong></p>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id={`quantity${item.id}`}
                name="quantity"
                min="1"
                max="10000"
                defaultValue={item.quantity}
                required
              />
            </div>
          </div>
          <div className="col-xs-12">
            <button
              className={cx(s.linkButton, s.linkMargin)}
              onClick={() => this.handleQuantity(item.id)}
            >
              Update
            </button>
            <button
              className={s.linkButton}
              onClick={() => this.handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="col-xs-12">
        <hr className={s.hr} />
      </div>
    </div>
  );

  render() {
    this.pullCartItems();

    if (this.cartItems.length === 0) {
      return (
        <Layout>
          <div className="container">
            <Spacer value={4} />
            <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2">
                <h1>Shopping Cart</h1>
                <Spacer value={1} />
                <p>Looks like your cart is empty...</p>
                <a href="/products" title="View Products" className="btn btn-primary">Shop</a>
              </div>
            </div>
            <Spacer value={6} />
          </div>
        </Layout>
      );
    }

    const total = this.cartItems.reduce(
      (a, item) => a + (item.price * item.quantity),
      0,
    );

    return (
      <Layout>
        <div className="container">
          <Spacer value={4} />
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <h1>Shopping Cart</h1>
            </div>
          </div>
          <Spacer value={1} />
          <div className="row">
            <div className="col-xs-12">
              <hr className={s.hr} />
            </div>
          </div>
          {this.cartItems.map((item, index) => {
            const key = index;
            return this.cartItem(item, key);
          })}
          <div className="row">
            <div className="col-xs-12">
              <div className="pull-right">
                <p>
                  Subtotal: <strong>${total}</strong>
                </p>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="pull-right">
                <p>
                  Shipping: <strong>Free</strong>
                </p>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="pull-right">
                <p>
                  Total: <strong>${total}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="pull-right">
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_UtAXv4B7F7lmfAc4Stio2YMI"
                  name="Checkout"
                  image="/images/logo.png"
                  amount={(total * 100)}
                  currency="USD"
                  shippingAddress
                  billingAddress
                  zipCode
                  allowRememberMe={false}
                >
                  <button id={s.checkoutButton} className="btn btn-primary">Place Order</button>
                </StripeCheckout>
                <a href="/products" title="Shop Products" className="btn btn-default">Continue Shopping</a>
              </div>
            </div>
          </div>
          <Spacer value={6} />
        </div>
      </Layout>
    );
  }
}

CartPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default CartPage;
