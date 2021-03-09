import React, { useState,useContext } from 'react'
import './AddProduct.css'
import {ProductContext} from '../ProductContext/ProductContext';
import axios from 'axios';

export default function AddProduct() {
    const [pid, setId] = useState();
    const [pname, setName] = useState();
    const [pprice, setPrice] = useState();
    const [products,setProducts] = useContext(ProductContext)

    const AddHandler = () => {
        axios.post('http://localhost:3000/products',{id:pid,name:pname,price:pprice})
        .then(setProducts([...products,{id:pid,name:pname,price:pprice}]))
        .then(alert('Product Added'))
    }
    return (
        <div>
            <div className="accordion" id="accordionExample">
                    <div className="accordion-item p-0">
                        <h2 className="accordion-header e-header" id="headingOne">
                            <button className="accordion-button mt-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                            aria-expanded="false" aria-controls="collapseOne">
                                Expand to add product!!
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse hide" 
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                    <div className="form-group">
                                        <label htmlFor="id">Product-ID:</label>
                                        <input type="text" className="form-control" id="id" 
                                        onChange={(data)=>setId(data.target.value)} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" id="name"
                                        onChange={(data)=>setName(data.target.value)} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price:</label>
                                        <input type="text" className="form-control" id="price"
                                        onChange={(data)=>setPrice(data.target.value)} required/>
                                    </div>
                                    <button type="submit" className="btn btn-info"
                                    onClick={AddHandler.bind(this)}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}