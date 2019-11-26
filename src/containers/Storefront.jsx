import React, { Component } from 'react';
import Feed from './Feed.jsx';
import BannerRight from './BannerRight.jsx';
import BannerTop from '../components/BannerTop.jsx';

class Storefront extends Component {
  render() {
    return (
      <div className="storeFront">
        <BannerTop />
        <Feed />
        <BannerRight />
      </div>
    );
  }
}

export default Storefront;
