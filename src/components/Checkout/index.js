import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "./../../redux/Cart/cart-selectors";
import { createStructuredSelector } from "reselect";

import Item from './Item';
import Button from "../Forms/Button";

import "./styles.scss";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

const Checkout = ({}) => {
  const { cartItems } = useSelector(mapState);

  const errMsg = 'You have no items in Your cart.'

//   if (!Array.isArray(cartItems) || cartItems.length < 1) return null;

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="cart">
        {cartItems.length > 0 ? (
        <table border="0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <table
              className="checkoutHeader"
              border="0"
              cellPadding="10"
              cellSpacing="0"
            >
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </tbody>
            </table>
          </tr>

          <tr>
            <table border="0" cellSpacing="0" cellPadding="0">
              <tbody>
                {cartItems.map((item, pos) => {
                  console.log(item, 'ITEM PRODUCT')
                  return (
                    <tr key={pos}>
                      <td><Item {...item}/></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </tr>

          <tr>
            <table align="right" border="0" cellSpacing="0" cellPading="10">
              <tr align="right">
                <td>
                  <h3>Total:</h3>
                </td>
              </tr>

              <tr>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        <Button>Continue Shopping</Button>
                      </td>
                      <td>
                        <Button>Checkout</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </tr>
            </table>
          </tr>
        </tbody>
      </table>
        ): (
            <p>
                {errMsg}
            </p>
        )}


      </div>

    </div>
  );
};

export default Checkout;
