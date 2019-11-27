import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Link, withRouter} from 'react-router-dom'

class Checkout extends Component {
  render() {
    return (
      <>
        <div className="checkout"> 
          <h1 className=".checkoutHeader">This is the checkout Screen</h1> 

          <div>
            <h2>1. Shipping Address</h2>
            <label>Street</label>
            <input name="street"></input>
            <br></br>
            <label>State</label>
            <input name="state"></input>
            <br></br>
            <label>Area Code</label>
            <input name="code"></input>

          </div>
          <br></br>
          <div>

            <h2>2. Billing Address</h2>
            <label> Use shipping Address</label>
            <input type="checkbox" name="street"></input>
            <br></br>
            <br></br>
            <label>Street</label>
            <input name="street"></input>
            <br></br>
            <label>State</label>
            <input name="state"></input>
            <br></br>
            <label>Area Code</label>
            <input name="code"></input>

          </div>
          <br></br>
          <div> 

            <h2>3. Payment method</h2>
            <label>card number</label>
            <input name="cardNumber"></input>
            <br></br>
            <label>Security code</label>
            <input name="paymentCode"></input>
            <br></br>
            <label>Expiration Date</label>
            <input name="date"></input>

          </div>
          
          <br></br>
          <button> send order </button>
          <Link to="/">
            <button> back </button>
          </Link>


        </div>
      </>
    );
  }
}

export default withRouter(Checkout);