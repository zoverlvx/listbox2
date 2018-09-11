import React from "react";

const NewTodoForm = () => {
    <form /*The handlers and attributes which use the state and its methods
            will be marked on this component in the parent component (App).
            The state's data and its method will then be passed as an argument
             of props into this component.*/
        onSubmit={(e) => this.formSubmitted(e)} //<-- this will be passed 
                                                        //from state down
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
            onChange={(e) => this.newItemChanged(e)} //<-- and this one
            value={this.state.newItem} // <-- and this one
        />
        <button
            type="submit"
        >
            Add Item
        </button>
    </form>
}

export default NewTodoForm;
