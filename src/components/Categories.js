import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
    categories:[
        {
          key: 'all',
          name: 'All',
        },
        {
          key: 'chairs',
          name: 'Chairs',
        },
        {
          key: 'tables',
          name: 'Tables',
        },
        {
          key: 'sofa',
          name: 'Sofas',
        },
        {
          key: 'wardrobes',
          name: 'Wardrobes',
        },
        {
          key: 'bar_stools',
          name: 'Bar Stools',
        },
        {
          key: 'drawers',
          name: 'Drawers',
        },
        {
          key: 'beds',
          name: 'Beds',
        },
        {
          key: 'bookshelves',
          name: 'Bookshelves',
        },
        {
          key: 'desks',
          name: 'Desks',
        },
      ]
        }
    }
    
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(data => (
            <div onClick={() => this.props.chooseCategory(data.key)} key={data.key}>{data.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories