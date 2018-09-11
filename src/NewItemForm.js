import React from "react";

const NewItemForm = (props) => { 
    return (
        <form
            onSubmit={props.formSubmitted}
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
                onChange={props.newItemChanged} 
                value={props.newItem}
            />
            <button
                type="submit"
            >
                Add Item
            </button>
        </form>

    )
}

export default NewItemForm;
