import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'

const OrderConfirmation = () => {
  
  return (
    <div>
      <h1 className="cartHeader"> Order sent!</h1>
      <Link to="/">
        <div className="cartHeader">
          <button className="checkNavButton"> Home</button>
        </div>
      </Link>

    </div>
  )
}


export default withRouter(OrderConfirmation)
