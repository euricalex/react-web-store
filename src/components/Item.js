import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
       
    <div className='item'>
        <img src={require("../images/" + this.props.item.photo)} onClick={() => this.props.onShowItem(this.props.item)} width={350} height={350} alt='decorate'/>
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
    </div>
    )
  }
}

export default Item