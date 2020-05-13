import React from "react";
import Btn from './btn'

class ProductCard extends React.Component{
  render(){
    return (
      <div className="col mb-4 d-flex flex-column product__card">
        <img className="product__img" src={this.props.img} alt="" />
        <div className="d-block">
          <h3 className="h5">{this.props.title}</h3>
          <p>{this.props.price}€</p>
          <Btn label="Add to cart" onClick={this.props.handleAddToCart} />
        </div>
      </div>
    );
  }
}

export default ProductCard;
