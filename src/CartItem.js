import React from "react";
const CartItem = (props) => {
  // state which save dynamice infomation in the form of components
  

    const { price, title, qty } = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={style.image} src={product.img}/>
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "grey" }}>Rs. {price}</div>
          <div style={{ color: "grey" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            
            <img
              className="action-icons"
              alt="increase"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              onClick={()=>{onIncreaseQuantity(product)}}
            />
            <img
              className="action-icons"
              alt="decrease"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
              onClick={()=>{onDecreaseQuantity(product)}}
            />
            <img
              className="action-icons"
              alt="delete"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
              onClick={()=>{onDeleteQuantity(product.id)}}
            />
          </div>
        </div>
      </div>
    );
}


const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "white",
  },
};

export default CartItem;
