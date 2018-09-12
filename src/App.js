import React, { Component } from 'react';
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            newItem: "",
            itemsToBuy: [],
            itemsInCart: []
        }
    }

    newItemChanged(e) {
        this.setState({
            newItem: e.target.value
        });
    }

    formSubmitted(e) {
        e.preventDefault();
        const {itemsToBuy, itemsInCart, newItem} = this.state;
        function check(listItem) {
            return listItem.title === newItem;
        }
        if (this.state.newItem === "") {
            alert("Please, submit an item to add to list.");
        } else if (itemsToBuy.some(check) || itemsInCart.some(check)) {
            alert("Item is already in one of the lists. Please, choose another.");
        } else { 
            this.setState({
                newItem: "",
                itemsToBuy: [
                    ...this.state.itemsToBuy,
                    {
                        title: this.state.newItem
                    }
                ]
            })
        }
    }

    moveItem = (direction) => (index) => {
        const {itemsToBuy, itemsInCart} = this.state;
        
        if(direction === "toCart") {
            this.setState({
                itemsToBuy: itemsToBuy.filter(
                    item => item.title !== itemsToBuy[index].title
                ),
                itemsInCart: [...itemsInCart, itemsToBuy[index]]
            })
        }
        if (direction === "toBuy") {
            this.setState({
                itemsToBuy: [...itemsToBuy, itemsInCart[index]],
                itemsInCart: itemsInCart.filter(
                    item => item.title !== itemsInCart[index].title
                )
            })
        }
    }

    render() {
        return (
            <div className="App">
                <h1>ListBox</h1>
                <NewItemForm 
                    newItem={this.state.newItem}
                    formSubmitted={this.formSubmitted.bind(this)}
                    newItemChanged={this.newItemChanged.bind(this)}
                />
                <h3>Items to Buy:</h3>
                <ItemList
                    list={this.state.itemsToBuy}
                    moveItem={this.moveItem("toCart")}
                />
                
                <h3>Items in Cart:</h3>
                <ItemList
                    list={this.state.itemsInCart}
                    moveItem={this.moveItem("toBuy")}
                />
            </div>
        );
    }
}

export default App;
