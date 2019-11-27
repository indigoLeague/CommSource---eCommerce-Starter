import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.jsx'

class Feed extends Component {
  render() {
    return (
      <div className="feed">This is feed
        <ShoppingCart/>
      </div>
      // temporarily render the shoping cart while G-easy is setting up
      // react router for the feed routes
      
    );
  }
}

export default Feed;
