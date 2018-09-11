import React from "react";

const ItemList = (props) => {
    return (
        <div>
            <p>Item list mounted</p>
            <ul>
                {
                    props.list.map(
                        (item, index) => {
                            return (
                                <li
                                    onClick={
                                        () => 
                                            props.moveItem(index, "toCart")
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
        </div>
    )

}

export default ItemList;
