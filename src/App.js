import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            newItem: "",
            itemsToBuy: []
        }
    }

    newItemChanged(e) {
        this.setState({
            newItem: e.target.value
        });
    }

    formSubmitted(e) {
        e.preventDefault();
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

    render() {
        return (
            <div className="App">
                <h1>ListBox</h1>
                <form
                    onSubmit={(e) => this.formSubmitted(e)} 
                >
                    <label
                        htmlFor="newItem"
                    >
                        New Item
                    </label>
                    <br />
                    <input 
                        id="newItem"
                        name="newItem"
                        onChange={(e) => this.newItemChanged(e)}
                        value={this.state.newItem}
                    />
                    <button
                        type="submit"
                    >
                        Add Item
                    </button>
                </form>
                <h3>Items to Buy:</h3>
                <ul>
                    {
                        this.state.itemsToBuy.map(
                            (item) => {
                                return (
                                    <li
                                    >
                                        {item.title}
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                <h3>Items in Cart:</h3>
            </div>
        );
    }
}

export default App;
