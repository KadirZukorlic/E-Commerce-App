import React from 'react';
import Button from './../../Forms/Button';

const Product = ({ productName, productThumbnail, productPrice }) => {
  if (!productThumbnail || !productName || typeof productPrice === 'undefined')
    return null;

    const configAddToCartBtn = {
      type: 'button'
    }

  return (
    <div className="product">
      <div className="thumb">
        <img src={productThumbnail} alt={productName} />
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name"> {productName}</span>
          </li>

          <li>
            <span className="price">€{productPrice}</span>
          </li>
          <div className="addToCart">
          <li>
          <Button {...configAddToCartBtn}>Add To Cart</Button>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Product;
