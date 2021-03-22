import React from 'react';
import {Link} from "react-router-dom";

const ProductPage = ({match}) => {
    const productName = match.params.name;
    return (
        <div className="flex-column">
            <Link to="/products">powrót do listy produktów</Link>
            <p>Produkt:</p>
            <p>Nazwa: <strong>{productName}</strong></p>


        </div>
    );
};

export default ProductPage;
