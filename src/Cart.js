import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "watch",
          qty: 0,
          img: "",
          id: 1
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 0,
          img: "",
          id: 2
        },
        {
          price: 999,
          title: "Table",
          qty: 0,
          img: "",
          id: 3
        },
      ],
    };
  }
  // state which save dynamice infomation in the form of components
  render() {
    const {products} = this.state;
    return (
      <div className="cart">
      {products.map((product)=>{
        return <CartItem product={product} key={product.id} />
      })}
      </div>
    );
  }
}

export default Cart;
