import './App.css';
import React from 'react';
import Cart from './Cart';
import Header from './components/header/Header';
// import Weather from './Weather';

class App extends React.Component {

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
  };
  handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of: ', product)
    const {products} = this.state; 
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products 
    });
  }
  handleDecreaseQuantity = (product) => {
    console.log('Hey please inc the qty of: ', product)
    const {products} = this.state; 
    const index = products.indexOf(product);
    if(products[index].qty === 0){
      return
    }
    products[index].qty -= 1;

    this.setState({
      products 
    });
  }
  handleDeleteQuantity = (id) => {
    const {products} = this.state; 
    const items = products.filter((item)=>item.id !== id);
    this.setState({
      products: items
    })
  };

  gotCartCount=()=> {
    const { products } = this.state;

    let count = 0;

    products.forEach((product)=>{
      count += product.qty
    })
    return count
  }

  render(){
    const {products} = this.state
    return (
      <div className="App">
      <Header count={this.gotCartCount()}/>
      <Cart 
          products = {products}

          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity}
       />
      {/* <Weather /> */}
    </div>
  );
}
}

export default App;
