import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products-actions';

import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResult = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }

    return (
        <div className="products">
            {products.map( (product, pos) => {
                const {productThumbnail, productName, productPrice} = product;
                if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;
                return (
                    <div key={pos}>
                        {productName}
                        {productPrice}
                    </div>
                );
            })}
        </div>
    )
};

export default ProductResult;
