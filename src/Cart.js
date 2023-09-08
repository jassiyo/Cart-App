import React from "react";
import CartItem from "./CartItem";

const Cart = (props) =>  {
  
  // state which save dynamice infomation in the form of components
    const {products} = props;
    return (
      <div className="cart">
      {products.map((product)=>{
        return (
          <CartItem
         product={product}
          key={product.id}
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDecreaseQuantity={props.onDecreaseQuantity}
          onDeleteQuantity={props.onDeleteQuantity}
           />
        )
      })}
      </div>
    );
  
}

export default Cart;
