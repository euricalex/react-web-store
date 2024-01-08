import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from './components/items'
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
      currentItems: [],
      items: 

      [
        {
          "id": 1,
          "name": "Dining Table",
          "description": "Sturdy and stylish dining table made from natural wood, perfect for family meals.",
          "price": 599.99,
          "photo": "table-1.jpg",
          "category": "tables"
        },
        {
          "id": 2,
          "name": "Soft Armchair",
          "description": "Comfortable soft armchair with armrests, ideal for relaxing in the living room.",
          "price": 349.99,
          "photo": "chair1.jpg",
          "category": "chairs"
        },
        {
          "id": 3,
          "name": "Wardrobe",
          "description": "Spacious wardrobe with shelves and hangers for storing your clothes and accessories.",
          "price": 799.99,
          "photo": "closet1.jpg",
          "category": "wardrobes"
        },
        {
          "id": 4,
          "name": "Corner Sofa",
          "description": "Modern corner sofa with soft cushions, creating coziness in your living room.",
          "price": 899.99,
          "photo": "sofa1.webp",
          "category": "sofa"
        },
        {
          "id": 5,
          "name": "Bar Stool",
          "description": "High bar stool with a comfortable seat and footrest, perfect for your bar counter.",
          "price": 129.99,
          "photo": "stool1.jpg",
          "category": "bar_stools"
        },
        {
          "id": 6,
          "name": "Chest of Drawers",
          "description": "Elegant chest of drawers with multiple drawers for storing small items and accessories.",
          "price": 449.99,
          "photo": "dresser1.webp",
          "category": "drawers"
        },
        {
          "id": 7,
          "name": "Kitchen Table",
          "description": "Compact kitchen table, perfect for small kitchens or dining areas.",
          "price": 299.99,
          "photo": "table2.webp",
          "category": "tables"
        },
        {
          "id": 8,
          "name": "Double Bed",
          "description": "Comfortable and stylish double bed with an exquisite design.",
          "price": 699.99,
          "photo": "bed1.webp",
          "category": "beds"
        },
        {
          "id": 9,
          "name": "Bookshelf",
          "description": "Tall bookshelf with shelves for storing books, decorative items, and collections.",
          "price": 179.99,
          "photo": "bookshelf1.jpg",
          "category": "bookshelves"
        },
        {
          "id": 10,
          "name": "Computer Desk",
          "description": "Modern computer desk with convenient compartments for your computer and accessories.",
          "price": 499.99,
          "photo": "desk1.webp",
          "category": "desks"
        }
      ],
      showFullItem: false,
      fullItem: {}
      
    }
this.state.currentItems = this.state.items;
this.addToOrder = this.addToOrder.bind(this);
this.deleteOrder = this.deleteOrder.bind(this);
this.chooseCategory = this.chooseCategory.bind(this);
this.onShowItem = this.onShowItem.bind(this);
this.onCloseItem = this.onCloseItem.bind(this);
  }
 
  render() {
    return (
      <div className="wrapper">
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Categories chooseCategory={this.chooseCategory}/>
 <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd = {this.addToOrder}/>
 {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem}  onCloseItem={this.onCloseItem}  onAdd = {this.addToOrder} item = {this.state.fullItem}/>}
 
     <Footer/>
     </div>
     );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  onCloseItem() {
    this.setState({ showFullItem: false });
  }
  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return;
    }
this.setState({
  currentItems: this.state.items.filter(data => data.category === category)
});
  }
deleteOrder(id) {
this.setState({orders: this.state.orders.filter(data => data.id !== id)});
}
addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(data => {
    if(data.id === item.id) 
    isInArray = true;
  })
    if(!isInArray) 
      this.setState({orders: [...this.state.orders, item]})   
    
}

  }
export default App;
