import React from "react";

const Item = (props) => {
    const {item, index} = props;
    return (
        <li
            onClick={(direction) => props.moveItem(index, direction)}
            key={`${item.title}-${index}`}
        >
            {item.title}
        </li>
    )
}

export default Item;
