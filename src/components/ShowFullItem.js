import React, { Component } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export class ShowFullItem extends Component {
   
  render() {
    return (
      <div className='full-item' onClick={() => this.props.onCloseItem(this.props.item)}>
       
        <div className='modal-window' onClick={(click) => click.stopPropagation() } >
        <IoCloseSharp onClick={() => this.props.onCloseItem(this.props.item)} className='close-sharp' size={28}/>
        <img className='modal-img' src={require("../images/" + this.props.item.photo)} onClick={() => this.props.onShowItem(this.props.item)} width={350} height={350} alt='decorate'/>
     
        <h2 className='modal-title'>{this.props.item.name}</h2>
        <p className='modal-desc'>{this.props.item.description}</p>
        <b className='modal-price'>{this.props.item.price}$</b>
        <div className='add-to-card-modal' onClick={() => this.props.onAdd(this.props.item)}>
            +
        </div>
    
        </div>
        
      </div>
    )
  }
}

export default ShowFullItem