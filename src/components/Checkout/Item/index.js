import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, addProduct } from "../../../redux/Cart/cart-actions";

const Item = (product) => {
  const dispatch = useDispatch()
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;

    const handleRemoveCartItem = () => {
      dispatch(removeCartItem(product))
    }

    //IN THE JSX use -- handleRemoveCartItem(documentID)
    // const handleRemoveCartItem = (documentID) => {
    //   dispatch(removeCartItem({
    //     documentID
    //   }))
    // }

    const handleAddProduct = (product) => {
      dispatch(addProduct(product))
    }


  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>{productName}</td>
          <td>
            <span className="cartBtn">
              {`< `}
              </span>
            <span>{quantity}</span>
            <span className="cartBtn" onClick={() => handleAddProduct(product)}>
              {` >`}
              </span>
          </td>
          <td>€{productPrice}</td>
          <td align="center"> <span className="cartBtn" onClick={() => handleRemoveCartItem(product)}>X</span> </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
