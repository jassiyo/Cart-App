import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  // state which save dynamice infomation in the form of components
    render(){
        return(
            <div className="cart">
            <CartItem />
            <CartItem />
            <CartItem />
            </div>

        );
    };
}

export default Cart;
