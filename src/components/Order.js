import React, { Component } from 'react';
import {FaTrash} from 'react-icons/fa';

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./images/" + this.props.item.photo} width={350} height={350} alt='decorate'/>
        <h2>{this.props.item.name}</h2>
        <b>{this.props.item.price}$</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order