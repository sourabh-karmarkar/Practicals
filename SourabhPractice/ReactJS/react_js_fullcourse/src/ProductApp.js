/*
    Displaying Products from a json file
*/
import React from 'react';
import Product from './Products/Products'
import productsData from './Products/vschoolProducts';

function ProductApp(){

    const productComponents=productsData.map(item=><Product key={item.id} product={item}/>);
    return(
        <div>
            {productComponents}
        </div>
    );
}

export default ProductApp;