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
          img: "https://www.boat-lifestyle.com/cdn/shop/products/main-image-3_e934902f-345b-4cc4-80b9-9ef3d77a1f34.png?v=1661272676",
          id: 1
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 0,
          img: "https://opsg-img-cdn-gl.heytapimg.com/epb/202306/20/Nj8gwGkvnAammPPm.png",
          id: 2
        },
        {
          price: 999,
          title: "laptop",
          qty: 0,
          img: "https://www.gaming.gen.tr/wp-content/uploads/2023/08/dell-gaming-g15-5530-g155530013u-intel-core-i7-13650hx-16gb-ddr5-1tb-ssd-rtx4060-8gb-140w-15-6-inc-full-hd-ubuntu-gaming-laptop-1.jpg",
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

  gotCartTotal =()=>{
    const {products} = this.state;
    let count = 0;
      
    products.map((product)=>{
      count = count+product.qty*product.price
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
      <div style={{padding: 20, fontSize: 25}}> Total: {this.gotCartTotal()}</div>
    </div>
  );
}
}

export default App;
