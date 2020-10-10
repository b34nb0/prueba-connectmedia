import React from "react";
import CloseIcon from '@material-ui/icons/Close';

function Detail(props) {

    function closePopup() {
        props.onClose();
    }

    return (
        <div className="popup-bg">
            <div className="product-popup">
                <CloseIcon
                    id="btn-close-popup"
                    onClick={closePopup}/>

                <p className="product-code">{props.code}</p>
                <p className="product-name">{props.name}</p>
                <p className="product-description">{props.description}</p>
                <p className="product-price"><sup style={{fontSize:"0.8rem", }}>S/ </sup>{props.price.toFixed(2)}</p>

            </div>

        </div>
        
    );

}

export default Detail;