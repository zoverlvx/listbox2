import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
                    <input 
                        id="newItem"
                        name="newItem"
                    />
                    <button
                        type="submit"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        );
    }
}

export default App;
