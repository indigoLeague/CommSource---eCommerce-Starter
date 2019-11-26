import React from 'react';
import Storefront from './containers/Storefront.jsx';

import './stylesheets/styles.scss';

// const ReactRTC = require('react-rtc-real');

class App extends React.Component {
  render() {
    return (
      <div>
        <Storefront />
      </div>
    )
  }
}

export default App;
