import React from 'react';
import {Link} from "react-router-dom";

const products = ["car", "bike", "motorcycle"];

const ProductsListPage = () => {

    const productsList = products.map(product=>(
        <li key={product}>
            <Link to={`/product/${product}`}>{ product }</Link>
        </li>
    ));

    return (
        <div className="products">
            <h2>Produkty - Lista produktów</h2>
            <ul>
                { productsList }
            </ul>
        </div>
    );
};

export default ProductsListPage;
