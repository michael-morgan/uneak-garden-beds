import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../components/Layout';
import Spacer from '../../../components/Spacer';
import { title } from './index.md';
import { add as addItem } from '../../cart/cart';

class ProductPage extends React.Component {
  componentWillMount() {
    this.product = this.props.data.products.find(p => p.id === this.props.route.params.id);
    this.colors = this.props.data.colors[this.product.type];
  }

  componentDidMount() {
    document.title = title;
  }

  rowImages = row => (
    this.product.images.map((image, index) => {
      if (index >= (((row + 1) * 3) - 3) && index < ((row + 1) * 3)) {
        const key = index;
        return (
          <div key={key} className="col-xs-4">
            <img
              className="center-block"
              src={image || 'https://via.placeholder.com/150x150'}
              width="150"
              height="150"
              alt=""
            />
          </div>
        );
      }

      return null;
    })
  );

  handleColor = (e) => {
    const id = e.target.value;
    if (this.product.id !== id) {
      window.location.href = `/products/${id}`;
    }
  };

  handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const quantity = document.getElementById('quantity').value;
    localStorage.setItem(
      'cart',
      JSON.stringify(addItem(cart, this.product.id, quantity)),
    );
    window.location.href = '/cart';
  };

  render() {
    const sliderContent = [];
    const sliderControls = [];
    for (let row = 0; row < (this.product.images.length / 3); row += 1) {
      const itemClass = row === 0 ? 'item active' : 'item';
      sliderContent.push(
        <div key={row} className={itemClass}>
          <div className="row">
            {this.rowImages(row)}
          </div>
        </div>,
      );

      sliderControls.push(
        <li
          key={row}
          data-target="#productCarousel"
          data-slide-to={row}
          className={row === 0 ? 'active' : ''}
        />,
      );
    }

    return (
      <Layout>
        <div>
          <div className="container">
            <Spacer value={4} />
            <div className="row">
              <div className="col-xs-12 text-center">
                <h1>Product Overview</h1>
                <Spacer value={4} />
              </div>
              <div className="col-xs-12 col-md-6">
                <img
                  className="img-responsive center-block"
                  src={this.product.thumb || 'https://via.placeholder.com/300x300'}
                  alt=""
                  width="300"
                  height="300"
                />
                <Spacer value={2} />
                <div id="productCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    {sliderControls}
                  </ol>

                  <div className="carousel-inner" role="listbox">
                    {sliderContent}
                  </div>

                  <a
                    className="left carousel-control"
                    href="#productCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#productCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <h4>{this.product.title || 'Product Title'}</h4>
                <p>{this.product.description || 'Product description...'}</p>
                <ul>
                  {this.product.details.map((detail, index) => {
                    const key = index;
                    return <li key={key}>{detail}</li>;
                  })}
                </ul>
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="10000"
                        defaultValue="1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <div className="form-group">
                      <label htmlFor="color">Color</label>
                      <select
                        id="color"
                        className="form-control"
                        name="color"
                        value={this.product.id}
                        onChange={this.handleColor}
                      >
                        {this.colors.map((item, index) => {
                          const key = index;
                          return (
                            <option key={key} value={item.id}>{item.color}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <p>
                      {`Total: $${this.product.price}`}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <a href="/design" className="btn btn-default btn-block">
                      Build My Own
                    </a>
                    <Spacer value={0.5} />
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={this.handleAddToCart}
                    >
                      Add To Cart
                    </button>
                    <Spacer value={0.5} />
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <a href="/products" className="btn btn-default btn-block">
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Spacer value={8} />
        </div>
      </Layout>
    );
  }
}

ProductPage.propTypes = {
  route: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ProductPage;
