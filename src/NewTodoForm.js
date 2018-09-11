import React from "react";

const NewTodoForm = () => {
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
}

export default NewTodoForm;
