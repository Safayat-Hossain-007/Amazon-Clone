import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let total = 0;
    

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Total price : {totalPrice}</p>
        </div>
    );
};

export default Cart;