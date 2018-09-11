import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    return (
        <div>
            <p>Item list mounted</p>
            <ul>
                {
                    props.list.map(
                        (item, index) => {
                            return (
                                <Item
                                    item={item}
                                    index={index}
                                    moveItem={
                                        (index, direction) => 
                                        props.moveItem(index, direction)
                                    }

                                /> 
                            )
                        }
                    )
                }
            </ul>
        </div>
    )

}

export default ItemList;
