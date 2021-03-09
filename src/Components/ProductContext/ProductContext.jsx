import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();
export const ProductProvider = (props) => {
    const [products,setProducts] = useState();
    const [flag, setFlag] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(response => {setFlag(false);
            setProducts(response.data)});
    },[flag]);

    return (
        <ProductContext.Provider value={[products,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
