import React from "react";
import ListAltIcon from '@material-ui/icons/ListAlt';

function Product(props) {

    function handleClick() {
        props.clickOnProduct(props.id);

    }

    return (
        <div
            className="product-row"
            onClick={handleClick}>
                <ListAltIcon />
                <p>{props.name}</p>
        </div>
    );
}

export default Product;