import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "./../../redux/Products/products-actions";
import Button from './../Forms/Button';

import "./styles.scss";

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

const ProductCard = ({}) => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);

  const { productThumbnail, productName, productPrice } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return (() => {
        dispatch(setProduct({}))
    })
}, []);

//39

  const configAddToCartBtn = {
      type: 'button',
  }

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>{productName}</h1>
          </li>
          <li>
            <span>€{productPrice}</span> 
          </li>
          <li>
              <div className="addToCart">
                <Button {...configAddToCartBtn}>
                    Add to cart
                </Button>
              </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
