export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => cartItem.documentID === nextCartItem.documentID
    )
}

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem
}) => {
    const quantitiyIncrement = 1;
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem});

    if (cartItemExists) {
        return prevCartItems.map(cartItem => 
            cartItem.documentID === nextCartItem.documentID ? {
                ...cartItem,
                quantity: cartItem.quantity + quantitiyIncrement
            } : cartItem
        )
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantitiyIncrement
        }
    ]
};