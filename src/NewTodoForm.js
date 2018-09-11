import React from "react";

const NewTodoForm = (props) => { //<-- props passed from state component 
                                    // to this child component

// don't forget to use return like I did earlier when creating this
    return (
        <form
            onSubmit={props.formSubmitted} //<-- props
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
                onChange={props.newItemChanged} //<-- props
                value={props.newItem} // <-- props
            />
            <button
                type="submit"
            >
                Add Item
            </button>
        </form>

    )
}

export default NewTodoForm;
