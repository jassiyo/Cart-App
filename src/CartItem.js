import React from "react";
class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:"grey"}}>Rs. 999/-</div>
                    <div style={{color:"grey"}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/*buttons*/}
                    </div>
                </div>
            </div>
        )
    }
};

const style ={
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'grey'
    }
}

export default CartItem;