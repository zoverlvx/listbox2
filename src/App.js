import React, { Component } from 'react';
import NewTodoForm from "./NewTodoForm";

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

    moveItem(index, direction) {
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
                <NewTodoForm /*Compare the context of this as defined in the
                                state component with the new changes made in the
                                new child component which receives the state as                                 passed down as props*/
                    newItem={this.state.newItem}
                    formSubmitted={this.formSubmitted.bind(this)}
                    newItemChanged={this.newItemChanged.bind(this)}
                />                
                <h3>Items to Buy:</h3>
                <ul>
                    {
                        this.state.itemsToBuy.map(
                            (item, index) => {
                                return (
                                    <li
                                        onClick={
                                            () => 
                                                this.moveItem(index, "toCart")
                                        }
                                        key={`${item.title}-${index}`}
                                    >
                                        {item.title}
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                <h3>Items in Cart:</h3>
                <ul>
                    {
                        this.state.itemsInCart.map(
                            (item, index) => {
                                return (
                                    <li
                                        onClick={
                                            () => 
                                                this.moveItem(index, "toBuy")
                                        }
                                        key={`${item.title}-${index}}`}
                                    >
                                        {item.title}
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default App;
