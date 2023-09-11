import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../Assets/images(2).png';
import pimage2 from '../Assets/images(3).png';
import pimage3 from '../Assets/images(4).png';
import pimage4 from '../Assets/images(5).png';
import pimage5 from '../Assets/images(6).png';
import pimage6 from '../Assets/images(7).png';

function Products() {
    return(
        <div id='products'>
            <h1> PRODUCTS</h1>
            <div className='a-container'>
                <Productbox image={pimage1} title="Chocolate Cake"/>
                <Productbox image={pimage2} title="Vanilla Cake"/>
                <Productbox image={pimage3} title="Strawberry Cake"/>
            </div>
            <div className='a-container'>
                <Productbox image={pimage4} title="Cup Cake"/>
                <Productbox image={pimage5} title="Red Velvet Cake"/>
                <Productbox image={pimage6} title="Black Forest Cake"/>
            </div>
        </div>
    )
}

export default Products;