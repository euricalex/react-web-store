import React, { Component } from 'react'
import Item from './Item'

export class items extends Component {
  render() {
    return (
    <main className='goods'>
      {this.props.items.map(data => (
       
        <Item  onShowItem = {this.props.onShowItem} key={data.id} item = {data} onAdd={this.props.onAdd}/>
        
      ))}
    </main>
    )
  }
}

export default items