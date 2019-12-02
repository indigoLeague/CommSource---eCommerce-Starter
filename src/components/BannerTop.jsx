import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingTimer from './ShoppingTimer.jsx';

function BannerTop() {
  return (
    // <Router>
    <div id="bannerTop">
      <div className="navLinks">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/shoppingcart">Shopping Cart</NavLink>
      </div>
      <ShoppingTimer />
    </div>
    // {/* </Router> */ }
  );
}

export default BannerTop;
