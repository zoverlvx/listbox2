import React from "react";

const Item = (props) => {
    const {item, index} = props;
    return (
        <li
            onClick={() => props.moveItem(index)}
        >
            {item.title}
        </li>
    )
}

export default Item;
