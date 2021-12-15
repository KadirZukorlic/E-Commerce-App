export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
  return prevCartItems.find(
    (cartItem) => cartItem.documentID === nextCartItem.documentID
  );
};

export const handleAddToCart = ({
  prevCartItems, //state.cartItems -- array with cart items
  nextCartItem, // action.payload -- payload
}) => {
  const quantitiyIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.documentID === nextCartItem.documentID
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantitiyIncrement,
          }
        : cartItem
    );
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantitiyIncrement,
    },
  ];
};

export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
  return prevCartItems.filter(
    (item) => item.documentID !== cartItemToRemove.documentID
  );
};

export const handleReduceCartItem = ({
  prevCartItems, 
  cartItemToReduce 
 }) => {
 const existingCartItem = prevCartItems.find(
   (cartItem) => cartItem.documentID === cartItemToReduce.documentID
 );

 if (existingCartItem.quantity === 1) {
  return prevCartItems.filter(
     (cartItem) => cartItem.documentID !== existingCartItem.documentID
   ); //deletes cart item from cart 
 }

 return prevCartItems.map(cartItem =>
   cartItem.documentID === existingCartItem.documentID
     ? {
         ...cartItem, // return cart item obj and update QTY field
         quantity: cartItem.quantity - 1,
       }
     : cartItem
 );
};
