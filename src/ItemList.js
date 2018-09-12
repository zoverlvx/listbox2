import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.list.map(
                        (item, index) => {
                            return (
                                <Item
                                    key={index}
                                    item={item}
                                    index={index}
                                    moveItem={props.moveItem}

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
