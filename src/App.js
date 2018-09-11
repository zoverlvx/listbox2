import React, { Component } from 'react';
import './App.css';

class App extends Component {

    newItemChanged(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="App">
                <h1>ListBox</h1>
                <form
                
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
                    />
                    <button
                        type="submit"
                    >
                        Add Item
                    </button>
                </form>
                <h3>Items to Buy:</h3>
                <h3>Items in Cart:</h3>
            </div>
        );
    }
}

export default App;
