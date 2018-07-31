import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartCount: 0 };
    this.handleCartCount = this.handleCartCount.bind(this);
  }

  componentDidMount() {
    this.cartCountInterval = setInterval(this.handleCartCount, 500);
  }

  componentWillUnmount() {
    clearInterval(this.cartCountInterval);
  }

  handleCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const count = cart ? cart.length : 0;
    if (this.state.cartCount !== count) {
      this.setState({ cartCount: count });
    }
  }

  render() {
    const { cartCount } = this.state;
    return (
      <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                <img src="/images/banner.png" alt="Uneak Gardens Banner" height="50" />
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="/how">How To</a></li>
                <li><a href="/products">Shop</a></li>
                <li><a href="/design">Design</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    {' '}
                    <span className="badge">{cartCount}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
