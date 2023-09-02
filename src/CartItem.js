import React from "react";
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 0,
      img: "",
    };
  };
  increaseQuantity=()=>{
    // setstate form 1
    this.setState({
      qty: this.state.qty +1
    })
  };
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={style.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "grey" }}>Rs. {price}</div>
          <div style={{ color: "grey" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/*buttons*/}
            <img
              className="action-icons"
              alt="increase"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              onClick={this.increaseQuantity}
            />
            <img
              className="action-icons"
              alt="decrease"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
            />
            <img
              className="action-icons"
              alt="delete"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
            />
          </div>
        </div>
      </div>
    );
  }
}


const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "grey",
  },
};

export default CartItem;
