import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import {ProductContext} from '../ProductContext/ProductContext'

export default function ShowProduct(props) {
    const [products,] = useContext(ProductContext)
    return (
        <div className='productCard d-flex flex-row flex-wrap p-4 m-5 align-items-around'>
            {
                        products.map((item) =>
                        <ProductCard key={item.id} id={item.id} name={item.name} price={item.price}/>)
            }
        </div>
    )
}
