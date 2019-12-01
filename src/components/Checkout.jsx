import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Link, withRouter} from 'react-router-dom'

class Checkout extends Component {

  updateShippingAddress(event) {
    const billingStreet = document.getElementById("billingStreet");
    const billingState = document.getElementById("billingState");
    const billingCode = document.getElementById("billingCode");
    const shippingStreet = document.getElementById("shippingStreet");
    const shippingState = document.getElementById("shippingState");
    const shippingCode = document.getElementById("shippingCode");

    if (event.target.checked === true) {
      billingStreet.value = shippingStreet.value;
      billingState.value = shippingState.value;
      billingCode.value = shippingCode.value;      
    } else {
      billingStreet.value = "";
      billingState.value = "";
      billingCode.value = ""; 
    }

  }



  render() {
    return (
      <>
      
        <h1 className="cartHeader"> | Checkout | </h1> 

        <div className="checkoutTableDiv">
          <h2> Order Summary </h2>
          <table className="checkoutTable">
            <tr>
              <th> Item </th> 
              <th> total </th>
            </tr>
            <tr>
              <td>Total</td>
              <td className="rightNumbers">$ 1,000,000.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td className="rightNumbers">$ 200,000.00</td>
            </tr>
              <br></br>
            <tr>
              <td className="columnTotal">Grand Total</td>
              <td className="columnTotal rightNumbers">$ 1,200,000.00</td>
            </tr>
          </table>
        </div>

        <div className="sectionBox">

          <h2>1. Shipping Address</h2>

          <table>
            <tr>
              <td>Street</td>
              <td>
                <input id="shippingStreet" name="street"></input>
              </td>
            </tr>
            <tr>
              <td>State</td>
              <td>
                <input id="shippingState" name="state"></input>
              </td>
            </tr>
            <tr>
              <td>Area Code</td>
              <td>
                <input id="shippingCode" name="code"></input>
              </td>
            </tr>
          </table>


        </div>
        <br></br>
        <div className="sectionBox">

          <h2>2. Billing Address</h2>

          <label> Use shipping Address</label>
          <input type="checkbox" name="street" onClick={this.updateShippingAddress}></input>
          <br></br>
          <br></br>

          <table>
            <tr>
              <td>Street</td>
              <td>
                <input id="billingStreet" name="street"></input>
              </td>
            </tr>
            <tr>
              <td>State</td>
              <td>
                <input id="billingState" name="state"></input>
              </td>
            </tr>
            <tr>
              <td>Area Code</td>
              <td>
                <input id="billingCode" name="areaCode"></input>
              </td>
            </tr>
          </table>

        </div>
        <br></br>
        <div className="sectionBox"> 

          <h2>3. Payment method</h2>
          <table>
            <tr>
              <td>card number</td>
              <td>
                <input name="cardNumber"></input>
              </td>
            </tr>
            <tr>
              <td>Security code</td>
              <td>
                <input name="securityCode"></input>
              </td>
            </tr>
            <tr>
              <td>Expiration Date</td>
              <td>
                <input name="expirationDate"></input>
              </td>
            </tr>
          </table>

        </div>
          
        <br></br>

        <div className="cartProduct">
          <Link to="/shoppingcart">
            <button className="checkNavButton"> back </button>
          </Link>
          <Link to="/confirmation">
            <button className="checkNavButton"> send order </button>
          </Link>
        </div>

      </>
    );
  }
}

export default withRouter(Checkout);