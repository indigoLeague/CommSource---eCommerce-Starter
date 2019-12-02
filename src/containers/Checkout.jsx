import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Link, withRouter} from 'react-router-dom'
import ProductInvoice from '../components/ProductInvoice.jsx';

class Checkout extends Component {

  sendOrder(cart) {
    const itemsBought = {};
    
    for (let product of cart) {
      let name = product.name;
      itemsBought[name] ? itemsBought[name] += 1 : itemsBought[name] = 1;
    }
    
    fetch('/item/buyitems', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(itemsBought)
    })

  }

  // calculates order total before tax
  orderTotal(cart) {
    let total = 0;
    
    for (let product of cart) {
      let quantitySold = product.quantitySold || 1;
      total += product.price * quantitySold;
    }

    return total
  }

  // converts a number in to a USD currency format
  makeCurrency(num) {
    const formattedNumber = num.toLocaleString('us-US', { style: 'currency', currency: 'USD' });
    return formattedNumber;
  }

  // call product invoice component to create table rows for each product
  createProductRows (cart, cb) {
    const productRows = cart.map(product => {
      return <ProductInvoice product={product} makeCurrency={cb}/>
    })

    return productRows
  }

  // on event function for copying the shipping address to the billing address
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
              <th> Total </th>
            </tr>

            {this.createProductRows(this.props.shoppingCart, this.makeCurrency)}

            <tr>
              <td className="columnSubTotal"> Total</td>
              <td className="rightNumbers columnSubTotal">{this.makeCurrency(this.orderTotal(this.props.shoppingCart))}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td className="rightNumbers"> {this.makeCurrency(.09 * this.orderTotal(this.props.shoppingCart))}</td>
            </tr>
              <br></br>
            <tr>
              <td className="columnTotal">Grand Total</td>
              <td className="columnTotal rightNumbers"> {this.makeCurrency(1.09 * this.orderTotal(this.props.shoppingCart))} </td>
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
            <button className="checkNavButton" onClick={() => this.sendOrder(this.props.shoppingCart)}> send order </button>
          </Link>
        </div>

      </>
    );
  }
}

export default withRouter(Checkout);