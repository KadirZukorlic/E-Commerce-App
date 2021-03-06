import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'
import { fetchProductsStart } from '../../redux/Products/products-actions';
import { addProduct } from '../../redux/Cart/cart-actions';

//components
import Product from './Product';
import FormSelect from '../Forms/FormSelect';
import LoadMore from '../LoadMore';

import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResult = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { products } = useSelector(mapState);
  const { filterType } = useParams();

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [ filterType ]);

  const handleFilter = e => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`)
  }

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show All',
      value: '',
    },
    {
      name: 'Mens',
      value: 'mens'
    },
    {
      name: 'Womens',
      value: 'womens'
    }
  ],
  handleChange: handleFilter,
  }

  const handleLoadMore = () => {
    dispatch(fetchProductsStart({
      filterType,
      startAfterDoc: queryDoc,
      persistProducts: data
    }))
  }

  
  const handleAddToCart = (id) => {

    const product = data.map((product) => {
      const {documentID} = product
      if (id === documentID) {
        return product;
      }
      console.log(product, 'CLICKED PRODUCT')
    })
  }

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  }

  return (
    <div className="products">
      <h1>Browse Products</h1>

      <FormSelect {...configFilters} />

    <div className="productResults">
    {data.map((product, pos) => {
        const { productThumbnail, productName, productPrice } = product;
        if (
          !productThumbnail ||
          !productName ||
          typeof productPrice === 'undefined'
        )
          return null;

          const configProduct = {
            ...product
          }

        return (
         <Product {...configProduct} addToCart={handleAddToCart}/>
        );
      })}
    </div>
    {!isLastPage && <LoadMore {...configLoadMore}/> }
    </div>
  );
};

export default ProductResult;
