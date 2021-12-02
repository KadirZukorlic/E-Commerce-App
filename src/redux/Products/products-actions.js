import productsTypes from "./products-types";

export const addProductStart = productData => ({
    type: productsTypes.ADD_NEW_PRODUCT_START,
    payload: productData
})

export const fetchProducsStart = () => ({
    type: productsTypes.SET_PRODUCTS
})